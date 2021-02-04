declare namespace HomeStyleCssNamespace {
	export interface IHomeStyleCss {
		container: string;
	}
}

declare const HomeStyleCssModule: HomeStyleCssNamespace.IHomeStyleCss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: HomeStyleCssNamespace.IHomeStyleCss;
};

export = HomeStyleCssModule;
