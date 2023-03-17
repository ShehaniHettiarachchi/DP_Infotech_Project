import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { makeToast } from "../../components/toast/index.js";

export default function AddEmployee() {
  // const currentDate = new Date();
  // const today = `${currentDate.getFullYear()}-${
  //   currentDate.getMonth() + 1
  // }-${currentDate.getDate()}`;
  const options = ["Active", "Inactive"];
  // const [empAge, setempAge] = useState(today);

  // console.log(today);

  const [code, setEmployeeCode] = useState("");
  const [initials, setEmployeeInitials] = useState("");
  const [firstname, setEmployeeFirstname] = useState("");
  const [surname, setEmployeeSurname] = useState("");
  const [address1, setEmployeeAddress1] = useState("");
  const [address2, setEmployeeAddress2] = useState("");
  const [dob, setEmployeeDob] = useState("");
  const [status, setEmployeeStatus] = useState(options[0]);

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
        makeToast({ type: "success", message: "Employee Added Successfully" });

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
      .catch((error) => {
        alert(error);
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
            <form onSubmit={sendData} className="row g-3 p-6 was-validated">
              <div class="col-md-6">
                <label for="inputName" class="form-label">
                  Employee Code
                </label>
                <input
                  type="text"
                  id="empCode"
                  className="form-control"
                  name="code"
                  placeholder="ex : E00"
                  maxLength="3"
                  title="Employee Code length should be 3 characters."
                  onChange={(e) => setEmployeeCode(e.target.value)}
                  pattern="E\d{2}"
                  required
                ></input>
                <div className="valid-feedback">Valid Employee Code</div>
                <div className="invalid-feedback">
                  Employee Code length should be 3 characters & should be valid
                  format (ex: E00).
                </div>
              </div>
              {/* <span>{emplyeeCodeError}</span> */}
              <div class="col-md-6">
                <label for="inputName" class="form-label">
                  Initials
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="initials"
                  onChange={(e) => setEmployeeInitials(e.target.value)}
                  pattern="([A-Z]\.)+"
                  required
                ></input>
                <div className="valid-feedback">Valid Initials</div>
                <div className="invalid-feedback">
                  Employee initials should be valid format (ex: J.K.).
                </div>
              </div>

              <div class="col-md-6">
                <label for="inputName" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  maxLength="50"
                  pattern="[A-Za-z\s]+"
                  title="First Name length should not exceed 50 characters."
                  onChange={(e) => setEmployeeFirstname(e.target.value)}
                  required
                ></input>
                <div className="valid-feedback">Valid Name</div>
                <div className="invalid-feedback">
                  Employee First Name length should not be exceed 50 characters.
                </div>
              </div>

              <div class="col-md-6">
                <label for="inputName" class="form-label">
                  Surname
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="surName"
                  title="Surname length should not exceed 50 characters."
                  pattern="[A-Za-z\s]+"
                  maxLength="50"
                  onChange={(e) => setEmployeeSurname(e.target.value)}
                  required
                ></input>
                <div className="valid-feedback">Valid Name</div>
                <div className="invalid-feedback">
                  Employee surName length should not be exceed 50 characters.
                </div>
              </div>

              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Address 1
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="address1"
                  maxLength="100"
                  title="Address 1 length should not exceed 100 characters."
                  onChange={(e) => setEmployeeAddress1(e.target.value)}
                  required
                ></input>
                <div className="valid-feedback">Valid Address</div>
                <div className="invalid-feedback">
                  Address 1 length should not exceed 100 characters.
                </div>
              </div>

              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="address2"
                  maxLength="100"
                  title="Address 2 length should not exceed 100 characters."
                  onChange={(e) => setEmployeeAddress2(e.target.value)}
                  required
                ></input>
                <div className="valid-feedback">Valid Address</div>
                <div className="invalid-feedback">
                  Address 2 length should not exceed 100 characters.
                </div>
              </div>

              <div class="col-md-6">
                <label for="inputPhone" class="form-label">
                  Date of birth
                </label>
                <input
                  type="Date"
                  className="form-control"
                  name="dob"
                  max={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setEmployeeDob(e.target.value)}
                  required
                ></input>
              </div>

              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">
                  Status
                </label>
                <select
                  className="form-control"
                  type="text"
                  name="status"
                  onChange={(e) => setEmployeeStatus(e.target.value)}
                  required
                >
                  {options.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
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
