import * as z from 'zod'
const { throwUnexpectedConfigError } = require('@craco/craco')

export function validatePluginOptions<T extends z.ZodSchema<any>>(zodSchema: T, pluginOptions: any): z.infer<T> {
  const parseResult = zodSchema.safeParse(pluginOptions)
  if (parseResult.success === false) {
    throwUnexpectedConfigError({ packageName: 'carco-plugin-collection', message: parseResult.error.message })
  } else {
    return parseResult.data
  }
}
