import dbConnect from "@/app/lib/dbConnect";  
import User from "@/app/models/User";        
import { NextResponse } from "next/server";


// DELETE method to delete a user
export async function DELETE(req) {
    const { email } = await req.json();  // Assuming you're deleting the user by email
  
    await dbConnect();
  
    try {
      // Find the user by email and delete them
      const deletedUser = await User.findOneAndDelete({ email });
  
      if (!deletedUser) {
        return NextResponse.json(
          { success: false, message: "User not found" },
          { status: 404 }
        );
      }
  
      // Return a success response
      return NextResponse.json(
        { success: true, message: "User deleted successfully", user: deletedUser },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error deleting user:", error);
      return NextResponse.json(
        { success: false, message: "Error deleting user", error: error.message },
        { status: 500 }
      );
    }
  }