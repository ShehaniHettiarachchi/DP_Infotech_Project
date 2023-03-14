import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UpdateFamily() {
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
              Update Family Details
            </h3>
          </div>
          <div class="card-body">
            <form class="row g-3 p-6" encType="multipart/form-data">
              <div class="col-md-6">
                <label for="inputName" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  onChange={(e) => setfirstName(e.target.value)}
                  pattern="[a-zA-Z ]*"
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
                  name="lastName"
                  onChange={(e) => setlastName(e.target.value)}
                  pattern="[a-zA-Z ]*"
                  required
                ></input>
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Relationship
                </label>
                <input
                  type="Email"
                  className="form-control"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
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

export default UpdateFamily;
