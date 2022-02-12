import React from "react";
import { Navbar, Container, Row, Button, Col } from "react-bootstrap";
import logo from "../images/logo.png";
import About from "../components/About";

class Landing extends React.Component {
  render() {
    console.log("rrg");
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
            <Col xs lg="2"></Col>
            <Col md="auto">
              <About />
            </Col>
            <Col xs lg="2"></Col>
          </Row>
          <Row className="justify-content-md-center">
            <Row xs="auto">
              <Col xs lg="2"></Col>
              <Col xs lg="1"></Col>
              <Col xs lg="1"></Col>
              <Col>
                <Button
                  variant="primary"
                  size="lg"
                  style={{ marginTop: "10px" }}
                >
                  Enter As Dealer
                </Button>
              </Col>
              <Col>
                <Button
                  variant="primary"
                  size="lg"
                  style={{ marginTop: "10px" }}
                >
                  Enter As Driver
                </Button>
              </Col>
              <Col xs lg="2"></Col>
            </Row>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Landing;
