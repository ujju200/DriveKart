import React from "react";
import { Form, FormGroup, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Timer from "./Timer.js";
class LoginOtpForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      otp: "",
      otpButton: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOtp = this.handleOtp.bind(this);
    this.handleGetOTP = this.handleGetOTP.bind(this);
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleOtp(event) {
    console.log(this.state.otp);
    this.setState({
      otp: event,
    });
  }

  handleSubmit(event) {
    console.log("Submitted", JSON.stringify(this.state));
    event.preventDefault();
  }

  handleGetOTP(event) {
    const validEmail = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );
    if (!validEmail.test(this.state.email)) {
      console.log("Email Not Valid");
      return;
    }
    console.log("Get OTP Button Clicked");
    this.setState({
      otpButton: false,
    });

    const temp = setTimeout(() => {
      console.log("This will run after 1 second!");
      this.setState({
        otpButton: true,
      });
    }, 10000);
  }

  render() {
    return (
      <div>
        <Form
          style={{
            display: "inline-block",
            width: "30rem",
          }}
          onSubmit={this.handleSubmit}
        >
          <h2 style={{ textAlign: "left" }}>Login</h2>
          <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email Address</Form.Label>

            <Form.Control
              type="email"
              placeholder="abc@xyz.com"
              required
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            />
          </FormGroup>
          <Container fluid>
            <Row>
              <Col>
                <FormGroup
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    value={this.state.otp}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="OTP"
                    required
                    name="otp"
                  />
                </FormGroup>
              </Col>
              <Col>
                <Button
                  onClick={this.handleGetOTP}
                  disabled={!this.state.otpButton}
                >
                  {" "}
                  Get OTP
                </Button>
              </Col>
            </Row>
          </Container>

          {!this.state.otpButton && <Timer />}
          <Container fluid>
            <Row xs="auto">
              <Col>
                <Link to={this.props.loginurl}>
                  <Button
                    variant="outline-dark"
                    size="lg"
                    style={{ marginTop: "10px" }}
                    type="submit"
                  >
                    LOG IN
                  </Button>
                </Link>
              </Col>
              <Col>
                <Link to={this.props.loginpasswordurl}>
                  <Button
                    variant="outline-dark"
                    size="lg"
                    style={{ marginTop: "10px" }}
                  >
                    LOG IN via Password?
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Form>
        <h6 style={{ marginTop: "20px", fontWeight: "400" }}>
          Don&apos;t have an account?
          <Link
            to={this.props.signup}
            style={{
              color: "45baea",
              marginLeft: "5px",
              textDecoration: "none",
            }}
          >
            SignUp
          </Link>
        </h6>
      </div>
    );
  }
}

export default LoginOtpForm;
