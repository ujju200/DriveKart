import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import logo from "../../images/logo.png";
import About from "../../components/About";
import LoginForm from "../../components/LoginForm";
import { DriverAuthContext } from "../../contexts/DriverAuthContext";
import { Link } from "react-router-dom";

class LoginDriver extends React.Component {
  static contextType = DriverAuthContext;
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand as={Link} to="/">
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
              style={{
                fontSize: "25px",
                fontWeight: "400",
                color: "black",
              }}
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
                api="/driver/login"
                context={this.context}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LoginDriver;
