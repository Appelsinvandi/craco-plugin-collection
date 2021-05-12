import * as z from 'zod'

const supportedAlgorithmsSchema = z.union([z.literal('gzip'), z.literal('deflate'), z.literal('brotliCompress')])
const stringOrArrayUnionSchema = z.union([z.string(), z.instanceof(RegExp)])
const testSchema = z.union([stringOrArrayUnionSchema, stringOrArrayUnionSchema.array()])
const compressWebpackOptionsSchema = z.object({
  test: testSchema.optional(),
  include: testSchema.optional(),
  exclude: testSchema.optional(),
  algorithm: z.union([supportedAlgorithmsSchema, z.function(z.tuple([]), supportedAlgorithmsSchema)]).optional(),
  compressionOptions: z.object({}).nonstrict().optional(),
  threshold: z.number().optional(),
  minRatio: z.number().positive().optional(),
  filename: z.union([z.string(), z.function(z.tuple([]), z.string())]).optional(),
  deleteOriginalAssets: z.union([z.boolean(), z.literal('keep-source-map')]).optional(),
})

export const pluginOptionsSchema = z.union([compressWebpackOptionsSchema, compressWebpackOptionsSchema.array().nonempty()]).optional()
