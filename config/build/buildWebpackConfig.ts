import path from 'path';
import { BuildOptions } from './types/config';
import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { paths, mode } = options;
	return {
		mode: mode,
		// склеиваем путь к файлу
		entry: paths.entry,
		// куда будет собираться проект (название файла и путь)
		output: {
			filename: "[name].[contenthash].js",
			path: paths.dist,
			// оставляем только финальную сборку
			clean: true,
		},

		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolvers()
	}
}