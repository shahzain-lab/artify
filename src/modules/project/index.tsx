'use client'
import React from 'react'
import Starter from './starter'
import Artificium from './artificium'
import { useSelector } from 'react-redux'
import ChatRoom from './chatRoom'
import Library from './library'
import { RootState } from '@/model/store'
import Headers from './header'
import MainLayout from '@/layout/MainLayout'

const Project = () => {
    const panalRoute = useSelector((state: RootState) => state.navigation.panalRoute)

    return (
        <MainLayout>
            <div className='flex flex-col w-full items-end'>
                <Headers />
                <div className='w-full md:w-[79%] pb-28 relative'>
                    {panalRoute === 0 ? <Starter /> : panalRoute === 1 ? <Artificium /> : panalRoute === 2 ? <ChatRoom /> : <Library />}
                </div>
            </div>
        </MainLayout>
    )
}

export default Project