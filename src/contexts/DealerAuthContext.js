import React, { createContext } from "react";
import axios from "axios";
import env from "../env.json";
import showToast from "../helperFunctions/toast";

export const DealerAuthContext = createContext();

class DealerAuthContextProvider extends React.Component {
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
		let dealerDetails = { isLoading: false };
		try {
			if (localStorage.getItem("token")) {
				const token = localStorage.getItem("token");
				const res = await axios.post(env.api + "/dealer/other/", {
					token,
				});
				dealerDetails = { isLoading: false, ...res.data };
			}
		} catch (err) {
			if (err.response) {
				showToast(err.response.data, false);
				if (err.response.data === "Unauthorised") {
					localStorage.removeItem("token");
				}
			}
		}
		this.setState(dealerDetails);
	}

	render() {
		return (
			<DealerAuthContext.Provider
				value={{ setState: this.setDetails, ...this.state }}
			>
				{this.state.isLoading ? <></> : this.props.children}
			</DealerAuthContext.Provider>
		);
	}
}

export default DealerAuthContextProvider;

export const withDealer = (Component) => {
	return (
		<DealerAuthContextProvider>
			<Component />
		</DealerAuthContextProvider>
	);
};
