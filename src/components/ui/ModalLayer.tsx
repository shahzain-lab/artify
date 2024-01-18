import { cn } from '@/lib/utils'
import React from 'react'

const ModalLayer = ({ children }: React.PropsWithChildren) => {
    return (
        <div className={cn(
            'fixed top-0 left-0 flex justify-center items-center w-full h-screen',
            'bg-bg-layer backdrop-blur-sm z-10'
        )}>
            <div className='shadow-xl-inset bg-glass-modal p-10 rounded-2xl w-[50%]'>
               {children}
            </div>
        </div>
    )
}

export default ModalLayer