import dbConnect from "@/app/lib/dbConnect";
import Registration from "@/app/models/Registration";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();
  
  try {
    const { userID, eventID, workshopID } = await req.json();
    
    const newRegistration = new Registration({
      userID,
      eventID: eventID || null,
      workshopID: workshopID || null,
    });

    await newRegistration.save();
    return NextResponse.json({ message: "Registration created successfully", data: newRegistration }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to create registration", error: error.message }, { status: 500 });
  }
}
