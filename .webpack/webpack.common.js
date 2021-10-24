const path = require("path");

module.exports = {
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "index.[contenthash].js",
		publicPath: "./",
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		alias: {
			"@components": path.resolve(__dirname, "../src/components"),
		},
	},
	module: {
		rules: require("./webpack.rules"),
	},
	plugins: require("./webpack.plugins"),
};
