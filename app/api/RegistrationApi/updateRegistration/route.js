import dbConnect from "@/app/lib/dbConnect";
import Registration from "@/app/models/Registration";
import { NextResponse } from "next/server";

export async function PUT(req) {
  await dbConnect();
  
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ message: "Registration ID is required" }, { status: 400 });
  }

  try {
    const updateData = await req.json();
    const updatedRegistration = await Registration.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedRegistration) {
      return NextResponse.json({ message: "Registration not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Registration updated successfully", data: updatedRegistration }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to update registration", error: error.message }, { status: 500 });
  }
}
