import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/models/User";
import Registration from "@/app/models/Registration";
import { NextResponse } from "next/server";

// Function to validate roll number format (e.g., 20I-1234)
const validateRollNo = (rollno) => {
  const rollnoRegex = /^\d{2}[A-Z]-\d{4}$/;
  return rollnoRegex.test(rollno);
};

// List of valid departments
const validDepartments = ["CS", "SE", "AI", "CY", "EE", "CS-Robo", "DS", "BBA"];

// Function to validate department
const validateDepartment = (department) => {
  return validDepartments.includes(department.toUpperCase());
};

export async function POST(req) {
  await dbConnect();

  try {
    const { name, email, rollno, password, department, eventID, workshopID } =
      await req.json();

    // Validate roll number format
    if (!validateRollNo(rollno)) {
      return NextResponse.json(
        {
          message: "Invalid roll number format. It must be in format: 20I-1234",
        },
        { status: 400 }
      );
    }

    // Validate department
    if (!validateDepartment(department)) {
      return NextResponse.json(
        {
          message: `Invalid department. It must be one of the following: ${validDepartments.join(
            ", "
          )}`,
        },
        { status: 400 }
      );
    }

    // Check if the user with the given email or rollno already exists
    let user = await User.findOne({ $or: [{ email }, { rollno }] });

    // If no user is found, create a new user
    if (!user) {
      user = new User({
        name,
        email,
        rollno,
        password: password || null, // Handle the case where password is optional
        department: department.toUpperCase(), // Ensure department is stored in uppercase
      });

      await user.save();
    }

    // Check if the user has already registered for the same event or workshop
    const existingRegistration = await Registration.findOne({
      userID: user._id,
      $or: [{ eventID }, { workshopID }],
    });

    if (existingRegistration) {
      return NextResponse.json(
        {
          message: "You are already registered for this event or workshop.",
        },
        { status: 400 }
      );
    }

    // Create a new registration using the user ID
    const newRegistration = new Registration({
      userID: user._id, // Use the user's ID
      eventID: eventID || null,
      workshopID: workshopID || null,
    });

    await newRegistration.save();

    return NextResponse.json(
      { message: "Registration created successfully", data: newRegistration },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create registration", error: error.message },
      { status: 500 }
    );
  }
}
