import React from 'react'
import Sidebar from './layout/sidebar'
import Headers from './layout/header'
import Prompt from './prompt'
import Main from './main'

const Dashboard = () => {
    return (
        <main className='p-3 min-h-screen flex w-full gap-3 relative'>
            <Sidebar />
            <div className='flex flex-col w-full items-end'>
                <Headers />
                <Main />
            </div>
            <Prompt />
        </main>
    )
}

export default Dashboard