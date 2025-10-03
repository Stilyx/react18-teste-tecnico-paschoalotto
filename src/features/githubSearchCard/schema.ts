import { z } from 'zod';

export const searchUserSchema = z.object({
	name: z.string(),
});

export type searchUserSchemaType = z.infer<typeof searchUserSchema>;
