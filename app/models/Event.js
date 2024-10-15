import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  time: { type: Date, required: true },
  venue: { type: String, required: true },
  capacity: { type: Number, required: true },
  lock: { type: Boolean, default: false },
  description: { type: String },
  images: [{ type: String }],  
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;
