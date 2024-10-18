import dbConnect from "@/app/lib/dbConnect";
import Event from "@/app/models/Event";
import { NextResponse } from "next/server";

export async function GET(req) {
  await dbConnect();

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  console.log(id);
  try {
    if (id) {
      const event = await Event.findById(id); // Correctly use 'event'

      if (!event) { // Check if the event was found
        return NextResponse.json({ message: "Event not found" }, { status: 404 });
      }

      return NextResponse.json({ message: "Event retrieved successfully", data: event }, { status: 200 });
    } else {
      const events = await Event.find({}); // Retrieve all events
      return NextResponse.json({ message: "Events retrieved successfully", data: events }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Failed to retrieve events", error: error.message }, { status: 500 });
  }
}
