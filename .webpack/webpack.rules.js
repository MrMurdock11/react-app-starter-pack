module.exports = [
	{
		test: /\.(ts|tsx|js)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
		},
	},
	{
		test: /\.gstyle.css$/,
		use: ["style-loader", "css-loader"],
	},
	{
		test: /\.style.css$/,
		use: [
			"style-loader",
			"@teamsupercell/typings-for-css-modules-loader",
			{
				loader: "css-loader",
				options: {
					modules: {
						localIdentName: "[folder]_[local]__[hash:base64:5]",
					},
				},
			},
		],
	},
	{
		test: /\.(png|jpg|gif|svg|jpeg)$/,
		loader: "file-loader",
		options: {
			name: "[name].[ext]",
		},
	},
];
