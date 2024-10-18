import dbConnect from "@/app/lib/dbConnect";
import Event from "@/app/models/Event";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  await dbConnect();

  try {
    const { id } = await req.json(); // Extract ID from request body

    if (!id) {
      return NextResponse.json({ message: "Event ID is required" }, { status: 400 });
    }

    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return NextResponse.json({ message: "Event not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Event deleted successfully", data: deletedEvent }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete event", error: error.message }, { status: 500 });
  }
}
