var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
define(["require", "exports", "zod"], function (require, exports, z) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pluginOptionsSchema = void 0;
    z = __importStar(z);
    var supportedAlgorithmsSchema = z.union([z.literal('gzip'), z.literal('deflate'), z.literal('brotliCompress')]);
    var stringOrArrayUnionSchema = z.union([z.string(), z.instanceof(RegExp)]);
    var testSchema = z.union([stringOrArrayUnionSchema, stringOrArrayUnionSchema.array()]);
    var compressWebpackOptionsSchema = z.object({
        test: testSchema.optional(),
        include: testSchema.optional(),
        exclude: testSchema.optional(),
        algorithm: z.union([supportedAlgorithmsSchema, z.function(z.tuple([]), supportedAlgorithmsSchema)]).optional(),
        compressionOptions: z.object({}).nonstrict().optional(),
        threshold: z.number().optional(),
        minRatio: z.number().positive().optional(),
        filename: z.union([z.string(), z.function(z.tuple([]), z.string())]).optional(),
        deleteOriginalAssets: z.union([z.boolean(), z.literal('keep-source-map')]).optional(),
    });
    exports.pluginOptionsSchema = z.union([compressWebpackOptionsSchema, compressWebpackOptionsSchema.array().nonempty()]).optional();
});
