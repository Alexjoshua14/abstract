
import { z } from 'zod'

export const FormSchema = z.object({
  searchQuery: z.string().min(1)
})