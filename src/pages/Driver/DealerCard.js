import React from "react";
import { Container, Row, Col, Card, Divider } from "react-bootstrap";

class DealerCard extends React.Component {
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
                  <p>
                    Dealer&apos;s Address:- {this.props.city},&nbsp;
                    {this.props.state}
                  </p>
                </Col>
                <Col>
                  <p>Phone no.:- {this.props.phoneno}</p>
                </Col>
              </Row>
            </Container>

            <hr />
            <Container fluid>
              <Row>
                <Col>
                  <p>Material Quality:- {this.props.quality}</p>
                </Col>
                <Col>
                  <p>Material Weight:- {this.props.weight}Kgs</p>
                </Col>
              </Row>
              <Row>
                <Col>Material Quantity:- {this.props.quantity} Units</Col>
              </Row>
            </Container>
            <hr />

            <p>
              Booked For Route:- From {this.props.fromcity},{" "}
              {this.props.fromstate} to {this.props.tocity},{" "}
              {this.props.tostate}
            </p>
          </Card.Body>
        </Card>{" "}
      </div>
    );
  }
}

export default DealerCard;
