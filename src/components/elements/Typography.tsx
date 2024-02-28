import React from 'react'
import { cn } from '@/lib/utils'
import { Plus_Jakarta_Sans } from 'next/font/google'
const PlusJakartaSans = Plus_Jakarta_Sans({subsets: ['latin']})

const variants = {
    regular: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
}
const themes = {
  'default': 'text-inherit',
  'gray': 'text-gray',
  "blueGreen500": 'bg-clip-text bg-blue-green-500 text-transparent',
  "blueGreen600": 'bg-clip-text bg-blue-green-600 text-transparent',
  "blueGreen700": 'bg-clip-text bg-blue-green-700 text-transparent'
}
const sizes = {
    xl: 'text-4xl leading-[44px]',
    lg: 'text-[32px] leading-10',
    md: 'text-[28px] leading-9',
    ms: 'text-base leading-9',
    sm: 'text-sm leading-6',
    xs: 'text-[12px] leading-8',
    '2xs': 'text-[10px] leading-8',
    default: 'text-base leading-8'
}
interface Props {
    children: React.ReactNode
    size?: 'xl' | 'lg' | 'md' | 'ms' | 'sm' | 'xs' | 'default'
    variant?: 'regular' | 'medium' | 'semibold' | 'bold'
    theme?: 'default' | 'gray' | 'blueGreen500' | 'blueGreen600' | 'blueGreen700'
    className?: string
}
const Typography = ({children, size='default', variant='regular', className, theme='default'}: Props) => {
  return (
    <span className={cn(
        sizes[size],
        variants[variant],
        themes[theme],
        PlusJakartaSans.className,
        className
    )
    }>{children}</span>
  )
}

export default Typography