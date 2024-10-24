import dbConnect from "@/app/lib/dbConnect";
import Registration from "@/app/models/Registration";
import { NextResponse } from "next/server";

export async function GET(req) {
  await dbConnect();

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    if (id) {
      const registration = await Registration.findById(id).populate("userID").populate("eventID").populate("workshopID");

      if (!registration) {
        return NextResponse.json({ message: "Registration not found" }, { status: 404 });
      }

      // Safely check if eventID and workshopID exist and have a 'name' field
      const eventOrWorkshopName = registration.eventID?.name || registration.workshopID?.name || "N/A";

      // Extract user details
      const user = registration.userID;
      const userInfo = {
        name: user.name,
        email: user.email,
        department: user.department,
        rollNumber: user.rollNumber,
      };

      // Include user info and event/workshop name in the response
      const responseData = {
        ...registration.toObject(), // Convert to plain object
        eventOrWorkshopName: eventOrWorkshopName,
        userInfo: userInfo,
      };

      return NextResponse.json(
        { message: "Registration retrieved successfully", data: responseData },
        { status: 200 }
      );
    } else {
      const registrations = await Registration.find({})
        .populate("userID")
        .populate("eventID")
        .populate("workshopID");

      // Add event or workshop name and user info for each registration
      const responseRegistrations = registrations.map((registration) => {
        const eventOrWorkshopName = registration.eventID?.name || registration.workshopID?.name || "N/A";

        const user = registration.userID;
        const userInfo = {
          name: user?.name || "Unknown",
          email: user?.email || "Unknown",
          department: user?.department || "Unknown",
          rollNumber: user?.rollNumber || "Unknown",
        };

        return {
          ...registration.toObject(), // Convert to plain object
          eventOrWorkshopName: eventOrWorkshopName,
          userInfo: userInfo,
        };
      });

      return NextResponse.json(
        { message: "Registrations retrieved successfully", data: responseRegistrations },
        { status: 200 }
      );
    }
  } catch (error) {
    // Debug log the error for clarity
    console.error("Error retrieving registrations:", error);

    return NextResponse.json(
      { message: "Failed to retrieve registrations", error: error.message },
      { status: 500 }
    );
  }
}
