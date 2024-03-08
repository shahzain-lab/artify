'use client'
import { CheveronDown } from '@/utils/icons';
import React, { useState } from 'react';

interface DropdownProps {
  size?: string;
  theme?: string;
  variant?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ size, theme, variant }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownSize = size ? `btn-${size}` : '';
  const dropdownTheme = theme ? `btn-${theme}` : '';
  const dropdownVariant = variant ? `btn-${variant}` : '';

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className={`inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${dropdownSize} ${dropdownTheme} ${dropdownVariant}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        Dropdown
        {/* Add dropdown icon here */}
        <CheveronDown
           color='#000'
           className={`ml-2 h-5 w-5 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="origin-top-right absolute -left-5 md:left-0 mt-2 w-56 z-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {/* Dropdown items */}
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Option 1
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Option 2
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
