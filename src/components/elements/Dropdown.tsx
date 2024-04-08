'use client'
import React, { useState } from 'react'
import { IDropdownProps, TColor } from '@/interfaces/IElements.interface'
{
  /* Utils */
}
import { cn } from '@/lib/utils'
import { CheveronDown } from '@/utils/icons'

const getColor = (color: TColor, type: 'base' | 'button' | 'item' | 'items' | 'icon') => {
  switch (color) {
    case 'primary':
      return type === 'base'
        ? ''
        : type === 'button'
          ? 'bg-theme-greenish text-slate-950'
          : type === 'item'
            ? 'hover:bg-slate-100'
            : type === 'items'
              ? 'bg-white'
              : '#000'
    case 'blue':
      return type === 'base'
        ? ''
        : type === 'button'
          ? 'bg-blue-700 text-white'
          : type === 'item'
            ? 'hover:bg-slate-700'
            : type === 'items'
              ? 'bg-slate-800 text-white'
              : '#fff'
    case 'destructive':
      return type === 'base'
        ? ''
        : type === 'button'
          ? 'bg-red-500 text-white'
          : type === 'item'
            ? 'hover:bg-slate-700'
            : type === 'items'
              ? 'bg-slate-800 text-white'
              : '#fff'
    case 'ghost':
      return type === 'base'
        ? ''
        : type === 'button'
          ? 'bg-slate-800 text-white'
          : type === 'item'
            ? 'hover:bg-slate-700'
            : type === 'items'
              ? 'bg-slate-800 text-white'
              : '#fff'
    case 'gray':
      return type === 'base'
        ? ''
        : type === 'button'
          ? 'bg-noble-black-600 text-gray'
          : type === 'item'
            ? 'hover:bg-slate-700'
            : type === 'items'
              ? 'bg-slate-800 text-white'
              : '#fff'
    case 'green':
      return type === 'base'
        ? ''
        : type === 'button'
          ? 'bg-emerald-500 text-white'
          : type === 'item'
            ? 'hover:bg-slate-700'
            : type === 'items'
              ? 'bg-slate-800 text-white'
              : '#fff'
    case 'light':
      return type === 'base'
        ? ''
        : type === 'button'
          ? 'bg-noble-black-400 text-white'
          : type === 'item'
            ? 'hover:bg-slate-700'
            : type === 'items'
              ? 'bg-slate-800 text-white'
              : '#fff'
    case 'secondary':
      return type === 'base'
        ? ''
        : type === 'button'
          ? 'bg-slate-100 text-slate-900'
          : type === 'item'
            ? 'hover:bg-slate-700'
            : type === 'items'
              ? 'bg-slate-800 text-white'
              : '#000'
    case 'warning':
      return type === 'base'
        ? ''
        : type === 'button'
          ? 'bg-yellow-500 text-white'
          : type === 'item'
            ? 'hover:bg-slate-700'
            : type === 'items'
              ? 'bg-slate-800 text-white'
              : '#fff'
  }
}

const Dropdown: React.FC<IDropdownProps> = ({ title, classNames, children, options, Icon, color = 'ghost' }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={cn('relative inline-block  text-left dropdown-element', getColor(color, 'base'), classNames?.base)}>
      <button
        type='button'
        className={cn(
          `inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500`,
          getColor(color, 'button'),
          classNames?.button
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {/* Add dropdown icon here */}
        {typeof Icon === 'boolean' ? (
          <CheveronDown
            className={`${getColor(color, 'icon')} ml-2 h-5  w-5 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
          />
        ) : Icon ? (
          <>{Icon}</>
        ) : null}
      </button>
      {isOpen && (
        <div className='origin-top-right absolute -left-5 md:left-0 mt-2 z-20 rounded-md shadow-lg ring-1 ring-black ring-opacity-5'>
          <div
            className={cn('py-1 block text-sm text-gray-700  rounded-xl', getColor(color, 'items'), classNames?.items)}
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='options-menu'
          >
            {/* Dropdown items */}
            {options?.map((option, i) => (
              <a
                key={i}
                href='#'
                className={cn('py-2 px-4 block rounded-lg', getColor(color, 'item'), classNames?.item)}
                role='menuitem'
              >
                {option}
              </a>
            ))}
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
