define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CracoRemoveModuleScopePlugin = void 0;
    function CracoRemoveModuleScopePlugin() {
        return {
            plugin: {
                overrideWebpackConfig: function (_a) {
                    var webpackConfig = _a.webpackConfig, cracoConfig = _a.cracoConfig, pluginOptions = _a.pluginOptions, _b = _a.context, env = _b.env, paths = _b.paths;
                    webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(function (p) { return p.constructor.name !== 'ModuleScopePlugin'; });
                    return webpackConfig;
                },
            },
        };
    }
    exports.CracoRemoveModuleScopePlugin = CracoRemoveModuleScopePlugin;
});
