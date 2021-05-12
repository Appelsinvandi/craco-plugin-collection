var throwUnexpectedConfigError = require('@craco/craco').throwUnexpectedConfigError;
export function validatePluginOptions(zodSchema, pluginOptions) {
    var parseResult = zodSchema.safeParse(pluginOptions);
    if (parseResult.success === false) {
        throwUnexpectedConfigError({ packageName: 'carco-plugin-collection', message: parseResult.error.message });
    }
    else {
        return parseResult.data;
    }
}
