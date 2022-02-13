import axios from "axios";
import React from "react";
import { Form, FormGroup, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DealerAuthContext } from "../contexts/DealerAuthContext";
import { withRouter } from "../customHooks/WithRouter";
import showToast from "../helperFunctions/toast";
import env from "../env.json";
class LoginForm extends React.Component {
	static contextType = DealerAuthContext;
	constructor(props) {
		super();
		this.state = {
			username: "",
			password: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		let { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	}

	async handleSubmit(event) {
		event.preventDefault();
		try {
			const res = await axios.post(env.api + this.props.api, this.state);
			console.log(res);
			localStorage.setItem("token", res.data.token);
			this.context.setState(res.data.user);
			console.log(this.context);
			showToast("Working!!", true);
			this.props.navigate(this.props.loginurl);
		} catch (err) {
			if (err.response) {
				showToast(err.response.data, false);
			}
		}
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
						<Form.Label>Username</Form.Label>

						<Form.Control
							type="text"
							placeholder="Username"
							required
							value={this.state.username}
							onChange={this.handleChange}
							name="username"
						/>
					</FormGroup>
					<FormGroup
						className="mb-3"
						controlId="exampleForm.ControlInput1"
					>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="password"
							required
							value={this.state.password}
							onChange={this.handleChange}
							name="password"
						/>
					</FormGroup>
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
								<Link to={this.props.loginotpurl}>
									<Button
										variant="outline-dark"
										size="lg"
										style={{ marginTop: "10px" }}
									>
										LOG IN via OTP?
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

export default withRouter(LoginForm);
