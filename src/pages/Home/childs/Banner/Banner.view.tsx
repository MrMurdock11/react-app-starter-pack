import React from "react";

import styles from "./Banner.style.css";

import { Image } from "@components/Image";

import { BannerProps } from "./Banner";
import ImageSvg from "./contents/programmer.svg";

export const BannerView: React.FC<BannerProps> = props => {
	return (
		<div className={styles.container}>
			<Image src={ImageSvg} width={800} height={800} />

			<div className={styles.message}>
				<h1 className={styles.header}>{"🙃 Fortunately for us 🙃"}</h1>
				<h1 className={styles.header}>
					{"🎉 You successfully run your application 🎉"}
				</h1>
				<h1 className={styles.header}>{"🤩 Congratulations 🤩"}</h1>
			</div>
		</div>
	);
};
