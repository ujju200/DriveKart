import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Landing from "../pages/Landing.js";
class House extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/landing" element={<Landing />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </Router>
    );
  }
}

export default House;
