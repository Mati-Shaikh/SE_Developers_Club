import Workshop from "@/app/models/Workshop";
import dbConnect from "@/app/lib/dbConnect";  
import { NextResponse } from "next/server";

export async function GET(req) {
  await dbConnect();
  
  // Get the ID from the query parameters
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    if (id) {
      // Find workshop by ID
      const workshop = await Workshop.findById(id);

      if (!workshop) {
        return NextResponse.json({ message: "Workshop not found" }, { status: 404 });
      }

      return NextResponse.json({ message: "Workshop retrieved successfully", data: workshop }, { status: 200 });
    } else {
      // Return all workshops
      const workshops = await Workshop.find({});
      return NextResponse.json({ message: "Workshops retrieved successfully", data: workshops }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Failed to retrieve workshops", error: error.message }, { status: 500 });
  }
}
