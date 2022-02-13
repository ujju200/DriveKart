import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Landing from "../pages/Landing.js";
import SignupDriver from "../pages/SignupDriver.js";
import SignupDealer from "../pages/SignupDealer.js";
class House extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/landing" element={<Landing />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signupDriver" exact element={<SignupDriver />} />
          <Route path="/signupDealer" exact element={<SignupDealer />} />
        </Routes>
      </Router>
    );
  }
}

export default House;
