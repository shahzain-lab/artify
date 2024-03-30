import { cn } from '@/lib/utils'
import React from 'react'

interface ChipProps {
  color?: 'primary' | 'green' | 'warning' | 'destructive' | 'purple' | 'blue'
  content?: string | React.ReactNode
  className?: string
  variant?: string
}

const Chip: React.FC<ChipProps> = ({ color, content, className }) => {
  const getVariantStyles = () => {
    switch (color) {
      case 'primary':
        return 'text-theme-greenish bg-[#b7f09c43]'
      case 'green':
        return 'text-[#37ff70] bg-[#37ff7041]'
      case 'warning':
        return 'text-[#f9e93e] bg-[#f5e63e3f]'
      case 'destructive':
        return 'text-[#f93e44] bg-[#f93e4446]'
      case 'purple':
        return 'text-[#f93eb7] bg-[#f93eb73c]'
      case 'blue':
        return 'text-[#3e3ef9] bg-[#3e3ef939]'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <span
      className={cn(
        `inline-flex items-center px-2 py-1 rounded-lg text-[12px] font-medium ${getVariantStyles()}`,
        className
      )}
    >
      {content}
    </span>
  )
}

export default Chip
