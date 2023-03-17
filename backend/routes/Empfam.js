const router = require("express").Router();
const { Empfam } = require("../models/Empfam.model");

// create a new employee family member
http: router.route("/").post((req, res) => {
  const empID = req.body.empID;
  const firstname = req.body.firstname;
  const surname = req.body.surname;
  const relationship = req.body.relationship;

  const newEmpfam = new Empfam({
    empID,
    firstname,
    surname,
    relationship,
  });

  newEmpfam
    .save()
    .then(() => {
      res.json("Employee family details Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//get all employee family members
http: router.route("/:id").get((req, res) => {
  Empfam.find({})
    .then((empfam) => {
      res.json(empfam);
    })
    .catch((err) => {
      console.log(err);
    });
});

//update employee family member
http: router.route("/family-member/:id").put(async (req, res) => {
  let famID = req.params.id;
  const { firstname, surname, relationship } = req.body;

  const updateEmpfam = {
    firstname,
    surname,
    relationship,
  };

  const update = await Empfam.findByIdAndUpdate(famID, updateEmpfam)
    .then(() => {
      res.status(200).send({ status: "Employee family member updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

// Deete employee Family Details

http: router.route("/:id").delete(async (req, res) => {
  let userID = req.params.id;

  await Empfam.findByIdAndDelete(userID)

    .then(() => {
      res
        .status(200)
        .send({ status: "Employee Family Details successfully Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({
        status: "Error with deleting Employee Family Details",
        error: err.message,
      });
    });
});

module.exports = router;
