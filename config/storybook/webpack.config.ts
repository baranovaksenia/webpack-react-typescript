import path from 'path';
import webpack from 'webpack';
import { buildCssLoader } from '../build/loaders/buildLoaders';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }): webpack.Configuration => {
    const paths: BuildPaths = {
        dist: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    if (config?.resolve) {
        config.resolve.modules?.push(paths.src);
        config.resolve.extensions?.push('.ts', '.tsx');
    }

    if (config?.module) {
        // exclude svg file from default svg rule
        // eslint-disable-next-line no-param-reassign
        config.module.rules = (config.module.rules ?? []).map((rule: any) => {
            if (rule.test && rule.test.toString().includes('svg')) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });

        // add a new rule for svg files using @svgr/webpack
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        // add css loader
        config.module.rules?.push(buildCssLoader(true));
    }

    return config;
};
