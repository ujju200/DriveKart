import axios from "axios";
import React from "react";
import { Form, FormGroup, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import showToast from "../helperFunctions/toast.js";
import Timer from "./Timer.js";
import env from "../env.json";
import { withRouter } from "../customHooks/WithRouter.js";
class LoginOtpForm extends React.Component {
	constructor(props) {
		super();
		this.state = {
			email: "",
			otp: "",
			otpButton: true,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleOtp = this.handleOtp.bind(this);
		this.handleGetOTP = this.handleGetOTP.bind(this);
	}

	handleChange(event) {
		let { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	}

	handleOtp(event) {
		console.log(this.state.otp);
		this.setState({
			otp: event,
		});
	}

	async handleSubmit(event) {
		event.preventDefault();
		try {
			const res = await axios.post(env.api + this.props.verifyOtp, {
				email: this.state.email,
				otp: this.state.otp,
			});

			// console.log(res);
			if (res.status !== 200) {
				showToast(res.data, false);
			} else {
				localStorage.setItem("token", res.data.token);
				this.props.context.setState(res.data.user);
				this.props.navigate(this.props.loginurl);
				showToast("You are logged In!!", true);
			}
		} catch (err) {
			if (err.response) {
				showToast(err.response.data, false);
			}
		}
	}

	async handleGetOTP(event) {
		const validEmail = new RegExp(
			"^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
		);
		if (!validEmail.test(this.state.email)) {
			showToast("The entered Email is not valid", false);
			return;
		}

		// The API call
		try {
			await axios.post(env.api + this.props.getOtp, {
				email: this.state.email,
			});
			showToast("Please Check your Inbox for an OTP", true);
		} catch (err) {
			if (err.response) {
				showToast(err.response.data, false);
			}
		}

		this.setState({
			otpButton: false,
		});

		setTimeout(() => {
			this.setState({
				otpButton: true,
			});
		}, 10000);
	}

	render() {
		return (
			<div>
				<Form
					style={{
						display: "inline-block",
						width: "30rem",
					}}
					onSubmit={this.handleSubmit}
				>
					<h2 style={{ textAlign: "left" }}>Login</h2>
					<FormGroup
						className="mb-3"
						controlId="exampleForm.ControlInput1"
					>
						<Form.Label>Email Address</Form.Label>

						<Form.Control
							type="email"
							placeholder="abc@xyz.com"
							required
							value={this.state.email}
							onChange={this.handleChange}
							name="email"
						/>
					</FormGroup>
					<Container Fluid>
						<Row>
							<Col>
								<FormGroup
									className="mb-3"
									controlId="exampleForm.ControlInput1"
								>
									<Form.Control
										value={this.state.otp}
										onChange={this.handleChange}
										type="text"
										placeholder="OTP"
										required
										name="otp"
									/>
								</FormGroup>
							</Col>
							<Col>
								<Button
									onClick={this.handleGetOTP}
									disabled={!this.state.otpButton}
								>
									{" "}
									Get OTP
								</Button>
							</Col>
						</Row>
					</Container>

					{!this.state.otpButton && <Timer />}
					<Container fluid>
						<Row xs="auto">
							<Col>
								<Button
									variant="outline-dark"
									size="lg"
									style={{ marginTop: "10px" }}
									type="submit"
								>
									LOG IN
								</Button>
							</Col>
							<Col>
								<Link to={this.props.loginpasswordurl}>
									<Button
										variant="outline-dark"
										size="lg"
										style={{ marginTop: "10px" }}
									>
										LOG IN via Password?
									</Button>
								</Link>
							</Col>
						</Row>
					</Container>
				</Form>
				<h6 style={{ marginTop: "20px", fontWeight: "400" }}>
					Don&apos;t have an account?
					<Link
						to={this.props.signup}
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

export default withRouter(LoginOtpForm);
