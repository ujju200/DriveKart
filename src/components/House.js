import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing.js";

import LoginDriver from "../pages/Driver/LoginDriver";
import LoginOtpDriver from "../pages/Driver/LoginOtpDriver";
import SignupDriver from "../pages/Driver/SignupDriver.js";
import DriverDashboard from "../pages/Driver/DashboardDriver";

import LoginDealer from "../pages/Dealer/LoginDealer";
import LoginOtpDealer from "../pages/Dealer/LoginOtpDealer";
import SignupDealer from "../pages/Dealer/SignupDealer.js";

import { withDealer } from "../contexts/DealerAuthContext";
import { withDriver } from "../contexts/DriverAuthContext";

class House extends React.Component {
	render() {
		return (
			<Router>
				<Routes>
					<Route exact path="/" element={<Landing />} />
					<Route
						path="/driver/login"
						exact
						element={withDriver(LoginDriver)}
					/>
					<Route
						path="/driver/loginotp"
						exact
						element={withDriver(LoginOtpDriver)}
					/>
					<Route
						path="/driver/signup"
						exact
						element={<SignupDriver />}
					/>
					<Route
						path="/driver/dashboard"
						exact
						element={withDriver(DriverDashboard)}
					/>

					<Route
						path="/dealer/login"
						exact
						element={withDealer(LoginDealer)}
					/>
					<Route
						path="/dealer/loginotp"
						exact
						element={withDealer(LoginOtpDealer)}
					/>
					<Route
						path="/dealer/signup"
						exact
						element={<SignupDealer />}
					/>
				</Routes>
			</Router>
		);
	}
}

export default House;
