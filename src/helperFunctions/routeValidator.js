const routeValidator = ({
	route1fromstate,
	route1fromcity,
	route1tostate,
	route1tocity,
	route2fromstate,
	route2fromcity,
	route2tostate,
	route2tocity,
	route3fromstate,
	route3fromcity,
	route3tostate,
	route3tocity,
}) => {
	console.log(route1fromstate);
	if (route1fromstate === route1tostate && route1fromcity === route1tocity) {
		throw new Error(
			"In Route-1 From and TO are same, please keep them different"
		);
	}

	if (route2fromstate === route2tostate && route2fromcity === route2tocity) {
		throw new Error(
			"In Route-2 From and TO are same, please keep them different"
		);
	}

	if (route3fromstate === route3tostate && route3fromcity === route3tocity) {
		throw new Error(
			"In Route-3 From and TO are same, please keep them different"
		);
	}

	if (
		route1fromstate === route2fromstate &&
		route1fromcity === route2fromcity &&
		route1tostate === route2tostate &&
		route1tocity === route2tocity
	) {
		throw new Error(
			"Route-1 and Route-2 are same, please keep them different"
		);
	}

	if (
		route1fromstate === route3fromstate &&
		route1fromcity === route3fromcity &&
		route1tostate === route3tostate &&
		route1tocity === route3tocity
	) {
		throw new Error(
			"Route-1 and Route-3 are same, please keep them different"
		);
	}

	if (
		route3fromstate === route2fromstate &&
		route3fromcity === route2fromcity &&
		route3tostate === route2tostate &&
		route3tocity === route2tocity
	) {
		throw new Error(
			"Route-2 and Route-3 are same, please keep them different"
		);
	}
};

export default routeValidator;
