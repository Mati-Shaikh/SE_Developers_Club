
import dbConnect from "@/app/lib/dbConnect";
import Event from "@/app/models/Event";
import { NextResponse } from "next/server";

export async function PUT(req) {
  await dbConnect();

  try {
    const { id, ...updateData } = await req.json(); // Parse the request body

    if (!id) {
      return NextResponse.json({ message: "Event ID is required" }, { status: 400 });
    }

    const updatedEvent = await Event.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedEvent) {
      return NextResponse.json({ message: "Event not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Event updated successfully", data: updatedEvent }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to update event", error: error.message }, { status: 500 });
  }
}