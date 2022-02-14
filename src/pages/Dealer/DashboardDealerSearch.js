import React from "react";
import { Navbar, Container, Row, Col, Form, Button } from "react-bootstrap";
import logo from "../../images/logo.png";
import { Link, Router, Routes, Route } from "react-router-dom";
import DriverCard from "./DriverCard";
import { Routedict } from "../../data/statesAndCities.js";

class DealerDashboardSearch extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchfromstate: "",
      searchfromcity: "",
      searchtostate: "",
      searchtocity: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log("Submitted", JSON.stringify(this.state));
    event.preventDefault();
  }

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
                  backgroundColor: "#dcdcdc",
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

        <Form
          style={{ marginTop: "50px", marginBottom: "50px" }}
          onSubmit={this.handleSubmit}
        >
          <Container>
            <Row>
              <Col xs="auto" md="auto">
                From:
              </Col>
              <Col>
                <Form.Select
                  required
                  value={this.state.searchfromstate}
                  onChange={this.handleChange}
                  name="searchfromstate"
                >
                  <option value="" defaultValue>
                    Select State
                  </option>
                  {Object.entries(Routedict).map(([key]) => (
                    <option value={key}> {key} </option>
                  ))}
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  required
                  value={this.state.searchfromcity}
                  onChange={this.handleChange}
                  name="searchfromcity"
                >
                  <option value="" defaultValue>
                    Select City
                  </option>
                  {this.state.searchfromstate !== "" &&
                    Routedict[this.state.searchfromstate].map((st) => (
                      <option value={st}>{st}</option>
                    ))}
                </Form.Select>
              </Col>
              <Col xs="auto" md="auto" style={{ marginLeft: "30px" }}>
                To:
              </Col>
              <Col>
                <Form.Select
                  required
                  value={this.state.searchtostate}
                  onChange={this.handleChange}
                  name="searchtostate"
                >
                  <option value="" defaultValue>
                    Select State
                  </option>
                  {Object.entries(Routedict).map(([key]) => (
                    <option value={key}> {key} </option>
                  ))}
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  required
                  value={this.state.searchtocity}
                  onChange={this.handleChange}
                  name="searchtocity"
                >
                  <option value="" defaultValue>
                    Select City
                  </option>
                  {this.state.searchtostate !== "" &&
                    Routedict[this.state.searchtostate].map((st) => (
                      <option value={st}>{st}</option>
                    ))}
                </Form.Select>
              </Col>
              <Col style={{ marginLeft: "30px" }}>
                <Button type="submit" variant="primary" size="md">
                  Search
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    );
  }
}

export default DealerDashboardSearch;
