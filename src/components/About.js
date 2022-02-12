import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import logo from "../images/logo.png";

class About extends React.Component {
  render() {
    return (
      <div>
        <Card
          style={{
            width: "30rem",
            marginTop: "60px",
            marginLeft: "40px",
            border: "0px",
          }}
        >
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              <img
                alt=""
                src={logo}
                width="35"
                height="35"
                className="d-inline-block align-top"
              />{" "}
              DriveKart
            </Card.Title>

            <Card.Text
              style={{
                textAlign: "center",
                fontSize: "20px",
                marginTop: "20px",
              }}
            >
              DriverKart is a single platform for connecting Dealers with
              Drivers. Dealers can login and source Drivers as per their
              convinence, whereas Drivers can create their profile and get
              hired.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default About;
