// import dbConnect from "@/app/lib/dbConnect";
// import User from "@/app/models/User";
// import Registration from "@/app/models/Registration";
// import { NextResponse } from "next/server";

// // Function to validate roll number format (e.g., 20I-1234)
// const validateRollNo = (rollno) => {
//   const rollnoRegex = /^\d{2}[A-Z]-\d{4}$/;
//   return rollnoRegex.test(rollno);
// };

// // List of valid departments
// const validDepartments = ["CS", "SE", "AI", "CY", "EE", "CS-Robo", "DS", "BBA"];

// // Function to validate department
// const validateDepartment = (department) => {
//   return validDepartments.includes(department.toUpperCase());
// };

// export async function POST(req) {
//   await dbConnect();

//   try {
//     const { name, email, rollno, password, department, eventID, workshopID } =
//       await req.json();

//     // Validate roll number format
//     if (!validateRollNo(rollno)) {
//       return NextResponse.json(
//         {
//           message: "Invalid roll number format. It must be in format: 20I-1234",
//         },
//         { status: 400 }
//       );
//     }

//     // Validate department
//     if (!validateDepartment(department)) {
//       return NextResponse.json(
//         {
//           message: `Invalid department. It must be one of the following: ${validDepartments.join(
//             ", "
//           )}`,
//         },
//         { status: 400 }
//       );
//     }

//     // Check if the user with the given email or rollno already exists
//     let user = await User.findOne({ $or: [{ email }, { rollno }] });

//     // If no user is found, create a new user
//     if (!user) {
//       user = new User({
//         name,
//         email,
//         rollno,
//         password: password || null, // Handle the case where password is optional
//         department: department.toUpperCase(), // Ensure department is stored in uppercase
//       });

//       await user.save();
//     }

//     // Check if the user has already registered for the same event or workshop
//     const existingRegistration = await Registration.findOne({
//       userID: user._id,
//       $or: [{ eventID }, { workshopID }],
//     });

//     if (existingRegistration) {
//       return NextResponse.json(
//         {
//           message: "You are already registered for this event or workshop.",
//         },
//         { status: 400 }
//       );
//     }

//     // Create a new registration using the user ID
//     const newRegistration = new Registration({
//       userID: user._id, // Use the user's ID
//       eventID: eventID || null,
//       workshopID: workshopID || null,
//     });

//     await newRegistration.save();

//     return NextResponse.json(
//       { message: "Registration created successfully", data: newRegistration },
//       { status: 201 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Failed to create registration", error: error.message },
//       { status: 500 }
//     );
//   }
// }

// import dbConnect from "@/app/lib/dbConnect";
// import User from "@/app/models/User";
// import Event from "@/app/models/Event";
// import Registration from "@/app/models/Registration";
// import { NextResponse } from "next/server";
// import Workshop from "@/app/models/Workshop";

// // Function to validate roll number format (e.g., 20I-1234)
// const validateRollNo = (rollno) => {
//   const rollnoRegex = /^\d{2}[A-Z]-\d{4}$/;
//   return rollnoRegex.test(rollno);
// };

// // List of valid departments
// const validDepartments = ["CS", "SE", "AI", "CY", "EE", "CS-Robo", "DS", "BBA"];

// // Function to validate department
// const validateDepartment = (department) => {
//   return validDepartments.includes(department.toUpperCase());
// };

// export async function POST(req) {
//   await dbConnect();

//   try {
//     const { users, eventID, workshopID } = await req.json(); // Accept `users` as an array

//     if (!Array.isArray(users) || users.length === 0) {
//       return NextResponse.json(
//         { message: "Users array is required and cannot be empty." },
//         { status: 400 }
//       );
//     }

//     if (eventID) {
//       // Fetch the event details to check the `teamSize`
//       const event = await Event.findById(eventID);
//       if (!event) {
//         return NextResponse.json(
//           { message: "Event not found with the provided ID." },
//           { status: 404 }
//         );
//       }

//       // Check if the number of users in the request exceeds the event's `teamSize`
//       if (users.length > event.teamSize) {
//         return NextResponse.json(
//           {
//             message: `Number of users (${users.length}) exceeds the allowed team size (${event.teamSize}) for this event.`,
//           },
//           { status: 400 }
//         );
//       }
//     }

//     if (workshopID) {
//       // Fetch the workshop details to check the `teamSize`
//       const workshop = await Workshop.findById(workshopID);
//       if (!workshop) {
//         return NextResponse.json(
//           { message: "Workshop not found with the provided ID." },
//           { status: 404 }
//         );
//       }

//       // Check if the number of users in the request exceeds the `teamSize`
//       if (users.length > workshop.teamSize) {
//         return NextResponse.json(
//           {
//             message: `Number of users (${users.length}) exceeds the allowed team size (${event.teamSize}) for this workshop.`,
//           },
//           { status: 400 }
//         );
//       }
//     }

//     const registeredUserIDs = [];

//     for (const userData of users) {
//       const { name, email, rollno, password, department } = userData;

//       // Validate roll number format
//       if (!validateRollNo(rollno)) {
//         return NextResponse.json(
//           {
//             message: `Invalid roll number format for user ${email}. It must be in format: 20I-1234`,
//           },
//           { status: 400 }
//         );
//       }

//       // Validate department
//       if (!validateDepartment(department)) {
//         return NextResponse.json(
//           {
//             message: `Invalid department for user ${email}. It must be one of the following: ${validDepartments.join(
//               ", "
//             )}`,
//           },
//           { status: 400 }
//         );
//       }

//       // Check if the user with the given email or rollno already exists
//       let user = await User.findOne({ $or: [{ email }, { rollno }] });

//       // If no user is found, create a new user
//       if (!user) {
//         user = new User({
//           name,
//           email,
//           rollno,
//           password: password || null, // Handle the case where password is optional
//           department: department.toUpperCase(), // Ensure department is stored in uppercase
//         });

//         await user.save();
//       }

//       // Add the user's ID to the list
//       registeredUserIDs.push(user._id);
//     }

//     // Check if a registration already exists for the given event or workshop
//     let registration = await Registration.findOne({
//       $or: [{ eventID }, { workshopID }],
//     });

//     if (registration) {
//       // Add any new user IDs to the existing registration
//       registeredUserIDs.forEach((userID) => {
//         if (!registration.userIDs.includes(userID)) {
//           registration.userIDs.push(userID);
//         }
//       });
//     } else {
//       // Create a new registration with the list of user IDs
//       registration = new Registration({
//         userID: registeredUserIDs,
//         eventID: eventID || null,
//         workshopID: workshopID || null,
//       });
//     }

//     // Save the registration
//     await registration.save();

//     return NextResponse.json(
//       { message: "Registration created successfully", data: registration },
//       { status: 201 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Failed to create registration", error: error.message },
//       { status: 500 }
//     );
//   }
// }

import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/models/User";
import Event from "@/app/models/Event";
import Registration from "@/app/models/Registration";
import { NextResponse } from "next/server";
import Workshop from "@/app/models/Workshop";

const validateRollNo = (rollno) => /^\d{2}[A-Z]-\d{4}$/.test(rollno);

const validDepartments = ["CS", "SE", "AI", "CY", "EE", "CS-Robo", "DS", "BBA"];

const validateDepartment = (department) =>
  validDepartments.includes(department.toUpperCase());

export async function POST(req) {
  await dbConnect();

  try {
    const { users, eventID, workshopID } = await req.json();

    if (!Array.isArray(users) || users.length === 0) {
      return NextResponse.json(
        { message: "Users array is required and cannot be empty." },
        { status: 400 }
      );
    }

    // if (!eventID && !workshopID) {
    //   return NextResponse.json(
    //     { message: "Either event or workshop is required." },
    //     { status: 400 }
    //   );
    // }

    const registeredUserIDs = [];

    for (const userData of users) {
      const { name, email, rollno, password, department } = userData;

      if (!validateRollNo(rollno)) {
        return NextResponse.json(
          {
            message: `Invalid roll number format for user ${email}. It must be in format: 20I-1234`,
          },
          { status: 400 }
        );
      }

      if (!validateDepartment(department)) {
        return NextResponse.json(
          {
            message: `Invalid department for user ${email}. It must be one of the following: ${validDepartments.join(
              ", "
            )}`,
          },
          { status: 400 }
        );
      }

      let user = await User.findOne({ $or: [{ email }, { rollno }] });

      if (!user) {
        user = new User({
          name,
          email,
          rollno,
          password: password || null,
          department: department.toUpperCase(),
        });

        await user.save();
      }

      // Check if the user is already registered for the event or workshop
      const existingRegistration = await Registration.findOne({
        $or: [{ eventID }, { workshopID }],
        userID: user._id,
      });

      if (existingRegistration) {
        return NextResponse.json(
          {
            message: `User ${user.email} is already registered for this ${
              eventID ? "event" : "workshop"
            }.`,
          },
          { status: 400 }
        );
      }

      registeredUserIDs.push(user._id);
    }

    let registration = new Registration({
      userIDs: registeredUserIDs,
      eventID: eventID || null,
      workshopID: workshopID || null,
    });

    await registration.save();

    return NextResponse.json(
      { message: "Registration created successfully", data: registration },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create registration", error: error.message },
      { status: 500 }
    );
  }
}
