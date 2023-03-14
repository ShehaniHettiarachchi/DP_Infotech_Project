const mongoose = require("mongoose"); // MongoDB
const Schema = mongoose.Schema; // MongoDB Schema

// Define the Employee_family Schema
const EmpfamSchema = new Schema({
  empID: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
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
  relationship: {
    type: String,
    required: true,
  },
});

// Export the Employee_family Model
const Empfam = mongoose.model("Empfam", EmpfamSchema);
module.exports = { Empfam };
