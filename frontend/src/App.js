import "./App.css";
import React from "react";

//Public pages
import Home from "./components/Home/Home";
import Navbar from "./components/includes/Navbar";

//Employee
import Employees from "./pages/Employee/Emp_details";
import AddEmp from "./pages/Employee/Add_emp";
import UpdateEmp from "./pages/Employee/Update_emp";

//family
import EmpFamily from "./pages/Family/Family_details";
import AddFam from "./pages/Family/Add_fam";
import UpdateFam from "./pages/Family/Update_fam";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes*/}
        <Route exact path="/" element={<Home />} />

        {/*Employee*/}
        <Route path="/employee" element={<Employees />} />
        <Route path="/AddEmp" element={<AddEmp />} />
        <Route path="/UpdateEmp/:id" element={<UpdateEmp />} />

        {/*Employee-Family*/}
        <Route path="/family/:id" element={<EmpFamily />} />
        <Route path="/AddFam/:id" element={<AddFam />} />
        <Route path="/UpdateFam/:id" element={<UpdateFam />} />
      </Routes>
    </Router>
  );
}

export default App;
