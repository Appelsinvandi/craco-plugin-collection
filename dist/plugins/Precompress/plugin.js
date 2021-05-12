import CompressionPlugin from 'compression-webpack-plugin';
import { validatePluginOptions } from '../../utils';
import { pluginOptionsSchema } from './schema';
export function CracoPrecompressPlugin(pluginOptions) {
    return {
        plugin: {
            overrideWebpackConfig: function (_a) {
                var webpackConfig = _a.webpackConfig, cracoConfig = _a.cracoConfig, pluginOptions = _a.pluginOptions, _b = _a.context, env = _b.env, paths = _b.paths;
                var validatedOptions = validatePluginOptions(pluginOptionsSchema, pluginOptions);
                if (Array.isArray(validatedOptions)) {
                    for (var _i = 0, pluginOptions_1 = pluginOptions; _i < pluginOptions_1.length; _i++) {
                        var o = pluginOptions_1[_i];
                        webpackConfig.plugins.push(new CompressionPlugin(o));
                    }
                }
                else {
                    webpackConfig.plugins.push(new CompressionPlugin(validatedOptions));
                }
                return webpackConfig;
            },
        },
        options: pluginOptions,
    };
}
