import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function AddFamily() {
  const [allFam, setAllFam] = useState("");
  const [firstname, setFamFirstname] = useState("");
  const [surname, setFamSurname] = useState("");
  const [relationship, setFamRelationship] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/empfam/${id}`)
      .then((res) => setAllFam(res.data))
      .catch((error) => console.log(error));
  });

  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    const newFam = {
      id,
      firstname,
      surname,
      relationship,
    };

    axios
      .post("http://localhost:5000/empfam/", newFam)
      .then(() => {
        alert("Employee family details Added Successfully");

        setFamFirstname("");
        setFamSurname("");
        setFamRelationship("");

        navigate("/employee");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <div
        className="container"
        style={{ paddingBottom: "150px", paddingTop: "30px" }}
      >
        <div
          class="card"
          style={{
            borderBlockStartColor: "#205E61",
            borderBlockStartWidth: "10px",
          }}
        >
          <div class="card-header">
            <h3
              style={{
                color: "#205E61",
                fontFamily: "Abril Fatface",
                fontWeight: "bold",
              }}
            >
              Add Family Details
            </h3>
          </div>
          <div class="card-body">
            <form class="row g-3 p-6" onSubmit={sendData}>
              <div class="col-md-6">
                <label for="inputName" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  onChange={(e) => setFamFirstname(e.target.value)}
                ></input>
              </div>
              <div class="col-md-6">
                <label for="inputName" class="form-label">
                  Surname
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  onChange={(e) => setFamSurname(e.target.value)}
                ></input>
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Relationship
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="relationship"
                  onChange={(e) => setFamRelationship(e.target.value)}
                ></input>
              </div>
              <div class="col-12">
                <button
                  type="submit"
                  class="btn btn-primary"
                  style={{ backgroundColor: "#205E61" }}
                >
                  Process
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
