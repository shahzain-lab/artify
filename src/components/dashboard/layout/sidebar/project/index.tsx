import React from 'react'
import { IMenuItems } from './items'
import Typography from '@/components/ui/Typography'
import plusCircle from '@/assets/icons/plus-circle.svg'
import Image from 'next/image'

const Project = () => {
    const active = 1;
    return (
        <div className='py-4'>
            {IMenuItems.map((item, i) => (
                <div key={i}>
                    {item.heading ? (
                        <div className='mb-5'>
                            <Typography variant='semibold' className='text-[12px] text-gray-light'>{item.heading}</Typography>
                        </div>
                    ) : (
                        <div className={`${active === i ? 'bg-glass-fill' : ''} rounded-[8px] my-1 py-4 flex justify-between items-center`}>
                            <div className=' flex items-center'>
                                {item.icon ? (
                                    <Image
                                        src={item.icon}
                                        alt={item.title || ''}
                                        width={40}
                                        height={40}
                                        className='-mb-5'
                                    />
                                ) : null}
                                <Typography variant='semibold' className='text-sm text-gray-200'>{item.title}</Typography>
                            </div>
                            {item.tag ? (
                                <Image
                                    src={item.tag}
                                    alt={item.title || ''}
                                    width={40}
                                    height={40}
                                    className=''
                                />
                            ) : null}
                        </div>
                    )}
                </div>
            ))}
            <div className='text-gray-light flex items-center gap-2 px-2 my-3'>
                <Image 
                  src={plusCircle}
                  alt='plusCircle'
                  width={22}
                  height={22}
                />
                <Typography variant='semibold' className='text-sm'>Add new project</Typography>
            </div>
        </div>
    )
}

export default Project