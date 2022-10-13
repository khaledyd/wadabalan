import mongoose from "mongoose";

const AttendSchema = new mongoose.Schema(
  {
    eventId: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Attendees", AttendSchema);
