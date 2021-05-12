import * as z from 'zod'
import CompressionPlugin from 'compression-webpack-plugin'
import { validatePluginOptions } from '../../utils'
import { pluginOptionsSchema } from './schema'

export function CracoPrecompressPlugin(pluginOptions: z.infer<typeof pluginOptionsSchema>) {
  return {
    plugin: {
      overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }: any) => {
        const validatedOptions = validatePluginOptions(pluginOptionsSchema, pluginOptions)

        if (Array.isArray(validatedOptions)) {
          for (const o of pluginOptions) {
            webpackConfig.plugins.push(new CompressionPlugin(o))
          }
        } else {
          webpackConfig.plugins.push(new CompressionPlugin(validatedOptions))
        }

        return webpackConfig
      },
    },
    options: pluginOptions,
  }
}
