import { ResolveOptions } from 'webpack'
import { BuildOptions } from './types/config'

export function buildResolvers(options: BuildOptions): ResolveOptions {
	// при импорте модулей не нужно указывать расширение
	// import App from './App'
	return {
		extensions: ['.ts', '.js', '.tsx'],
		preferAbsolute: true,
		modules: [options.paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {},
	}
}
