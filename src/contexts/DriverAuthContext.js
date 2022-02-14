import React, { createContext } from "react";
import axios from "axios";
import env from "../env.json";
import showToast from "../helperFunctions/toast";
import Loading from "../pages/Loading";

export const DriverAuthContext = createContext();

class DriverAuthContextProvider extends React.Component {
	state = {
		id: null,
		name: null,
		age: null,
		mobile: null,
		truckNum: null,
		capacity: null,
		transporterName: null,
		experience: null,
		book: null,
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
			} else {
				if (
					window.location.pathname !== "/driver/login" &&
					window.location.pathname !== "/driver/loginotp"
				) {
					console.log("Logging out");
					window.location.pathname = "/driver/login";
				}
			}
		} catch (err) {
			if (err.response) {
				showToast(err.response.data, false);
				if (err.response.data === "Unauthorised") {
					localStorage.removeItem("token");
					window.location.pathname = "/driver/login";
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
				{this.state.isLoading ? <Loading /> : this.props.children}
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
