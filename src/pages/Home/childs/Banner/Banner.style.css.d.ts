declare namespace BannerStyleCssNamespace {
	export interface IBannerStyleCss {
		container: string;
		header: string;
		message: string;
	}
}

declare const BannerStyleCssModule: BannerStyleCssNamespace.IBannerStyleCss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: BannerStyleCssNamespace.IBannerStyleCss;
};

export = BannerStyleCssModule;
