import React from "react";
import {
  Navbar,
  Container,
  Row,
  Col,
  Nav,
  NavDropdown,
  Card,
  Divider,
} from "react-bootstrap";
import logo from "../../images/logo.png";
import DealerCard from "./DealerCard";

class DriverDashboard extends React.Component {
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
              Hi Driver Name
            </Navbar.Text>
          </Container>
        </Navbar>
        <Container className="mt-3" style={{ marginBottom: "60px" }}>
          <p style={{ marginTop: "50px", fontSize: "25px" }}>
            List of dealers who booked you, All the relevant information of the
            dealers is provided below :-
          </p>

          <DealerCard
            name="Kunal Lodha"
            state="Rajasthan"
            city="Jodhpur"
            phoneno="8441007031"
            quality="Fragile"
            weight="45"
            quantity="9"
            fromstate="Andhra"
            fromcity="vajaynti"
            tostate="Goa"
            tocity="Panaji"
          />
        </Container>
      </div>
    );
  }
}

export default DriverDashboard;
