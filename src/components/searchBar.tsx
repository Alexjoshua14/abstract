'use client'

import React, { FC } from 'react'
import { useForm } from '@/lib/hooks/useForm'
import { Input } from './ui/input'
import { cn } from '@/lib/utils'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { Form, FormControl, FormField, FormItem } from './ui/form'

interface SearchBarProps {
  icon?: boolean,
  className?: string
}

const SearchBar: FC<SearchBarProps> = ({ icon = true, className, ...props }) => {

  const { form, onSubmit, handleKeyPress } = useForm();

  return (
    <Form
      {...form}
    >
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("h-16 w-full", className)} {...props}>
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="h-full">
              <FormControl className="h-full">
                <div className={
                  cn(
                    "h-full border-[1px] border-black flex bg-white items-center px-2 rounded focus-within:border-blue-500",
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
                  {icon &&
                    <button
                      onClick={form.handleSubmit(onSubmit)}
                      className="enabled:hover:scale-110 disabled:text-gray-500 transition-all"
                      disabled={!form.formState.isValid}
                    >
                      <HiOutlineArrowRight size={22} />
                    </button>
                  }
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

