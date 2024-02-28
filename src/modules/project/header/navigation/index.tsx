'use client'
import React from 'react'
import { menuItems } from './items'
import { useDispatch } from 'react-redux'
import { setPanalRoute } from '@/model/store/slices/navigationSlice'
import RoutePanel from '../RoutePanel'

const Navigation = () => {
  const dispatch = useDispatch()
  const handleChange = (i: number) => {
    dispatch(setPanalRoute(i))
  }
  return (
    <RoutePanel
      className='md:px-6 px-2 md:overflow-x-auto md:overflow-y-auto overflow-x-scroll overflow-y-hidden'
      menuItems={menuItems}
      setChange={handleChange}
    />
  )
}

export default Navigation