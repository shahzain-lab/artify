import { cn } from '@/lib/utils'
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input: React.FC<InputProps> = (props) => {
    return <input
        {...props}
        className={cn(
            "bg-noble-black-600 border border-gray-light-100 text-gray-900 text-sm rounded-lg focus:border-blue",
            "focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600",
            "dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue",
            props.className
        )}
    />;
};

export default Input;