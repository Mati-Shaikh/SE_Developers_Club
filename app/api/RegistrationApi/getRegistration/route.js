import dbConnect from "@/app/lib/dbConnect";
import Registration from "@/app/models/Registration";
import { NextResponse } from "next/server";

export async function GET(req) {
  await dbConnect();

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    if (id) {
      const registration = await Registration.findById(id).populate("userID eventID workshopID");

      if (!registration) {
        return NextResponse.json({ message: "Registration not found" }, { status: 404 });
      }

      return NextResponse.json({ message: "Registration retrieved successfully", data: registration }, { status: 200 });
    } else {
      const registrations = await Registration.find({}).populate("userID eventID workshopID");
      return NextResponse.json({ message: "Registrations retrieved successfully", data: registrations }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Failed to retrieve registrations", error: error.message }, { status: 500 });
  }
}
