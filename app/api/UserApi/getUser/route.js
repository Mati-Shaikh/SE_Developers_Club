import dbConnect from "@/app/lib/dbConnect";  
import User from "@/app/models/User";        
import { NextResponse } from "next/server";


// GET method to retrieve users
export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');
    console.log(email);
    await dbConnect();
  
    try {
      let users;
      
      if (email) {
        // If email is provided, fetch the specific user
        users = await User.findOne({ email });
        if (!users) {
          return NextResponse.json(
            { success: false, message: "User not found" },
            { status: 404 }
          );
        }
      } else {
        // If no email is provided, fetch all users
        users = await User.find({});
      }
  
      // Return a success response with user data
      return NextResponse.json(
        { success: true, users },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error fetching users:", error);
      return NextResponse.json(
        { success: false, message: "Error fetching users", error: error.message },
        { status: 500 }
      );
    }
  }