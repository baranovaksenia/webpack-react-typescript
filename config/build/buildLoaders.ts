import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
	return [
		{
			// регулярное выражение для расширения файлов
			// находим файлы с расширением .tsx, .ts и пропускаем через loader
			test: /\.tsx$/,
			// указываем, какой loader использовать
			use: "ts-loader",
			// исключаем папку node_modules
			exclude: /node_modules/,
		},
	];
}