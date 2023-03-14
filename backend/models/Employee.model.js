const mongoose = require("mongoose"); // MongoDB
const Schema = mongoose.Schema; // MongoDB Schema

// Define the Employee Schema
const EmployeeSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  initials: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active",
    required: true,
  },
});

// Export the Employee Model
const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = { Employee };
