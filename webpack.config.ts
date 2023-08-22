import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  mode: "development",
  // склеиваем путь к файлу
  entry: path.resolve(__dirname, "src", "index.ts"),
  // куда будет собираться проект (название файла и путь)
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    // оставляем только финальную сборку
    clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      // в объекте передаем настройки плагина
      // index.html - шаблон, который будет использоваться для сборки
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new webpack.ProgressPlugin(),
  ],
  module: {
    rules: [
      {
        // регулярное выражение для расширения файлов
        // находим файлы с расширением .tsx, .ts и пропускаем через loader
        test: /\.tsx$/,
        // указываем, какой loader использовать
        use: "ts-loader",
        // исключаем папку node_modules
        exclude: /node_modules/,
      },
    ],
  },
  // при импорте модулей не нужно указывать расширение
  // import App from './App'
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
};


export default config;
