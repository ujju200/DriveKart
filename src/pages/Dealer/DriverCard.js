import React from "react";
import { Container, Row, Col, Card, Divider } from "react-bootstrap";

class DriverCard extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <Card style={{ border: "2px solid", marginTop: "30px", width: "80%" }}>
          <Card.Header>
            <h5>{this.props.name}</h5>
          </Card.Header>
          <Card.Body>
            <Container fluid>
              <Row>
                <Col>
                  <p>Phone no.:- {this.props.phoneno}</p>
                </Col>
                <Col>
                  <button>Book Now</button>
                </Col>
              </Row>
            </Container>
            <hr />
            <Container fluid>
              <Row>
                <Col>
                  <p>Truck No.:- {this.props.truckno}</p>
                </Col>
                <Col>
                  <p>Truck Capacity:- {this.props.capacity}Kgs</p>
                </Col>
              </Row>
              <Row>
                <Col>Transporter Name:- {this.props.transname}</Col>
                <Col>Driving Exp:- {this.props.drexp}yrs</Col>
              </Row>
            </Container>
            <hr />

            <p>
              Route:- From {this.props.fromcity}, {this.props.fromstate} to{" "}
              {this.props.tocity}, {this.props.tostate}
            </p>
          </Card.Body>
        </Card>{" "}
      </div>
    );
  }
}

export default DriverCard;
