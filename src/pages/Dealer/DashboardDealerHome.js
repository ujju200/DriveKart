import React from "react";
import {
  Navbar,
  Container,
  Row,
  Col,
  Nav,
  NavDropdown,
  Card,
  Divider,
} from "react-bootstrap";
import logo from "../../images/logo.png";
import { Link, Router, Routes, Route } from "react-router-dom";
import DriverCard from "./DriverCard";

class DealerDashboardHome extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="35"
                height="35"
                className="d-inline-block align-top"
              />{" "}
              DriveKart
            </Navbar.Brand>
            <Navbar.Text
              className="justify-content-end"
              style={{ fontSize: "25px", fontWeight: "400", color: "black" }}
            >
              Hi Dealer Name
            </Navbar.Text>
          </Container>
        </Navbar>

        <Container style={{ marginTop: "50px" }}>
          <Row lg="auto" md="auto">
            <Col style={{ padding: "0" }}>
              <div
                style={{
                  border: "1px solid",
                  fontSize: "18px",
                  padding: "8px 20px",
                  backgroundColor: "#dcdcdc",
                }}
              >
                <Link
                  to="/dealer/dashboard/home"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
              </div>
            </Col>
            <Col style={{ padding: "0" }}>
              <div
                style={{
                  border: "1px solid",
                  fontSize: "18px",
                  padding: "8px 20px",
                }}
              >
                <Link
                  to="/dealer/dashboard/search"
                  style={{ textDecoration: "none" }}
                >
                  Search By Route
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <DriverCard
            name="Kunal Lodha"
            phoneno="8441007031"
            truckno="Truck No"
            capacity="45"
            transname="Rishab Laddha"
            drexp="15"
            fromstate="Andhra"
            fromcity="bangloare"
            tostate="Sikkim"
            tocity="Gangtok"
          />
        </Container>
      </div>
    );
  }
}

export default DealerDashboardHome;
