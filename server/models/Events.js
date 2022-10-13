import mongoose from "mongoose";

const EventsSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    eventtype: {
      type: Array,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    spots: {
      type: Number,
      default: 0,
    },
    file: {
      type: String,
    },
    date: {
      type: String,
      required: true,
    },
    img: {
      type: String,
  
    },
    fullname: {
      type: String,
   
    },
    email: {
      type: String,
    
    },
    gender: {
      type: Array,

    },
  },
  
  { timestamps: true }
);

export default mongoose.model("Events", EventsSchema);
