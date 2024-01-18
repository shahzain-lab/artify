import React from 'react'
import { IMenuItems } from './items'
import PanalRoute from './PanalRoute'

const Navigation = () => {

  return (
    <div className='px-6 flex items-center gap-6'>
      {IMenuItems.map((item, i) => (
        <PanalRoute 
          key={i}
          route={item}  
          index={i} />
      ))}
    </div>
  )
}

export default Navigation