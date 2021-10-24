import React from "react";
import { HomeView } from "./Home.view";

export type HomeProps = {};

export const Home: React.FC<HomeProps> = props => {
	return <HomeView {...props} />;
};
