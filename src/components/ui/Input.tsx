import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
    className?: string
    placeholder?: string
} 

const Input = ({className, placeholder=''}: Props) => {
    return (
        <div>
            <input
                type="text"
                id="first_name"
                placeholder={placeholder}
                className={cn(
                    "bg-light-dark border border-gray text-gray-900 text-sm rounded-lg focus:border-blue",
                    "focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600",
                    "dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue",
                    className
                    )}
                required
            />
        </div>
    )
}

export default Input