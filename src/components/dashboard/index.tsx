import React from 'react'
import Sidebar from './layout/sidebar'
import Headers from './layout/header'
import Prompt from './prompt'
import Starter from './main/starter'
import Artificium from './main/artificium'
const Dashboard = () => {
    return (
        <main className='p-3 min-h-screen flex w-full gap-3 relative'>
            <Sidebar />
            <div className='flex flex-col w-full items-end'>
                <Headers />
                <div className='w-[79%] pb-28'>
                 {/* <Starter /> */}
                 <Artificium />
                </div>
            </div>
            <Prompt />
        </main>
    )
}

export default Dashboard