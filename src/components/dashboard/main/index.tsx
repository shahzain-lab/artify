'use client'
import React from 'react'
import Starter from './starter'
import Artificium from './artificium'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import ChatRoom from './chatRoom'

const Main = () => {
    const panalRoute = useSelector((state: RootState) => state.navigation.panalRoute)
    
    return (
        <div className='w-[79%] pb-28 h-[60vh] no-scrollbar relative overflow-y-scroll'>
            {panalRoute === 0 ? <Starter /> : panalRoute === 1 ? <Artificium /> : <ChatRoom />}
        </div>
    )
}

export default Main