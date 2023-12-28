import React from 'react'
import Sidebar from '../layout/sidebar'
import Headers from '../layout/header'
import Prompt from '../prompt'

const Dashboard = () => {
    return (
        <main className='p-3 min-h-screen flex w-full gap-3 relative'>
            <Sidebar />
            <Headers />
            <Prompt />
        </main>
    )
}

export default Dashboard