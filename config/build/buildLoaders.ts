import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	}

	const babelLoader = {
		test: /\.(js|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				plugins: [
					[
						'i18next-extract',
						{
							locales: ['en', 'ru'],
							keyAsDefaultValue: true,
						},
					],
				],
			},
		},
	}

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from js strings
			// dev mode - "style-loader", prod mode - MiniCssExtractPlugin.loader
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						// генерирует уникальные имена классов только для .module.scss файлов
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						// оставляем уникальные название только для production сборки
						// dev - путь до компонента + название класса
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:5]'
							: '[hash:base64:5]',
					},
				},
			},
			// Compiles Sass to CSS
			'sass-loader',
		],
	}

	// можно добавить обработку шрифтов
	const fileLoader = {
		test: /\.(png|jpe?g|gif|)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader]
}
