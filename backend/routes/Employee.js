const express = require("express");
const router = express.Router();
const { Employee } = require("../models/Employee.model");

// create a new employee
http: router.route("/").post((req, res) => {
  const code = req.body.code;
  const initials = req.body.initials;
  const firstname = req.body.firstname;
  const surname = req.body.surname;
  const address1 = req.body.address1;
  const address2 = req.body.address2;
  const dob = req.body.dob;
  const status = req.body.status;

  const newEmployee = new Employee({
    code,
    initials,
    firstname,
    surname,
    address1,
    address2,
    dob,
    status,
  });

  newEmployee
    .save()
    .then(() => {
      res.json("Employee Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//get an employee
router.route("/:id").get(async (req, res) => {
  const empId = req.params.id;
  await Employee.findById(empId)
    .then((Employee) => {
      res.status(200).send({ status: "Employee fetched", Employee });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get employee", error: err.message });
    });
});

//update an employee
http: router.route("/:id").put(async (req, res) => {
  let empID = req.params.id;

  const { initials, firstname, surname, address1, address2, status } = req.body;

  const updateEmployee = {
    initials,
    firstname,
    surname,
    address1,
    address2,
    status,
  };

  const update = await Employee.findByIdAndUpdate(empID, updateEmployee)
    .then(() => {
      res.status(200).send({ status: "Employee updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

//view all employees
http: router.route("/").get((req, res) => {
  Employee.find()
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
