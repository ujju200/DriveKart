import axios from "axios";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { DealerAuthContext } from "../../contexts/DealerAuthContext";
import env from "../../env.json";
import showToast from "../../helperFunctions/toast";

class DriverCard extends React.Component {
	static contextType = DealerAuthContext;
	state = {
		disabled: false,
	};

	componentDidMount() {
		console.log(this.props.id, this.context.id);
		for (var obj of this.context.booked) {
			console.log(obj);
			if (
				obj.driverId === this.props.id &&
				obj.fromState === this.props.fromstate &&
				obj.fromCity === this.props.fromcity &&
				obj.toState === this.props.tostate &&
				obj.toCity === this.props.tocity
			) {
				this.setState({ disabled: true });
				break;
			}
		}
	}

	handleClick = async () => {
		try {
			await axios.post(env.api + "/dealer/other/bookDriver/byId", {
				token: localStorage.getItem("token"),
				driverId: this.props.id,
				fromState: this.props.fromstate,
				fromCity: this.props.fromcity,
				toState: this.props.tostate,
				toCity: this.props.tocity,
			});
			let booked = this.context.booked;
			booked.push({
				driverId: this.props.id,
				fromState: this.props.fromstate,
				fromCity: this.props.fromcity,
				toState: this.props.tostate,
				toCity: this.props.tocity,
			});
			this.context.setState({ ...this.context, booked: booked });
			this.setState({ disabled: true });
			showToast("Booked!!", true);
		} catch (err) {
			if (err.response) {
				showToast(err.response.data, false);
			}
		}
	};

	render() {
		return (
			<div>
				<Card
					style={{
						border: "2px solid",
						marginTop: "30px",
						width: "80%",
					}}
				>
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
									<button
										disabled={this.state.disabled}
										onClick={this.handleClick}
									>
										{this.state.disabled
											? "Booked"
											: "Book"}
									</button>
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
									<p>
										Truck Capacity:- {this.props.capacity}
										Kgs
									</p>
								</Col>
							</Row>
							<Row>
								<Col>
									Transporter Name:- {this.props.transname}
								</Col>
								<Col>Driving Exp:- {this.props.drexp}yrs</Col>
							</Row>
						</Container>
						<hr />

						<p>
							Route:- From {this.props.fromcity},{" "}
							{this.props.fromstate} to {this.props.tocity},{" "}
							{this.props.tostate}
						</p>
					</Card.Body>
				</Card>{" "}
			</div>
		);
	}
}

export default DriverCard;
