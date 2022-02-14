import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import logo from "../../images/logo.png";
import About from "../../components/About";
import LoginOtpForm from "../../components/LoginOtpForm";
import { DealerAuthContext } from "../../contexts/DealerAuthContext";
import { Link } from "react-router-dom";

class LoginOtpDealer extends React.Component {
  static contextType = DealerAuthContext;
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
              For Dealer
            </Navbar.Text>
          </Container>
        </Navbar>
        <Container fluid style={{ marginTop: "60px" }}>
          <Row>
            <Col>
              <About />
            </Col>
            <Col>
              <LoginOtpForm
                loginurl="/dealer/dashboard/home"
                loginpasswordurl="/dealer/login"
                signup="/dealer/signup"
                getOtp="/dealer/otp/generate"
                verifyOtp="/dealer/otp/verify"
                context={this.context}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LoginOtpDealer;
