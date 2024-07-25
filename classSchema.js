const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
  instructor: String,
  title: String,
  cost: Number,
  size: Number,
  startTime: Date,
  endTime: Date,
  daysToMeet: ["Mon", "Tues", "Wends", "Thurs", "Fri", "Sat"],
});

const Class = mongoose.model("session", ClassSchema);

module.exports = Class;
