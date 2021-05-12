"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePluginOptions = void 0;
var throwUnexpectedConfigError = require('@craco/craco').throwUnexpectedConfigError;
function validatePluginOptions(zodSchema, pluginOptions) {
    var parseResult = zodSchema.safeParse(pluginOptions);
    if (parseResult.success === false) {
        throwUnexpectedConfigError({ packageName: 'carco-plugin-collection', message: parseResult.error.message });
    }
    else {
        return parseResult.data;
    }
}
exports.validatePluginOptions = validatePluginOptions;
