import React from 'react'
{
  /* Utils */
}
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      className={cn(
        'border border-gray-light-100 text-sm rounded-lg focus:border-blue',
        'focus:border-blue-500 block w-full p-2.5 bg-gray-300 dark:border-gray-600',
        'dark:placeholder-gray-400 text-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue',
        props.className
      )}
    />
  )
}

export default Input
