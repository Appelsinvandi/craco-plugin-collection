import * as z from 'zod';
export declare const pluginOptionsSchema: z.ZodUnion<[z.ZodUnion<[z.ZodObject<{
    test: z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<RegExp, z.ZodTypeDef>]>, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodType<RegExp, z.ZodTypeDef>]>>]>, z.ZodUndefined]>;
    include: z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<RegExp, z.ZodTypeDef>]>, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodType<RegExp, z.ZodTypeDef>]>>]>, z.ZodUndefined]>;
    exclude: z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<RegExp, z.ZodTypeDef>]>, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodType<RegExp, z.ZodTypeDef>]>>]>, z.ZodUndefined]>;
    algorithm: z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodLiteral<"gzip">, z.ZodLiteral<"deflate">, z.ZodLiteral<"brotliCompress">]>, z.ZodFunction<z.ZodTuple<[]>, z.ZodUnion<[z.ZodLiteral<"gzip">, z.ZodLiteral<"deflate">, z.ZodLiteral<"brotliCompress">]>>]>, z.ZodUndefined]>;
    compressionOptions: z.ZodUnion<[z.ZodObject<{}, import("zod/lib/src/helpers/objectUtil").objectUtil.Flatten<{} & {
        strict: false;
    }>, import("zod/lib/src/helpers/objectUtil").objectUtil.Flatten<{} & {
        [k: string]: any;
    }>>, z.ZodUndefined]>;
    threshold: z.ZodUnion<[z.ZodNumber, z.ZodUndefined]>;
    minRatio: z.ZodUnion<[z.ZodNumber, z.ZodUndefined]>;
    filename: z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[]>, z.ZodString>]>, z.ZodUndefined]>;
    deleteOriginalAssets: z.ZodUnion<[z.ZodUnion<[z.ZodBoolean, z.ZodLiteral<"keep-source-map">]>, z.ZodUndefined]>;
}, {
    strict: true;
}, {
    test?: string | RegExp | (string | RegExp)[] | undefined;
    include?: string | RegExp | (string | RegExp)[] | undefined;
    exclude?: string | RegExp | (string | RegExp)[] | undefined;
    algorithm?: "gzip" | "deflate" | "brotliCompress" | (() => "gzip" | "deflate" | "brotliCompress") | undefined;
    compressionOptions?: import("zod/lib/src/helpers/objectUtil").objectUtil.Flatten<{} & {
        [k: string]: any;
    }> | undefined;
    threshold?: number | undefined;
    minRatio?: number | undefined;
    filename?: string | (() => string) | undefined;
    deleteOriginalAssets?: boolean | "keep-source-map" | undefined;
}>, import("zod/lib/src/types/array").ZodNonEmptyArray<z.ZodObject<{
    test: z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<RegExp, z.ZodTypeDef>]>, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodType<RegExp, z.ZodTypeDef>]>>]>, z.ZodUndefined]>;
    include: z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<RegExp, z.ZodTypeDef>]>, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodType<RegExp, z.ZodTypeDef>]>>]>, z.ZodUndefined]>;
    exclude: z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<RegExp, z.ZodTypeDef>]>, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodType<RegExp, z.ZodTypeDef>]>>]>, z.ZodUndefined]>;
    algorithm: z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodLiteral<"gzip">, z.ZodLiteral<"deflate">, z.ZodLiteral<"brotliCompress">]>, z.ZodFunction<z.ZodTuple<[]>, z.ZodUnion<[z.ZodLiteral<"gzip">, z.ZodLiteral<"deflate">, z.ZodLiteral<"brotliCompress">]>>]>, z.ZodUndefined]>;
    compressionOptions: z.ZodUnion<[z.ZodObject<{}, import("zod/lib/src/helpers/objectUtil").objectUtil.Flatten<{} & {
        strict: false;
    }>, import("zod/lib/src/helpers/objectUtil").objectUtil.Flatten<{} & {
        [k: string]: any;
    }>>, z.ZodUndefined]>;
    threshold: z.ZodUnion<[z.ZodNumber, z.ZodUndefined]>;
    minRatio: z.ZodUnion<[z.ZodNumber, z.ZodUndefined]>;
    filename: z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[]>, z.ZodString>]>, z.ZodUndefined]>;
    deleteOriginalAssets: z.ZodUnion<[z.ZodUnion<[z.ZodBoolean, z.ZodLiteral<"keep-source-map">]>, z.ZodUndefined]>;
}, {
    strict: true;
}, {
    test?: string | RegExp | (string | RegExp)[] | undefined;
    include?: string | RegExp | (string | RegExp)[] | undefined;
    exclude?: string | RegExp | (string | RegExp)[] | undefined;
    algorithm?: "gzip" | "deflate" | "brotliCompress" | (() => "gzip" | "deflate" | "brotliCompress") | undefined;
    compressionOptions?: import("zod/lib/src/helpers/objectUtil").objectUtil.Flatten<{} & {
        [k: string]: any;
    }> | undefined;
    threshold?: number | undefined;
    minRatio?: number | undefined;
    filename?: string | (() => string) | undefined;
    deleteOriginalAssets?: boolean | "keep-source-map" | undefined;
}>>]>, z.ZodUndefined]>;
