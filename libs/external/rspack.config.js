const path = require('path');
const rspack = require("@rspack/core");
const isDev = process.env.NODE_ENV === "development";
const root = process.cwd();

console.log(root);
/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
	context: root,
	entry: {
		main: path.resolve(root, 'index.ts')
	},
	output: {
		path: path.resolve(root, 'dist'),
		filename: 'index.js',
		clean: true
	},
	resolve: {
		extensions: ["...", ".ts"],
		tsConfig: {
			configFile: path.resolve(root, 'tsconfig.release.json'),
			references: 'auto'
		}
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				type: "asset"
			},
			{
				test: /\.(ts)$/,
				use: [
					{
						loader: "builtin:swc-loader",
						options: {
							jsc: {
								parser: {
									syntax: "typescript",
									tsx: true
								},
								transform: {
									react: {
										runtime: "automatic",
										development: isDev,
										refresh: isDev
									}
								}
							},
							env: {
								targets: [
									"chrome >= 87",
									"edge >= 88",
									"firefox >= 78",
									"safari >= 14"
								]
							}
						}
					}
				]
			}
		]
	},
	plugins: [
		new rspack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
		}),
		new rspack.ProgressPlugin({}),
	].filter(Boolean)
};
