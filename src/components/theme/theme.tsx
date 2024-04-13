import React from 'react'
import { useTheme } from 'next-themes'
import { DayLight, Moon } from '@/utils/icons';
import { Button } from '../elements/Button';

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme == 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  return (
    <button onClick={toggleTheme}>{theme === 'dark' ? <Moon className='text-[#ccc] w-6 h-6' /> : <DayLight className='text-gray-600 w-5 h-5' />}</button>
  )
};

export default ThemeChanger

