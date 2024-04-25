import React from 'react'
import Main from './main'
import Sidebar from './Sidebar'


function General() {
    return (
        <div className='w-full items-center md:items-start flex flex-col md:gap-1 gap-4 md:flex-row pt-1'>
            <div className='mx-3 md:mx-2 pt-2 md:ml-36 md:p-2 md:pl-20 lg:pl-28 xl:pl-40 2xl:pl-[13%]'>
                <Main />
            </div>
            <div className='w-full px-3 py-3 md:py-0 md:w-[340px] 2xl:w-[312px]'>
                <Sidebar />
            </div>
        </div>
    )
}

export default General