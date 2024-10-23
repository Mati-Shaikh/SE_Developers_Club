import dbConnect from "@/app/lib/dbConnect";  
import User from "@/app/models/User";        
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  await dbConnect();

  // Destructure name, email, password, and department from the request body
  const { name, email, password, department } = body;

  try {
    // Create a new user instance with department
    const newUser = new User({ name, email, password, department });

    // Save the user to the database
    await newUser.save();

    // Return a success response
    return NextResponse.json(
      { success: true, message: "User created successfully", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving user:", error);
    return NextResponse.json(
      { success: false, message: "Error creating user", error: error.message },
      { status: 500 }
    );
  }
}
