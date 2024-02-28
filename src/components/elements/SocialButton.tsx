import { cn } from '@/lib/utils'
import React from 'react'
import Google from '@/assets/icons/google.svg'
import Apple from '@/assets/icons/apple.svg'
import Image from 'next/image'

interface Props {
    variant: 'GOOGLE' | 'APPLE'
    className?: string
    type?: "button" | "submit" | "reset" | undefined
    children?: React.ReactNode
    onClick?: () => void
}

const SocialButton = ({variant, className, type="button", children, onClick}: Props) => {
  return (
    <button
        onClick={onClick}
        type={type}   
        className={cn(
            'flex items-center gap-2 text-gray-light text-base justify-center bg-[#1A1D21] px-6 py-2 rounded-[12px]',
            className
        )}>
            <Image 
               src={variant==='GOOGLE'?Google:Apple}
               alt={variant}
               width={24}
               height={24}
            />
            {children}
    </button>
  )
}

export default SocialButton