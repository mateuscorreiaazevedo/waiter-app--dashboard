import type { z } from 'zod';
import type { createProductSchema } from '../util/createProductSchema';

export type CreateProductSchemaType = z.infer<typeof createProductSchema>;
