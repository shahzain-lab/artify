'use client'
import { IDropdownProps } from '@/interfaces/IElements.interface';
import { cn } from '@/lib/utils';
import { CheveronDown } from '@/utils/icons';
import React, { useState } from 'react';

const colors: { [k: string]: string } = {
  primary: "bg-theme-greenish text-slate-950",
  green: "bg-emerald-500 text-white",
  gray: "bg-noble-black-600 text-gray",
  warning: "bg-yellow-500 text-white",
  light: "bg-noble-black-400 text-white",
  destructive: "bg-red-500 text-white",
  secondary: "bg-slate-100 text-slate-900 ",
  blue: "bg-blue-700 hover:bg-blue-800 text-white focus:ring-2 focus:outline-none focus:ring-blue-300",
  ghost: "bg-slate-800 text-white",
  link: "text-blue-500 underline-offset-4 underline ",
  white: 'text-gray-900 bg-white',
  black: 'text-white bg-black',
  outline: 'bg-inherit border border-gray-300 text-white'
}

const Dropdown: React.FC<IDropdownProps> = ({ title, classNames, children, options, Icon, color }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn(
      "relative inline-block text-left",
      classNames?.base
    )}>
      <button
        type="button"
        className={cn(
          `inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500`,
          colors[color || 'white'],
          classNames?.button
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {/* Add dropdown icon here */}
        {typeof Icon === 'boolean' ? (
          <CheveronDown
            color='#fff'
            className={`ml-2 h-5 w-5 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
          />
        ):Icon?(
          <>{Icon}</>
        ):null}
      </button>
      {isOpen && (
        <div className="origin-top-right absolute -left-5 md:left-0 mt-2 w-56 z-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className={cn(
            "py-1",
            classNames?.items
          )} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {/* Dropdown items */}
            {options?.map((option, i) => (
              <a
                key={i}
                href="#"
                className={cn(
                  "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                  classNames?.item
                )}
                role="menuitem">
                {option}
              </a>
            ))}
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
