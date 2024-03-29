const express = require("express"); // Express web server framework
const mongoose = require("mongoose"); // MongoDB
const bodyParser = require("body-parser"); // Parses the request body to be a readable json format
const cors = require("cors"); // Cross Origin Resource Sharing
const dotenv = require("dotenv"); // Loads environment variables from a .env file into process.env
const app = express(); // Initialize the Express application
require("dotenv").config(); // Loads environment variables from a .env file into process.env

const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL; // MongoDB URL

mongoose.connect(URL, {});

const connection = mongoose.connection; // MongoDB Connection
connection.once("open", () => {
  console.log("MongoDB Database Connection Successfull"); // Display in console if connection is successful
});

app.listen(PORT, () => {
  console.log(`Server is running on port number : ${PORT}`); // Dipaly in console if server is running
});

// Endpoints

const EmployeeRouter = require("./routes/Employee.js");
app.use("/employee", EmployeeRouter);

const EmpfamRouter = require("./routes/Empfam.js");
app.use("/empfam", EmpfamRouter);
