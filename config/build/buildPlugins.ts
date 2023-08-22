import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from './types/config';


export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		new HTMLWebpackPlugin({
			// в объекте передаем настройки плагина
			// index.html - шаблон, который будет использоваться для сборки
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
	];
}