import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  eventID: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },  
  workshopID: { type: mongoose.Schema.Types.ObjectId, ref: 'Workshop' }, 
});

const Registration = mongoose.models.Registration || mongoose.model("Registration", registrationSchema);

export default Registration;
