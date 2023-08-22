import { ResolveOptions } from 'webpack';

export function buildResolvers(): ResolveOptions {
	// при импорте модулей не нужно указывать расширение
	// import App from './App'
	return {
		extensions: [".ts", ".js", ".tsx"],
	};
}