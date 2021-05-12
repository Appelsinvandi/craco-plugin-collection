import * as z from 'zod';
import { pluginOptionsSchema } from './schema';
export declare function CracoPrecompressPlugin(pluginOptions: z.infer<typeof pluginOptionsSchema>): {
    plugin: {
        overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }: any) => any;
    };
    options: {
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
    } | [{
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
    }, ...{
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
    }[]] | undefined;
};
