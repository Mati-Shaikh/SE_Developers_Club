import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, default: null },
    role: { type: String, default: "user" },
    rollno: { type: String, required: true, unique: true },
    department: { type: String },
    role: { type: String },
    rollNumber: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
