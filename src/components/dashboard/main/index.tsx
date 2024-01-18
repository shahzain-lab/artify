'use client'
import React from 'react'
import Starter from './starter'
import Artificium from './artificium'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

const Main = () => {
    const panalRoute = useSelector((state: RootState) => state.navigation.panalRoute)
    
    return (
        <div className='w-[79%] pb-28'>
            {panalRoute === 0 ? <Starter /> : <Artificium />}
        </div>
    )
}

export default Main