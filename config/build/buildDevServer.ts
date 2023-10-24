// Импорт типа BuildOptions из файла "./types/config"
import { BuildOptions } from './types/config'

// Импорт типа Configuration из модуля "webpack-dev-server"
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

// Функция для настройки конфигурации сервера разработки
export function buildDevServer(options: BuildOptions): DevServerConfiguration {
	return {
		// Порт, на котором будет запущен сервер
		port: options.port,

		// Открывать ли браузер автоматически при запуске сервера
		open: true,

		// Позволять серверу возвращать index.html при ошибках или несуществующих путях
		historyApiFallback: true,
		// hotmodulereplacement - позволяет обновлять страницу без перезагрузки
		hot: true,
	}
}
