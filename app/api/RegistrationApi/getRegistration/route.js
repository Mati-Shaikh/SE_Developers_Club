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

      // Get event or workshop name based on what exists
      let eventOrWorkshopName = null;
      if (registration.eventID) {
        eventOrWorkshopName = registration.eventID.name; // Assuming 'name' is a field in Event schema
      } else if (registration.workshopID) {
        eventOrWorkshopName = registration.workshopID.name; // Assuming 'name' is a field in Workshop schema
      }

      // Extract user details
      const user = registration.userID;
      const userInfo = {
        name: user.name,
        email: user.email,
        department: user.department,
        rollNumber: user.rollNumber
      };

      // Include user info and event/workshop name in the response
      const responseData = {
        ...registration.toObject(), // Convert to plain object
        eventOrWorkshopName: eventOrWorkshopName,
        userInfo: userInfo
      };

      return NextResponse.json({ message: "Registration retrieved successfully", data: responseData }, { status: 200 });
    } else {
      const registrations = await Registration.find({}).populate("userID eventID workshopID");

      // Add event or workshop name and user info for each registration
      const responseRegistrations = registrations.map((registration) => {
        let eventOrWorkshopName = null;
        if (registration.eventID) {
          eventOrWorkshopName = registration.eventID.name;
        } else if (registration.workshopID) {
          eventOrWorkshopName = registration.workshopID.name;
        }

        const user = registration.userID;
        const userInfo = {
          name: user.name,
          email: user.email,
          department: user.department,
          rollNumber: user.rollNumber
        };

        return {
          ...registration.toObject(), // Convert to plain object
          eventOrWorkshopName: eventOrWorkshopName,
          userInfo: userInfo
        };
      });

      return NextResponse.json({ message: "Registrations retrieved successfully", data: responseRegistrations }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Failed to retrieve registrations", error: error.message }, { status: 500 });
  }
}
