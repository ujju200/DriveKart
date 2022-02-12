import React from "react";
import { Form, FormGroup, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <Form
          style={{
            display: "inline-block",
            marginTop: "40px",
            width: "30rem",
          }}
        >
          <h2 style={{ textAlign: "left" }}>Login</h2>
          <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>

            <Form.Control type="text" placeholder="Username" />
          </FormGroup>
          <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" />
          </FormGroup>
          <Container fluid>
            <Row xs="auto">
              <Col>
                <Button
                  variant="outline-dark"
                  size="lg"
                  style={{ marginTop: "10px" }}
                >
                  LOG IN
                </Button>
              </Col>
              <Col>
                <Button
                  variant="outline-dark"
                  size="lg"
                  style={{ marginTop: "10px" }}
                >
                  LOG IN via OTP?
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
        <h6 style={{ marginTop: "20px", fontWeight: "400" }}>
          Don&apos;t have an account?
          <Link
            to="/signupDriver"
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

export default LoginForm;
