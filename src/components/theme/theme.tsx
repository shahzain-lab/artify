import React from 'react'
import { useTheme } from 'next-themes'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()
  
  const toggleTheme = ()=>{
        console.log(theme);
        if(theme=='dark'){
           setTheme('light') 
        }else{
            setTheme('dark')
        }
    }
  return (
    <div>
      <button onClick={toggleTheme}>Toogle Mode</button>
    </div>
  )
};

export default ThemeChanger

