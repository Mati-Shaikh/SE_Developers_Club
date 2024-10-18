import Workshop from "@/app/models/Workshop";
import dbConnect from "@/app/lib/dbConnect";  
import { NextResponse } from "next/server";

export async function PUT(req) {
  await dbConnect();
  
  const { id, name, speaker, time, venue, capacity, description, helpingMaterials, images } = await req.json();

  try {
    const updatedWorkshop = await Workshop.findByIdAndUpdate(
      id,
      { name, speaker, time, venue, capacity, description, helpingMaterials, images },
      { new: true } // Return the updated document
    );

    if (!updatedWorkshop) {
      return NextResponse.json({ message: "Workshop not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Workshop updated successfully", data: updatedWorkshop }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to update workshop", error: error.message }, { status: 500 });
  }
}
