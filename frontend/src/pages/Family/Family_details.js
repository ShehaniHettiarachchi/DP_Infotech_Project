import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  AiFillDelete,
  AiFillEdit,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";

export default function EmpFamily() {
  const [allFam, setAllFam] = useState([]);
  const { id } = useParams();

  const userId = id;

  console.log(userId);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/empfam/${id}`)
      .then((res) => setAllFam(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <div
        className="container col-lg-10"
        style={{ paddingBottom: "150px", paddingTop: "30px" }}
      >
        <div class="card ">
          <div class="card-header">
            <div class="row justify-content-between">
              <div class="col-6">
                <h3
                  style={{
                    color: "#205E61",
                    fontFamily: "Abril Fatface",
                    fontWeight: "bold",
                  }}
                >
                  Family Details
                </h3>
              </div>
              <div class="col-2">
                <Link
                  to={`/AddFam/${id}`}
                  class="btn btn-primary"
                  style={{
                    backgroundColor: "#227C70",
                    paddingLeft: "12%",
                    paddingRight: "12%",
                    paddingTop: "2%",
                    paddingBottom: "2%",
                  }}
                >
                  <AiOutlineUsergroupAdd />
                </Link>
              </div>
            </div>
          </div>
          <div class="card-body">
            <table class="table">
              <thead class="table-success">
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Surname</th>
                  <th scope="col">Relationship</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {allFam
                .filter((elem) => elem.empID == id)
                .map((family) => (
                  <tbody>
                    <tr>
                      <td>{family.firstname}</td>
                      <td>{family.surname}</td>
                      <td>{family.relationship}</td>
                      <td>
                        <Link
                          to={/UpdateFam/}
                          class="btn"
                          style={{
                            backgroundColor: "#FFFFFF",
                            color: "#227C70",
                            padding: "2%",
                            marginRight: "13%",
                          }}
                        >
                          <AiFillEdit />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
