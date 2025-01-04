import {z} from 'zod'
export const createCatSchema = z.object({
    name : z.string().min(3).max(12),
    description : z.string().min(5).max(20),
    age : z.number().positive().min(1).max(25)
})


export type createCatsZodDto = z.infer<typeof createCatSchema>