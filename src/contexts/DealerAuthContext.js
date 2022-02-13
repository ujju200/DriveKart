import React, { createContext } from "react";
import axios from "axios";
import env from "../env.json";

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
			if (localStorage.get("token")) {
				const token = localStorage.getItem("token");
				const res = await axios.post(env.api + "/dealer/other/", {
					token,
				});
				console.log(res);
				if (
					res.data !== "Unauthorised" ||
					res.data !== "Server Internal Error"
				)
					dealerDetails = { isLoading: false, ...res.data };
			}
		} catch (err) {
			console.log(err.message);
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
