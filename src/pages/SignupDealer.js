import React from "react";
import {
  Navbar,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

class SignupDealer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      phoneno: "",
      email: "",
      username: "",
      password: "",
      confirm: "",
      state:"",
      city:"",
      nature: "",
      weight: "",
      quantity: "",
    };
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
        <Form style={{ marginLeft: "50px", marginBottom: "50px" }}>
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
            <Row className="mb-2">
              <Col>
                <FormGroup controlId="exampleForm.ControlInput1">
                  <Form.Label>State</Form.Label>

                  <Form.Control type="text" placeholder="State" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup controlId="exampleForm.ControlInput1">
                  <Form.Label>City</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="City"
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
            Goods Details
          </p>       
          <Container>
            <Row className="mb-2">
              <Col>
                <FormGroup controlId="exampleForm.ControlInput1">
                  <Form.Label>Nature Of Materials</Form.Label>

                  <Form.Control type="text" placeholder="Nature Of Materials" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup controlId="exampleForm.ControlInput1">
                  <Form.Label>Weight of Materials (in Kgs)</Form.Label>

                  <Form.Control type="text" placeholder="Weight of Materials (in Kgs)" />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <FormGroup controlId="exampleForm.ControlInput1">
                  <Form.Label>Quantity</Form.Label>

                  <Form.Control type="text" placeholder="Quantity" />
                </FormGroup>
              </Col>
            </Row>
          </Container>             
          <Container>
            <Row xs="auto">
              <Col>
                <Button
                  variant="outline-dark"
                  size="lg"
                  style={{ marginTop: "10px" }}
                >
                  SignUp
                </Button>
              </Col>
              <Col>
                <h6 style={{ marginTop: "20px", fontWeight: "400" }}>
                  Have an Account already?
                  <Link
                    to="/login"
                    style={{
                      color: "45baea",
                      marginLeft: "5px",
                      textDecoration: "none",
                    }}
                  >
                    Login
                  </Link>
                </h6>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    );
  }
}

export default SignupDealer;
