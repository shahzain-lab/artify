import React from 'react'

interface TooltipProps {
  children: React.ReactNode
  content: React.ReactNode | string
}

const Tooltip = ({ children }: TooltipProps) => {
  return (
    <div className='relative group'>
      {children}
      <div
        id='tooltip-default'
        role='tooltip'
        className='absolute z-10 group-hover:visible invisible group-hover:opacity-100 opacity-0 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm dark:bg-gray-700'
      >
        Tooltip content
        <div className='tooltip-arrow' data-popper-arrow></div>
      </div>
    </div>
  )
}

export default Tooltip
