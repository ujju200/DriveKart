import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Landing from "../pages/Landing.js";
import SignupDriver from "../pages/SignupDriver.js";
class House extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/landing" element={<Landing />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signupDriver" exact element={<SignupDriver />} />
        </Routes>
      </Router>
    );
  }
}

export default House;
