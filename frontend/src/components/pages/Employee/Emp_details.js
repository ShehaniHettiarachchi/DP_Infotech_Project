import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Employees() {
  const [allEmployee, setAllEmployee] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/employee/")
      .then((res) => setAllEmployee(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <div
        className="container col-lg-10 p-5 "
        style={{ paddingBottom: "150px", paddingTop: "3%" }}
      >
        <div class="row justify-content-between">
          <div class="col-6">
            <h3
              style={{
                color: "#205E61",
                fontFamily: "Abril Fatface",
                fontWeight: "bold",
              }}
            >
              Employee Details
            </h3>
          </div>
          <div class="col-2">
            <Link
              to="/AddEmp"
              class="btn btn-primary"
              style={{ backgroundColor: "#205E61", padding: "2%" }}
            >
              + Employee
            </Link>
          </div>
        </div>
      </div>

      <table class="table" style={{ padding: "2%" }}>
        <thead class="table-success">
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Initials</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Address 1</th>
            <th scope="col">Address 2</th>
            <th scope="col">Date of birth</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {allEmployee.map((employee) => (
          <tbody>
            <tr>
              <td>{employee.code}</td>
              <td>{employee.initials}</td>
              <td>{employee.firstname}</td>
              <td>{employee.surname}</td>
              <td>{employee.address1}</td>
              <td>{employee.address2}</td>
              <td>{employee.dob}</td>
              <td>{employee.status}</td>
              <td>
                <Link
                  to={`/UpdateEmp/${employee._id}`}
                  class="btn btn-primary"
                  style={{
                    backgroundColor: "#00ABB3",
                    padding: "2%",
                    margin: "2%",
                  }}
                >
                  Update Emp
                </Link>
                <Link
                  to={`/family/${employee._id}`}
                  class="btn btn-primary"
                  style={{ backgroundColor: "#000000", padding: "2%" }}
                >
                  Add Family
                </Link>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
