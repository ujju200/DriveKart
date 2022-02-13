import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import logo from "../../images/logo.png";
import About from "../../components/About";
import LoginForm from "../../components/LoginForm";
class LoginDealer extends React.Component {
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
							style={{
								fontSize: "25px",
								fontWeight: "400",
								color: "black",
							}}
						>
							For Dealer
						</Navbar.Text>
					</Container>
				</Navbar>
				<Container fluid style={{ marginTop: "60px" }}>
					<Row>
						<Col>
							<About />
						</Col>
						<Col>
							<LoginForm
								loginurl="/dealer/dashboard/home"
								loginotpurl="/dealer/loginotp"
								signup="/dealer/signup"
								api="/dealer/login"
							/>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default LoginDealer;
