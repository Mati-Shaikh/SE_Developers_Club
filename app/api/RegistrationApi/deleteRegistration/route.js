import dbConnect from "@/app/lib/dbConnect";
import Registration from "@/app/models/Registration";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  await dbConnect();

  try {
    const { id } = await req.json(); // Extract ID from request body

    if (!id) {
      return NextResponse.json({ message: "Registration ID is required" }, { status: 400 });
    }

    const deletedRegistration = await Registration.findByIdAndDelete(id);

    if (!deletedRegistration) {
      return NextResponse.json({ message: "Registration not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Registration deleted successfully", data: deletedRegistration }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete registration", error: error.message }, { status: 500 });
  }
}
