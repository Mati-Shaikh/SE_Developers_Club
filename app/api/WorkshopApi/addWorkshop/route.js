import Workshop from "@/app/models/Workshop";
import dbConnect from "@/app/lib/dbConnect";  
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();

  try {
    const { name, speaker, time, venue, capacity, description, helpingMaterials, images } = await req.json();
    
    const newWorkshop = new Workshop({
      name,
      speaker,
      time,
      venue,
      capacity,
      description,
      helpingMaterials,
      images
    });

    await newWorkshop.save();
    return NextResponse.json({ message: "Workshop added successfully", data: newWorkshop }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to add workshop", error: error.message }, { status: 500 });
  }
}
