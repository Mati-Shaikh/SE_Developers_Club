import mongoose from "mongoose";

const workshopSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    speaker: { type: String, required: true },
    time: { type: Date, required: true },
    venue: { type: String, required: true },
    capacity: { type: Number, required: true },
    lock: { type: Boolean, default: false },
    description: { type: String },
    helpingMaterials: { type: String },
    images: [{ type: String }],
  },
  { timestamps: true }
);

const Workshop =
  mongoose.models.Workshop || mongoose.model("Workshop", workshopSchema);

export default Workshop;
