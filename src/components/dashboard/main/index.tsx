import React from 'react'
import Sidebar from '../layout/sidebar'
import Headers from '../layout/header'

const Dashboard = () => {
    return (
        <main className='p-3 min-h-screen flex w-full gap-3'>
            <Sidebar />
            <Headers />
        </main>
    )
}

export default Dashboard