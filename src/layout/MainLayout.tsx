
import AdvancedDropdown from '@/components/elements/AdvancedDropdown'
import { Button } from '@/components/elements/Button'
import Ping from '@/components/elements/Ping'
import Sidebar from '@/modules/sidebar'
import { Notification } from '@/utils/icons'
import React, { PropsWithChildren } from 'react'

const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <main className='bg-noble-black-700 min-h-screen flex w-full gap-3 relative'>
            <Sidebar />
            <div className='w-full flex flex-col items-end justify-start'>
                <div className='bg-noble-black-800 w-full flex py-2 justify-end items-center px-5'>
                    <AdvancedDropdown
                       header={{
                        title: 'Notifications',
                        tag: '5'
                       }}
                       list={[
                        {title: 'Hello', desc: ''},
                        {title: 'Hello', desc: ''},
                        {title: 'Hello', desc: ''}
                       ]}
                       footer={<Button>See All</Button>}
                    >
                        <Ping>
                            <Notification className='text-[#ccc] h-10 w-7' />
                        </Ping>
                    </AdvancedDropdown>
                </div>
                <main className="w-full md:w-[79%] p-2">
                    {children}
                </main>
            </div>
        </main>
    )
}

export default MainLayout