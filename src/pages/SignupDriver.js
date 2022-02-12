import React from "react";
import { Navbar, Container, Row, Col, Form, FormGroup } from "react-bootstrap";
import logo from "../images/logo.png";

class SignupDriver extends React.Component {
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
        <h2
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          SignUp
        </h2>
        <Form style={{ marginLeft: "50px" }}>
          <p
            className="mb-2"
            style={{ textAlign: "left", fontSize: "20px", fontWeight: "500" }}
          >
            Personal Details
          </p>
          <Container>
            <Row className="mb-2">
              <Col>
                <FormGroup controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>

                  <Form.Control type="text" placeholder="Name" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup controlId="exampleForm.ControlInput1">
                  <Form.Label>Phone no.</Form.Label>

                  <Form.Control type="text" placeholder="0123456789" />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <FormGroup controlId="exampleForm.ControlInput1">
                  <Form.Label>Username</Form.Label>

                  <Form.Control type="text" placeholder="Username" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>

                  <Form.Control type="email" placeholder="abc@xyz.com" />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <FormGroup controlId="exampleForm.ControlInput1">
                  <Form.Label>Password (min-length: 6)</Form.Label>

                  <Form.Control type="password" placeholder="password" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup controlId="exampleForm.ControlInput1">
                  <Form.Label>Confirm Password</Form.Label>

                  <Form.Control
                    type="password"
                    placeholder="Confirm Passowrd"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Container>

          <p
            className="mb-2"
            style={{
              textAlign: "left",
              fontSize: "20px",
              marginTop: "40px",
              fontWeight: "500",
            }}
          >
            Truck Details
          </p>
          <Container>
            <Row className="mb-2">
              <Col>
                <FormGroup controlId="exampleForm.ControlInput1">
                  <Form.Label>Truck Number</Form.Label>

                  <Form.Control type="text" placeholder="Truck Number" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup controlId="exampleForm.ControlInput1">
                  <Form.Label>Truck Capacity (Rounded in Kgs)</Form.Label>

                  <Form.Control type="text" placeholder="Truck Capacity" />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <FormGroup controlId="exampleForm.ControlInput1">
                  <Form.Label>Transporter Name</Form.Label>

                  <Form.Control type="text" placeholder="Transporter Name" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup controlId="exampleForm.ControlInput1">
                  <Form.Label>Driving Experience (Rounded in Yrs)</Form.Label>

                  <Form.Control type="text" placeholder="Driving Experience" />
                </FormGroup>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    );
  }
}

export default SignupDriver;
