import React from "react";
import getstarted from "../../Images/getstarted.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="container text-center">
        <div className="row justify-content-between">
          <div class="col-6" style={{ paddingTop: "10%" }}>
            <h3 className="main-heading">D P Infotech</h3>
            <div className="underline mx-auto"></div>
            <p>
              {" "}
              D P Infotech (Private) Limited is a digital technology disrupter
              that offers cutting-edge Digital Technology Solutions which are
              economical and practical at the same time. We are your solution
              for IT and ICT Applications, Platform development and Cyber
              Security Solutions. A member of the David Pieris Group, one of the
              largest and most diversified conglomerates that has interests in
              Automobiles, Financial Services, Logistics, Agriculture, Racing
              and Leisure, D P Infotech’s inception was to primarily support the
              Group. Since 2020,
            </p>
            <Link
              to="/employee"
              className="btn btn-primary"
              style={{
                backgroundColor: "#205E61",
                padding: "1%",
                fontFamily: "arial",
                fontWeight: "bold",
              }}
            >
              Get Started
            </Link>
          </div>
          <div class="col-6" style={{ paddingTop: "10%" }}>
            <img
              src={getstarted}
              class="mx-auto d-block w-100"
              style={{ backgroundSize: "cover" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
