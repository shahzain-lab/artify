import React, { FC, PropsWithChildren } from 'react'

const Ping: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='relative'>
            <p className='absolute right-0 top-1'>
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative flex justify-center items-center rounded-full h-3 w-3 text-[10px] bg-sky-500"></span>
                </span>
            </p>
            {children}
        </div>
    )
}

export default Ping