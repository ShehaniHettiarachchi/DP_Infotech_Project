import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddEmployee() {
  const [code, setEmployeeCode] = useState("");
  const [initials, setEmployeeInitials] = useState("");
  const [firstname, setEmployeeFirstname] = useState("");
  const [surname, setEmployeeSurname] = useState("");
  const [address1, setEmployeeAddress1] = useState("");
  const [address2, setEmployeeAddress2] = useState("");
  const [dob, setEmployeeDob] = useState("");
  const [status, setEmployeeStatus] = useState("");

  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    const newEmployee = {
      code,
      initials,
      firstname,
      surname,
      address1,
      address2,
      dob,
      status,
    };

    axios
      .post("http://localhost:5000/employee/", newEmployee)
      .then(() => {
        alert("Employee Added Successfully");

        setEmployeeCode("");
        setEmployeeInitials("");
        setEmployeeFirstname("");
        setEmployeeSurname("");
        setEmployeeAddress1("");
        setEmployeeAddress2("");
        setEmployeeDob("");
        setEmployeeStatus("");
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
              Add Employee Details
            </h3>
          </div>
          <div class="card-body">
            <form onSubmit={sendData} class="row g-3 p-6">
              <div class="col-md-6">
                <label for="inputName" class="form-label">
                  Employee Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="code"
                  onChange={(e) => setEmployeeCode(e.target.value)}
                  required
                ></input>
              </div>
              <div class="col-md-6">
                <label for="inputName" class="form-label">
                  Initials
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="initials"
                  onChange={(e) => setEmployeeInitials(e.target.value)}
                  required
                ></input>
              </div>
              <div class="col-md-6">
                <label for="inputName" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  onChange={(e) => setEmployeeFirstname(e.target.value)}
                  required
                ></input>
              </div>
              <div class="col-md-6">
                <label for="inputName" class="form-label">
                  Surname
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="surName"
                  onChange={(e) => setEmployeeSurname(e.target.value)}
                  required
                ></input>
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Address 1
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  onChange={(e) => setEmployeeAddress1(e.target.value)}
                  required
                ></input>
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  onChange={(e) => setEmployeeAddress2(e.target.value)}
                  required
                ></input>
              </div>
              <div class="col-md-6">
                <label for="inputPhone" class="form-label">
                  Date of birth
                </label>
                <input
                  type="Date"
                  className="form-control"
                  name="dob"
                  onChange={(e) => setEmployeeDob(e.target.value)}
                  required
                ></input>
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">
                  Status
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="status"
                  onChange={(e) => setEmployeeStatus(e.target.value)}
                  required
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
