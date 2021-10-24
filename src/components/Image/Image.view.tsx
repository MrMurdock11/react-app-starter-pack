import React from "react";

import styles from "./Image.style.css";

import { ImageProps } from "./Image";

export const ImageView: React.FC<ImageProps> = props => {
	const { src, width, height } = props;

	return (
		<img
			className={styles.container}
			src={src}
			width={width}
			height={height}
		/>
	);
};
