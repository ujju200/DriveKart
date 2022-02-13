import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import logo from "../../images/logo.png";
import About from "../../components/About";
import LoginForm from "../../components/LoginForm";
class LoginDriver extends React.Component {
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
              For Driver
            </Navbar.Text>
          </Container>
        </Navbar>
        <Container fluid style={{ marginTop: "60px" }}>
          <Row>
            <Col>
              <About />
            </Col>
            <Col>
              <LoginForm
                loginurl="/driver/dashboard"
                loginotpurl="/driver/loginotp"
                signup="/driver/signup"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LoginDriver;
