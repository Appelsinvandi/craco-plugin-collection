export function CracoRemoveModuleScopePlugin() {
  return {
    plugin: {
      overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }: any) => {
        webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter((p: any) => p.constructor.name !== 'ModuleScopePlugin')
        return webpackConfig
      },
    },
  }
}
