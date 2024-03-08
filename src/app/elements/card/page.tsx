import React from 'react'
import VerticalCards from './Vertical'
import Horizontal from './Horizontal'

const page = () => {
  return (
    <div className='flex flex-col gap-4'>
      <VerticalCards />
      <Horizontal />
    </div>
  )
}

export default page