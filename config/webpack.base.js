const Path = require("path");
const Paths = require("./paths");

module.exports = {
	resolve: {
		extensions: [ ".js", ".ts" ],
		alias: {
			"src": Paths.sourceRoot,
		},
		unsafeCache: true
	},
	cache: true,
	devtool: "inline-source-map",
	module: {
		rules: [ {
			/* JavaScript / Babel */
			test: /\.js$/,
			loader: "babel-loader",
			exclude: [ "node_modules" ]
		}, {
			/* TypeScript */
			test: /\.ts$/,
			loader: "awesome-typescript-loader",
			exclude: [ "node_modules" ],
			options: { configFileName: Path.resolve(Paths.configRoot, "tsconfig.json") }
		}, {
			/* Styles */
			test: /\.scss$/,
			use: [ {
				loader: "style-loader"
			}, {
				loader: "css-loader"
			}, {
				loader: "sass-loader",
				options: {
					includePaths: [ Path.resolve(Paths.sourceRoot, "_style"), "./" ]
				}
			} ],
			exclude: [ "node_modules" ]
		}, {
			/** fonts **/
			test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: "url-loader?limit=10000&mimetype=application/font-woff",
			exclude: [ "node_modules" ]
		}, {
			test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: "file-loader",
			exclude: [ "node_modules" ]
		} ]
	}
};
