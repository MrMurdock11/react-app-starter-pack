import React from "react";

import { ImageView } from "./Image.view";

export type ImageProps = {
	src: string;
	width?: string | number;
	height?: string | number;
};

export const Image: React.FC<ImageProps> = props => {
	return <ImageView {...props} />;
};
