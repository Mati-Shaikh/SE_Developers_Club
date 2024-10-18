import mongoose from "mongoose";
import Event from "@/app/models/Event";
import User from "@/app/models/User";
import Workshop from "@/app/models/Workshop";

const registrationSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    eventID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      default: null,
    },
    workshopID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workshop",
      default: null,
    },
  },
  { timestamps: true }
);

const Registration =
  mongoose.models.Registration ||
  mongoose.model("Registration", registrationSchema);

export default Registration;
