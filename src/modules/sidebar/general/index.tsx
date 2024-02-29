import React, { Fragment } from 'react'
import { IMenuItems } from './items'
import Image from 'next/image'
import Typography from '@/components/elements/Typography'

const General = () => {
    return (
        <div className='-mt-3'>
            {IMenuItems.map((item) => item.heading ? null : (
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
            ))}
        </div>
    )
}

export default General