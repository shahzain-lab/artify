import React from 'react'
import Image from 'next/image'
{
  /* Utils */
}
import { cn } from '@/lib/utils'
{
  /* Image */
}
import Google from '@/assets/icons/google.svg'
import Apple from '@/assets/icons/apple.svg'

interface Props {
  variant: 'GOOGLE' | 'APPLE'
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  children?: React.ReactNode
  onClick?: () => void
}

const SocialButton = ({ variant, className, type = 'button', children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(
        'flex items-center gap-2 text-noble-black-400 text-sm md:text-base justify-center dark:bg-[#1A1D21] bg-gray-200 px-6 py-2 rounded-[12px]',
        className
      )}
    >
      <Image src={variant === 'GOOGLE' ? Google : Apple} alt={variant} width={24} height={24} />
      {children}
    </button>
  )
}

export default SocialButton
