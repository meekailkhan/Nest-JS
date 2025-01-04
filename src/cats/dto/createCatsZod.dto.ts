import {z} from 'zod'
export const createCatSchema = z.object({
    name : z.string().min(3).max(12),
    description : z.string().min(5).max(20),
    age : z.number().positive().min(1).max(25)
}).strict().refine((data) => {
    const allowedKeys = ['name', 'age','description'];
    const extraKeys = Object.keys(data).filter((key) => !allowedKeys.includes(key));
    return extraKeys.length === 0;
  }, {
    message: 'Object contains forbidden keys.',
  });


export type createCatsZodDto = z.infer<typeof createCatSchema>