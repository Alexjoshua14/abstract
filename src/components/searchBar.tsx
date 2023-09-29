'use client'

import React, { FC } from 'react'
import { useForm } from '@/lib/hooks/useForm'
import { Input } from './ui/input'
import { cn } from '@/lib/utils'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { Form, FormControl, FormField, FormItem } from './ui/form'

interface SearchBarProps {
  className?: string
}

const SearchBar: FC<SearchBarProps> = ({ className }) => {

  const { form, onSubmit, handleKeyPress } = useForm();

  return (
    <Form
      {...form}
    >
      <form onSubmit={form.handleSubmit(onSubmit)} className="h-16 w-full">
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className={
                  cn(
                    "h-16 border-[1px] border-black flex bg-white items-center px-2 rounded focus-within:border-blue-500",
                    className
                  )
                }
                >
                  <Input
                    type="search"
                    className="flex-1 h-full bg-transparent border-none text-xl"
                    placeholder='Search'
                    onKeyDown={handleKeyPress}
                    {...field}
                  />
                  <HiOutlineArrowRight size={22} />
                </div>
              </FormControl>
            </FormItem>
          )}
        />


      </form>
    </Form>
  )
}

export default SearchBar

