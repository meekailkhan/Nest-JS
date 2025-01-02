import { z } from 'zod';

export const createPropertySchema = z
  .object({
    name: z.string().min(4),
    description: z.string().min(5),
    area: z.number().positive(),
  })
  .required();

export type CreatePropertyZodDto = z.infer<typeof createPropertySchema>;
