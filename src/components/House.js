import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginDriver from "../pages/Driver/LoginDriver";
import LoginDealer from "../pages/Dealer/LoginDealer";
import Landing from "../pages/Landing.js";
import SignupDriver from "../pages/Driver/SignupDriver.js";
import SignupDealer from "../pages/Dealer/SignupDealer.js";
import DriverDashboard from "../pages/Driver/DashboardDriver";
class House extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/driver/login" exact element={<LoginDriver />} />
          <Route path="/dealer/login" exact element={<LoginDealer />} />
          <Route path="/driver/signup" exact element={<SignupDriver />} />
          <Route path="/dealer/signup" exact element={<SignupDealer />} />
          <Route path="/driver/dashboard" exact element={<DriverDashboard />} />
        </Routes>
      </Router>
    );
  }
}

export default House;
