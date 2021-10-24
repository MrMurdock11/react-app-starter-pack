declare namespace ImageStyleCssNamespace {
	export interface IImageStyleCss {
		container: string;
	}
}

declare const ImageStyleCssModule: ImageStyleCssNamespace.IImageStyleCss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: ImageStyleCssNamespace.IImageStyleCss;
};

export = ImageStyleCssModule;
