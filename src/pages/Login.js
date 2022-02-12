import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import logo from "../images/logo.png";
import About from "../components/About";
import LoginForm from "../components/LoginForm";
class Login extends React.Component {
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
        <Container fluid>
          <Row>
            <Col>
              <About />
            </Col>
            <Col>
              <LoginForm />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
