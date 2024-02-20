'use client'
import React from 'react'
import Starter from './starter'
import Artificium from './artificium'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import ChatRoom from './chatRoom'
import Library from './library'

const Main = () => {
    const panalRoute = useSelector((state: RootState) => state.navigation.panalRoute)
    
    return (
        <div className='w-full md:w-[79%] pb-28 relative'>
            {panalRoute === 0 ? <Starter /> : panalRoute === 1 ? <Artificium /> : panalRoute === 2 ? <ChatRoom /> : <Library />}
        </div>
    )
}

export default Main