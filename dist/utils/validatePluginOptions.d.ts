import * as z from 'zod';
export declare function validatePluginOptions<T extends z.ZodSchema<any>>(zodSchema: T, pluginOptions: any): z.infer<T>;
