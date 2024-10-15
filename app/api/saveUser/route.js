const dbConnect = require("../../../lib/dbConnect");
const User = require("../../../models/User");
const { NextResponse } = require("next/server");

export async function POST(req) {
  const body = await req.json();

  await dbConnect();

  const { name, email, password } = body;

  try {
    // Create a new user instance
    const newUser = new User({ name, email, password });

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
