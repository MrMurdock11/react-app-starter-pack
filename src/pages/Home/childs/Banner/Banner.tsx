import React from "react";
import { BannerView } from "./Banner.view";

type BannerState = {
	/* your states */
};

export type BannerProps = BannerState;

export const Banner: React.FC<BannerProps> = (props) => {
	return <BannerView {...props} />;
};

