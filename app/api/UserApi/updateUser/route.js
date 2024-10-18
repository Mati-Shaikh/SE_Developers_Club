import dbConnect from "@/app/lib/dbConnect";  
import User from "@/app/models/User";        
import { NextResponse } from "next/server";

// PATCH method to update a user
export async function PATCH(req) {
  const body = await req.json();
  const { email, name, password, department } = body; // Destructure fields to update

  await dbConnect();

  try {
    // Find the user by email and update their information
    const updatedUser = await User.findOneAndUpdate(
      { email },  // Search criteria: find by email
      { name, password, department },  // Fields to update
      { new: true, runValidators: true }  // Return the updated document and run schema validation
    );

    if (!updatedUser) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    // Return a success response with the updated user
    return NextResponse.json(
      { success: true, message: "User updated successfully", user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { success: false, message: "Error updating user", error: error.message },
      { status: 500 }
    );
  }
}
