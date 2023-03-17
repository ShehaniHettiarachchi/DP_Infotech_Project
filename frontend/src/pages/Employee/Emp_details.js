import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEdit, FaUserFriends, FaUserPlus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { makeToast } from "../../components/toast/index.js";

function calculateAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

export default function Employees() {
  const [allEmployee, setAllEmployee] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/employee/")
      .then((res) => setAllEmployee(res.data))
      .catch((error) => console.log(error));
  });

  const deleteEmployee = (id) => {
    axios
      .delete(`http://localhost:5000/employee/${id}`)
      .then((res) =>
        makeToast({ type: "success", message: "Employee Deleted Successfully" })
      );

    setAllEmployee(allEmployee.filter((elem) => elem._id !== id));
  };

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
              style={{
                backgroundColor: "#0F6292",
                paddingLeft: "12%",
                paddingRight: "12%",
                paddingTop: "2%",
                paddingBottom: "2%",
              }}
            >
              <FaUserPlus />
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
            <th scope="col">DOB</th>
            <th scope="col">Age</th>
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
              <td>{employee.dob.slice(0, 10)}</td>
              <td>{calculateAge(employee.dob)}</td>
              <td>{employee.status}</td>
              <td>
                <Link
                  to={`/UpdateEmp/${employee._id}`}
                  class="btn"
                  style={{
                    color: "#03C988",
                    backgroundColor: "#FFFFFF",
                    padding: "2%",
                    marginRight: "3%",
                  }}
                >
                  <FaEdit />
                </Link>
                <button
                  onClick={() => deleteEmployee(employee._id)}
                  class="btn"
                  style={{
                    color: "#9C254D",
                    backgroundColor: "#FFFFFF",
                    padding: "2%",
                    marginRight: "3%",
                  }}
                >
                  <AiFillDelete />
                </button>
                <Link
                  to={`/family/${employee._id}`}
                  class="btn"
                  style={{
                    color: "#205295",
                    backgroundColor: "#FFFFFF",
                    padding: "2%",
                  }}
                >
                  <FaUserFriends />
                </Link>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
