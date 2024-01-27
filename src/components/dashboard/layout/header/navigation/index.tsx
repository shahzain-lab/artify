'use client'
import React from 'react'
import { menuItems } from './items'
import RoutePanel from '../../RoutePanel'
import { setPanalRoute } from '@/store/slices/navigationSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'

const Navigation = () => {
  const dispatch = useDispatch()
  const handleChange = (i: number) => {
    dispatch(setPanalRoute(i))
  }
  return (
    <RoutePanel
      className='px-6'
      menuItems={menuItems}
      setChange={handleChange}
    />
  )
}

export default Navigation