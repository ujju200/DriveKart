import React from "react";
import { Navbar, Container, Row, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import About from "../components/About";

class Landing extends React.Component {
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
          </Container>
        </Navbar>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <About />
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Row xs="auto" className="justify-content-md-center">
              <Col>
                <Link to="/dealer/login">
                  <Button
                    variant="primary"
                    size="lg"
                    style={{ marginTop: "10px" }}
                  >
                    Enter As Dealer
                  </Button>
                </Link>
              </Col>
              <Col>
                <Link to="/driver/login">
                  <Button
                    variant="primary"
                    size="lg"
                    style={{ marginTop: "10px" }}
                  >
                    Enter As Driver
                  </Button>
                </Link>
              </Col>
            </Row>
            <Row className="align-items-center mt-3 mb-3">
              <Col style={{ marginTop: "20px" }}>
                <h3 style={{ textAlign: "center" }}>TRUSTED BY</h3>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col>
                <h1 style={{ textAlign: "center" }}>100+</h1>
              </Col>
              <Col>
                <h1 style={{ textAlign: "center" }}>250+</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1 style={{ textAlign: "center" }}>Dealers</h1>
              </Col>
              <Col>
                <h1 style={{ textAlign: "center" }}>Drivers</h1>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Landing;
