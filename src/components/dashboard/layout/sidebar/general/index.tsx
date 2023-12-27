import React from 'react'
import { IMenuItems } from './items'
import Typography from '@/components/ui/Typography'
import Image from 'next/image'

const General = () => {
    return (
        <div className='py-4'>
            {IMenuItems.map((item) => (
                <>
                    {item.heading ? (
                        <Typography variant='semibold' className='text-[12px] text-gray-light'>{item.heading}</Typography>
                    ) : (
                        <div className='py-4 flex justify-between items-center'>
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
                </>
            ))}
        </div>
    )
}

export default General