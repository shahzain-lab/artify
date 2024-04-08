import React from 'react'
import { useTheme } from 'next-themes'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()
  
  const chang = ()=>{
        console.log(theme);
        if(theme=='dark'){
           setTheme('light') 
        }else{
            setTheme('dark')
        }
    }
  return (
    <div>
      {/* The current theme is: {theme} */}
      <button onClick={chang}>Toogle Mode</button>
    </div>
  )
};

export default ThemeChanger

