import React from "react";
import {
	Navbar,
	Container,
	Row,
	Col,
	Form,
	FormGroup,
	Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { Routedict } from "../../data/statesAndCities.js";
import axios from "axios";
import env from "../../env.json";
import { withRouter } from "../../customHooks/WithRouter";
import showToast from "../../helperFunctions/toast";

class SignupDealer extends React.Component {
	constructor(props) {
		super();
		this.state = {
			name: "",
			phoneno: "", //should be changed to mobile
			email: "",
			username: "",
			password: "",
			confirm: "",
			state: "",
			city: "",
			nature: "", //should be changed to material
			weight: "",
			quantity: "",
			isLoading: false,
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
		try {
			event.preventDefault();
			this.setState({ isLoading: true });
			await axios.post(env.api + "/dealer/signup", this.state);
			showToast("You have signed In successfully", true);
			this.props.navigate("/dealer/login");
		} catch (err) {
			if (err.response)
				for (let key in err.response.data) {
					showToast(err.response.data[key], false);
				}
		}
		this.setState({ isLoading: false });
	}

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
				<h2
					style={{
						textAlign: "center",
						marginTop: "30px",
						marginBottom: "30px",
					}}
				>
					SignUp
				</h2>
				<Form
					style={{ marginLeft: "50px", marginBottom: "50px" }}
					onSubmit={this.handleSubmit}
				>
					<p
						className="mb-2"
						style={{
							textAlign: "left",
							fontSize: "20px",
							fontWeight: "500",
						}}
					>
						Personal Details
					</p>
					<Container>
						<Row className="mb-2">
							<Col>
								<FormGroup controlId="exampleForm.ControlInput1">
									<Form.Label>Name</Form.Label>

									<Form.Control
										type="text"
										placeholder="Name"
										required
										value={this.state.name}
										onChange={this.handleChange}
										name="name"
									/>
								</FormGroup>
							</Col>
							<Col>
								<FormGroup controlId="exampleForm.ControlInput1">
									<Form.Label>Phone no.</Form.Label>

									<Form.Control
										type="text"
										placeholder="0123456789"
										required
										value={this.state.phoneno}
										onChange={this.handleChange}
										name="phoneno"
									/>
								</FormGroup>
							</Col>
						</Row>
						<Row className="mb-2">
							<Col>
								<FormGroup controlId="exampleForm.ControlInput1">
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
							</Col>
							<Col>
								<FormGroup controlId="exampleForm.ControlInput1">
									<Form.Label>Email</Form.Label>

									<Form.Control
										type="email"
										placeholder="abc@xyz.com"
										required
										value={this.state.email}
										onChange={this.handleChange}
										name="email"
									/>
								</FormGroup>
							</Col>
						</Row>
						<Row className="mb-2">
							<Col>
								<FormGroup controlId="exampleForm.ControlInput1">
									<Form.Label>
										Password (min-length: 6)
									</Form.Label>

									<Form.Control
										type="password"
										placeholder="password"
										required
										value={this.state.password}
										onChange={this.handleChange}
										name="password"
									/>
								</FormGroup>
							</Col>
							<Col>
								<FormGroup controlId="exampleForm.ControlInput1">
									<Form.Label>Confirm Password</Form.Label>

									<Form.Control
										type="password"
										placeholder="Confirm Passowrd"
										required
										value={this.state.confirm}
										onChange={this.handleChange}
										name="confirm"
										style={
											this.state.password !==
											this.state.confirm
												? { borderColor: "#f00" }
												: { borderColor: "#0f0" }
										}
									/>
								</FormGroup>
							</Col>
						</Row>
						<Row className="mb-2">
							<Col>
								<Form.Label>State</Form.Label>
								<Form.Select
									required
									value={this.state.state}
									onChange={this.handleChange}
									name="state"
								>
									<option value="" defaultValue>
										Select State
									</option>
									{Object.entries(Routedict).map(([key]) => (
										<option value={key}> {key} </option>
									))}
								</Form.Select>
							</Col>
							<Col>
								<Form.Label>State</Form.Label>
								<Form.Select
									required
									value={this.state.city}
									onChange={this.handleChange}
									name="city"
								>
									<option value="" defaultValue>
										Select City
									</option>
									{this.state.state !== "" &&
										Routedict[this.state.state].map(
											(st) => (
												<option value={st}>{st}</option>
											)
										)}
								</Form.Select>
							</Col>
						</Row>
					</Container>
					<p
						className="mb-2"
						style={{
							textAlign: "left",
							fontSize: "20px",
							marginTop: "40px",
							fontWeight: "500",
						}}
					>
						Goods Details
					</p>
					<Container>
						<Row className="mb-2">
							<Col>
								<FormGroup controlId="exampleForm.ControlInput1">
									<Form.Label>Nature Of Materials</Form.Label>

									<Form.Control
										type="text"
										placeholder="Nature Of Materials"
										required
										value={this.state.nature}
										onChange={this.handleChange}
										name="nature"
									/>
								</FormGroup>
							</Col>
							<Col>
								<FormGroup controlId="exampleForm.ControlInput1">
									<Form.Label>
										Weight of Materials (in Kgs)
									</Form.Label>

									<Form.Control
										type="text"
										placeholder="Weight of Materials (in Kgs)"
										required
										value={this.state.weight}
										onChange={this.handleChange}
										name="weight"
									/>
								</FormGroup>
							</Col>
						</Row>
						<Row className="mb-2">
							<Col>
								<FormGroup controlId="exampleForm.ControlInput1">
									<Form.Label>Quantity</Form.Label>

									<Form.Control
										type="text"
										placeholder="Quantity"
										required
										value={this.state.quantity}
										onChange={this.handleChange}
										name="quantity"
									/>
								</FormGroup>
							</Col>
						</Row>
					</Container>
					<Container>
						<Row xs="auto">
							<Col>
								<Button
									variant="outline-dark"
									size="lg"
									style={{ marginTop: "10px" }}
									type="submit"
									disabled={
										this.state.password !==
											this.state.confirm ||
										this.state.isLoading
									}
								>
									SignUp
								</Button>
							</Col>
							<Col>
								<h6
									style={{
										marginTop: "20px",
										fontWeight: "400",
									}}
								>
									Have an Account already?
									<Link
										to="/dealer/login"
										style={{
											color: "45baea",
											marginLeft: "5px",
											textDecoration: "none",
										}}
									>
										Login
									</Link>
								</h6>
							</Col>
						</Row>
					</Container>
				</Form>
			</div>
		);
	}
}

export default withRouter(SignupDealer);
