
import Sidebar from '@/modules/sidebar'
import React, { PropsWithChildren } from 'react'

const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <main className='bg-noble-black-700 min-h-screen flex w-full gap-3 relative'>
            <Sidebar />
            <div className='w-full flex items-start justify-end'>
                <main className="w-full md:w-[79%] p-2">
                    {children}
                </main>
            </div>
        </main>
    )
}

export default MainLayout