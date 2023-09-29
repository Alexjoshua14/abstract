
import { z } from 'zod'
import { FormSchema } from '../validators/formValidator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm as useReactForm } from 'react-hook-form'

export const useForm = () => {
  const form = useReactForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(`Here is the search query: ${data.searchQuery}`);
    form.reset({ searchQuery: "" });
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter')
      form.handleSubmit(onSubmit);
  }

  return { form, onSubmit, handleKeyPress }
}