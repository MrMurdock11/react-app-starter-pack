import styles from "./Home.style.css";

import React from "react";
import { HomeProps } from "./Home";
import { Banner } from "./childs/Banner";

export const HomeView: React.FC<HomeProps> = props => {
	return (
		<div className={styles.container}>
			<Banner />
		</div>
	);
};
