import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateEmployee() {
  const [initials, setEmployeeInitials] = useState("");
  const [firstname, setEmployeeFirstname] = useState("");
  const [surname, setEmployeeSurname] = useState("");
  const [address1, setEmployeeAddress1] = useState("");
  const [address2, setEmployeeAddress2] = useState("");
  const [status, setEmployeeStatus] = useState("");

  const navigate = useNavigate();

  const changeOnClick = (e) => {
    e.preventDefault();

    const Employee = {
      initials,
      firstname,
      surname,
      address1,
      address2,
      status,
    };

    setEmployeeInitials("");
    setEmployeeFirstname("");
    setEmployeeSurname("");
    setEmployeeAddress1("");
    setEmployeeAddress2("");
    setEmployeeStatus("");

    axios
      .put(`http://localhost:5000/employee/${id}`, Employee)
      .then((res) => {
        console.log(res.data);
        navigate("/employee");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const { id } = useParams();

  useEffect(() => {
    axios

      .get(`http://localhost:5000/employee/${id}`)
      .then((res) => [
        setEmployeeInitials(res.data.Employee.initials),
        setEmployeeFirstname(res.data.Employee.firstname),
        setEmployeeSurname(res.data.Employee.surname),
        setEmployeeAddress1(res.data.Employee.address1),
        setEmployeeAddress2(res.data.Employee.address2),
        setEmployeeStatus(res.data.Employee.status),
      ])
      .catch((error) => console.log(error));
  }, []);

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
              Update Employee Details
            </h3>
          </div>
          <div class="card-body">
            <form class="row g-3 p-6" onSubmit={changeOnClick}>
              <div class="col-md-6">
                <label for="inputName" class="form-label">
                  Initials
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="initials"
                  value={initials}
                  onChange={(e) => setEmployeeInitials(e.target.value)}
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
                  value={firstname}
                  onChange={(e) => setEmployeeFirstname(e.target.value)}
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
                  value={surname}
                  onChange={(e) => setEmployeeSurname(e.target.value)}
                ></input>
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Address 1
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="address1"
                  value={address1}
                  onChange={(e) => setEmployeeAddress1(e.target.value)}
                ></input>
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="address2"
                  value={address2}
                  onChange={(e) => setEmployeeAddress2(e.target.value)}
                ></input>
              </div>

              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">
                  Status
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="status"
                  value={status}
                  onChange={(e) => setEmployeeStatus(e.target.value)}
                ></input>
              </div>

              <div class="col-12">
                <button
                  type="submit"
                  class="btn btn-primary"
                  style={{ backgroundColor: "#205E61" }}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
