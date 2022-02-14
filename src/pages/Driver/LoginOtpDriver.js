import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import logo from "../../images/logo.png";
import About from "../../components/About";
import LoginOtpForm from "../../components/LoginOtpForm";
import { DriverAuthContext } from "../../contexts/DriverAuthContext";

class LoginOtpDriver extends React.Component {
	static contextType = DriverAuthContext;
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
							For Driver
						</Navbar.Text>
					</Container>
				</Navbar>
				<Container fluid style={{ marginTop: "60px" }}>
					<Row>
						<Col>
							<About />
						</Col>
						<Col>
							<LoginOtpForm
								loginurl="/driver/dashboard"
								loginpasswordurl="/driver/login"
								signup="/driver/signup"
								getOtp="/driver/otp/generate"
								veriftOtp="/driver/otp/verify"
								context={this.context}
							/>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default LoginOtpDriver;
