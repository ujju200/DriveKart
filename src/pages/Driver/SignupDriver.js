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
import logo from "../../images/logo.png";
import { Routedict } from "../../data/statesAndCities.js";

class SignupDriver extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      phoneno: "",
      email: "",
      username: "",
      password: "",
      confirm: "",
      truckNo: "",
      truckCapacity: "",
      transporterName: "",
      drivingExp: "",
      route1fromstate: "",
      route1fromcity: "",
      route1tostate: "",
      route1tocity: "",
      route2fromstate: "",
      route2fromcity: "",
      route2tostate: "",
      route2tocity: "",
      route3fromstate: "",
      route3fromcity: "",
      route3tostate: "",
      route3tocity: "",
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
    if (
      this.state.route1fromstate === this.state.route1tostate &&
      this.state.route1fromcity === this.state.route1tocity
    ) {
      console.log(
        "In Route-1 From and TO are same, please keep them different"
      );
      event.preventDefault();
      return;
    }

    if (
      this.state.route2fromstate === this.state.route2tostate &&
      this.state.route2fromcity === this.state.route2tocity
    ) {
      console.log(
        "In Route-2 From and TO are same, please keep them different"
      );
      event.preventDefault();
      return;
    }

    if (
      this.state.route3fromstate === this.state.route3tostate &&
      this.state.route3fromcity === this.state.route3tocity
    ) {
      console.log(
        "In Route-3 From and TO are same, please keep them different"
      );
      event.preventDefault();
      return;
    }

    if (
      this.state.route1fromstate === this.state.route2fromstate &&
      this.state.route1fromcity === this.state.route2fromcity &&
      this.state.route1tostate === this.state.route2tostate &&
      this.state.route1tocity === this.state.route2tocity
    ) {
      console.log("Route-1 and Route-2 are same, please keep them different");
      event.preventDefault();
      return;
    }

    if (
      this.state.route1fromstate === this.state.route3fromstate &&
      this.state.route1fromcity === this.state.route3fromcity &&
      this.state.route1tostate === this.state.route3tostate &&
      this.state.route1tocity === this.state.route3tocity
    ) {
      console.log("Route-1 and Route-3 are same, please keep them different");
      event.preventDefault();
      return;
    }

    if (
      this.state.route3fromstate === this.state.route2fromstate &&
      this.state.route3fromcity === this.state.route2fromcity &&
      this.state.route3tostate === this.state.route2tostate &&
      this.state.route3tocity === this.state.route2tocity
    ) {
      console.log("Route-2 and Route-3 are same, please keep them different");
      event.preventDefault();
      return;
    }

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
              For Driver
            </Navbar.Text>
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
        <Form
          style={{ marginLeft: "50px", marginBottom: "50px" }}
          onSubmit={this.handleSubmit}
        >
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

                  <Form.Control
                    required
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Name"
                    name="name"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup controlId="exampleForm.ControlInput1">
                  <Form.Label>Phone no.</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="0123456789"
                    value={this.state.phoneno}
                    onChange={this.handleChange}
                    name="phoneno"
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <FormGroup controlId="exampleForm.ControlInput1">
                  <Form.Label>Username</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    name="username"
                    required
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>

                  <Form.Control
                    type="email"
                    placeholder="abc@xyz.com"
                    value={this.state.email}
                    onChange={this.handleChange}
                    name="email"
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <FormGroup controlId="exampleForm.ControlInput1">
                  <Form.Label>Password (min-length: 6)</Form.Label>

                  <Form.Control
                    type="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    name="password"
                    required
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup controlId="exampleForm.ControlInput1">
                  <Form.Label>Confirm Password</Form.Label>

                  <Form.Control
                    type="password"
                    placeholder="Confirm Passowrd"
                    value={this.state.confirm}
                    onChange={this.handleChange}
                    name="confirm"
                    required
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

                  <Form.Control
                    type="text"
                    placeholder="Truck Number"
                    value={this.state.truckNo}
                    onChange={this.handleChange}
                    name="truckNo"
                    required
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup controlId="exampleForm.ControlInput1">
                  <Form.Label>Truck Capacity (Rounded in Kgs)</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Truck Capacity"
                    value={this.state.truckCapacity}
                    onChange={this.handleChange}
                    name="truckCapacity"
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <FormGroup controlId="exampleForm.ControlInput1">
                  <Form.Label>Transporter Name</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Transporter Name"
                    value={this.state.transporterName}
                    onChange={this.handleChange}
                    name="transporterName"
                    required
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup controlId="exampleForm.ControlInput1">
                  <Form.Label>Driving Experience (Rounded in Yrs)</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Driving Experience"
                    value={this.state.drivingExp}
                    onChange={this.handleChange}
                    name="drivingExp"
                    required
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
            Interested Routes
          </p>
          <Container>
            <Row className="mb-2">
              <Col xs={2}>Route 1:</Col>
              <Col xs={1}>From:</Col>
              <Col>
                <Form.Select
                  required
                  value={this.state.route1fromstate}
                  onChange={this.handleChange}
                  name="route1fromstate"
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
                  value={this.state.route1fromcity}
                  onChange={this.handleChange}
                  name="route1fromcity"
                >
                  <option value="" defaultValue>
                    Select City
                  </option>
                  {this.state.route1fromstate !== "" &&
                    Routedict[this.state.route1fromstate].map((st) => (
                      <option value={st}>{st}</option>
                    ))}
                </Form.Select>
              </Col>
              <Col xs={1} style={{ marginLeft: "60px" }}>
                To:
              </Col>
              <Col>
                <Form.Select
                  required
                  value={this.state.route1tostate}
                  onChange={this.handleChange}
                  name="route1tostate"
                >
                  <option value="" defaultValue>
                    Select State
                  </option>
                  {Object.entries(Routedict).map(([key]) => (
                    <option value={key}>{key}</option>
                  ))}
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  required
                  value={this.state.route1tocity}
                  onChange={this.handleChange}
                  name="route1tocity"
                >
                  <option value="" defaultValue>
                    Select City
                  </option>
                  {this.state.route1tostate !== "" &&
                    Routedict[this.state.route1tostate].map((st) => (
                      <option value={st}>{st}</option>
                    ))}
                </Form.Select>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs={2}>Route 2:</Col>
              <Col xs={1}>From:</Col>
              <Col>
                <Form.Select
                  required
                  value={this.state.route2fromstate}
                  onChange={this.handleChange}
                  name="route2fromstate"
                >
                  <option value="" defaultValue>
                    Select State
                  </option>
                  {Object.entries(Routedict).map(([key]) => (
                    <option value={key}>{key}</option>
                  ))}
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  required
                  value={this.state.route2fromcity}
                  onChange={this.handleChange}
                  name="route2fromcity"
                >
                  <option value="" defaultValue>
                    Select City
                  </option>
                  {this.state.route2fromstate !== "" &&
                    Routedict[this.state.route2fromstate].map((st) => (
                      <option value={st}>{st}</option>
                    ))}
                </Form.Select>
              </Col>
              <Col xs={1} style={{ marginLeft: "60px" }}>
                To:
              </Col>
              <Col>
                <Form.Select
                  required
                  value={this.state.route2tostate}
                  onChange={this.handleChange}
                  name="route2tostate"
                >
                  <option value="" defaultValue>
                    Select State
                  </option>
                  {Object.entries(Routedict).map(([key]) => (
                    <option value={key}>{key}</option>
                  ))}
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  required
                  value={this.state.route2tocity}
                  onChange={this.handleChange}
                  name="route2tocity"
                >
                  <option value="" defaultValue>
                    Select City
                  </option>
                  {this.state.route2tostate !== "" &&
                    Routedict[this.state.route2tostate].map((st) => (
                      <option value={st}>{st}</option>
                    ))}
                </Form.Select>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs={2}>Route 3:</Col>
              <Col xs={1}>From:</Col>
              <Col>
                <Form.Select
                  required
                  value={this.state.route3fromstate}
                  onChange={this.handleChange}
                  name="route3fromstate"
                >
                  <option value="" defaultValue>
                    Select State
                  </option>
                  {Object.entries(Routedict).map(([key]) => (
                    <option value={key}>{key}</option>
                  ))}
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  required
                  value={this.state.route3fromcity}
                  onChange={this.handleChange}
                  name="route3fromcity"
                >
                  <option value="" defaultValue>
                    Select City
                  </option>
                  {this.state.route3fromstate !== "" &&
                    Routedict[this.state.route3fromstate].map((st) => (
                      <option value={st}>{st}</option>
                    ))}
                </Form.Select>
              </Col>
              <Col xs={1} style={{ marginLeft: "60px" }}>
                To:
              </Col>
              <Col>
                <Form.Select
                  required
                  value={this.state.route3tostate}
                  onChange={this.handleChange}
                  name="route3tostate"
                >
                  <option value="" defaultValue>
                    Select State
                  </option>
                  {Object.entries(Routedict).map(([key]) => (
                    <option value={key}>{key}</option>
                  ))}
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  required
                  value={this.state.route3tocity}
                  onChange={this.handleChange}
                  name="route3tocity"
                >
                  <option value="" defaultValue>
                    Select City
                  </option>
                  {this.state.route3tostate !== "" &&
                    Routedict[this.state.route3tostate].map((st) => (
                      <option value={st}>{st}</option>
                    ))}
                </Form.Select>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row xs="auto">
              <Col>
                <Link to="/driver/login">
                  <Button
                    variant="outline-dark"
                    size="lg"
                    style={{ marginTop: "10px" }}
                    type="submit"
                  >
                    SignUp
                  </Button>
                </Link>
              </Col>
              <Col>
                <h6 style={{ marginTop: "20px", fontWeight: "400" }}>
                  Have an Account already?
                  <Link
                    to="/driver/login"
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

export default SignupDriver;
