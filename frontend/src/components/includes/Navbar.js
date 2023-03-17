import React from "react";
import { Link } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#0e8388" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="./logo.jpg" style={{ width: "28%", paddingLeft: "5%" }} />
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/employee"
                style={{
                  color: "#FFFFFF",
                  marginLeft: "2%",
                  marginRight: "10%",
                }}
              >
                <FaUserFriends />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
