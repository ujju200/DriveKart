import React from "react";
import {
  Form,
  FormGroup,
  Button,
  FloatingLabel,
  Container,
  Row,
  Col,
} from "react-bootstrap";

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <Form
          className="login-form "
          style={{
            display: "inline-block",
            marginTop: "40px",
            width: "30rem",
          }}
        >
          <h2 style={{ textAlign: "left" }}>Login</h2>
          <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>

            <Form.Control type="text" placeholder="Email" />
          </FormGroup>
          <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" />
          </FormGroup>
          <Container fluid>
            <Row xs="auto">
              <Col>
                <Button
                  variant="primary"
                  size="lg"
                  style={{ marginTop: "10px" }}
                >
                  LOG IN
                </Button>
              </Col>
              <Col>
                <Button
                  variant="primary"
                  size="lg"
                  style={{ marginTop: "10px" }}
                >
                  LOG IN via OTP?
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
