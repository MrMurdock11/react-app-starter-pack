import React from "react";
import {
	HashRouter as Router,
	Route,
	RouteProps,
	Switch,
} from "react-router-dom";

import { Home } from "./pages/Home";

const routes: RouteProps[] = [
	{
		exact: true,
		path: "/",
		component: Home,
	},
];

export const App: React.FC = () => {
	return (
		<Router hashType="noslash">
			<Switch>
				{routes.map((route, index) => (
					<Route key={index} {...route} />
				))}
			</Switch>
		</Router>
	);
};
