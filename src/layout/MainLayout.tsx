
import Sidebar from '@/modules/sidebar'
import React, { PropsWithChildren } from 'react'

const MainLayout = ({children}: PropsWithChildren) => {
    return (
        <main className='p-2 md:p-3 min-h-screen flex w-full gap-3 relative'>
            <Sidebar />
            {children}
        </main>
    )
}

export default MainLayout