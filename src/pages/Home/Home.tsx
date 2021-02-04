import React from "react";
import { HomeView } from "./Home.view";

type HomeState = { /* your states */ };

export type HomeProps = HomeState;

export const Home: React.FC<HomeProps> = (props) => {
	return <HomeView {...props} />
}
