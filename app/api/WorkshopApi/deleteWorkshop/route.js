import Workshop from "@/app/models/Workshop";
import dbConnect from "@/app/lib/dbConnect";  
import { NextResponse } from "next/server";

export async function DELETE(req) {
  await dbConnect();
  
  const { id } = await req.json(); // ID passed in the request body

  try {
    const deletedWorkshop = await Workshop.findByIdAndDelete(id);

    if (!deletedWorkshop) {
      return NextResponse.json({ message: "Workshop not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Workshop deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete workshop", error: error.message }, { status: 500 });
  }
}
