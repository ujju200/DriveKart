import React, { createContext } from "react";
import axios from "axios";
import env from "../env.json";
import showToast from "../helperFunctions/toast";

export const DriverAuthContext = createContext();

class DriverAuthContextProvider extends React.Component {
	state = {
		name: null,
		mobile: null,
		material: null,
		weight: null,
		quantity: null,
		state: null,
		city: null,
		booked: null,
		isLoading: true,
	};

	setDetails = (details) => {
		this.setState(details);
	};

	async componentDidMount() {
		let driverDetails = { isLoading: false };
		try {
			if (localStorage.getItem("token")) {
				const token = localStorage.getItem("token");
				const res = await axios.post(env.api + "/driver/other/", {
					token,
				});
				driverDetails = { isLoading: false, ...res.data };
			}
		} catch (err) {
			if (err.response) {
				showToast(err.response.data, false);
				if (err.response.data === "Unauthorised") {
					localStorage.removeItem("token");
				}
			}
		}
		this.setState(driverDetails);
	}

	render() {
		return (
			<DriverAuthContext.Provider
				value={{ setState: this.setDetails, ...this.state }}
			>
				{this.state.isLoading ? <></> : this.props.children}
			</DriverAuthContext.Provider>
		);
	}
}

export default DriverAuthContextProvider;

export const withDriver = (Component) => {
	return (
		<DriverAuthContextProvider>
			<Component />
		</DriverAuthContextProvider>
	);
};
