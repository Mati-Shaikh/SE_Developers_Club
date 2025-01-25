import dbConnect from "@/app/lib/dbConnect";
import Event from "@/app/models/Event";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();

  try {
    const { name, time, venue, capacity, description, images, teamSize } =
      await req.json();

    console.log(teamSize);

    const newEvent = new Event({
      name,
      time,
      venue,
      capacity,
      lock: false,
      teamSize: Number(teamSize),
      description,
      images,
    });

    await newEvent.save();
    return NextResponse.json(
      { message: "Event created successfully", data: newEvent },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create event", error: error.message },
      { status: 500 }
    );
  }
}
