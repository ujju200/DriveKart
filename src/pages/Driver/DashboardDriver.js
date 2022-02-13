import React from "react";
import { Navbar, Container, Row, Col, Nav,NavDropdown, Card ,Divider} from "react-bootstrap";
import logo from "../../images/logo.png";
import About from "../../components/About";
import LoginForm from "../../components/LoginForm";
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

          <Navbar bg="light" variant="light" style={{marginTop:"10px"}}>
          <Container>
            <Navbar.Brand href="#home">
            <h3>Select Routes :-</h3>
            </Navbar.Brand>
            <Navbar.Text
              className="justify-content-end"
              style={{ fontSize: "25px", fontWeight: "400", color: "black" }}
            >
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="All Routes (Dropdown)"
          menuVariant="dark"
          style={{border: "solid"}}
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Something else</NavDropdown.Item>
        </NavDropdown>
            </Navbar.Text>
          </Container>
          </Navbar>   
         <Container>
           <div
           style={{marginTop:"50px"}}>
             <h2>List of dealers who booked you from Mathura, Uttar Pradesh to Jodhpur, Rajasthan Route :-</h2>
           </div>
           <Card style={{marginTop:"50px"}}>
           <Card.Header><h5>Sudhanshu Rajput</h5></Card.Header>
           <Card.Body>
             <blockquote className="blockquote mb-0">
                <p style={{marginTop:"5px"}}>
                {' '}
                  <h5>Dealer's Address:- Mathura, Uttar Pradesh&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone Number:- 8791084907</h5>{' '}
                   </p>
                   <hr/>
                   <p style={{marginTop:"5px"}}>
                {' '}
                  <h5>Material Quality:- Fragile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;Material Weight:- 25Kgs</h5>{' '}
                   </p>
                   <p style={{marginTop:"5px"}}>{''}<h5>Quantity:- 2Units</h5>{''}</p>
                   <hr/>                   
                    
                     <p style={{marginTop:"5px"}}>{''}<h5>Booked For Route:- From Mathura, UP to Jodhpur, Rajasthan</h5>{''}</p>
                </blockquote>
           </Card.Body>
            </Card>           
           </Container>     
          </div>
    )
  }
}

export default DriverDashboard;
