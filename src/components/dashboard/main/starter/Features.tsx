import React from 'react'
import arrowRightGray from '@/assets/icons/arrow-right-gray.svg'
import Image from 'next/image'
import Typography from '@/components/ui/Typography'
import { features } from '../../lib/AI'
import { IFeature } from '../IMessage.interface'

const Features = () => {
    
    return (
        <div className='flex items-start gap-10'>
            {features.map((feat: IFeature) => (
                <div className='flex flex-col items-center gap-2 mt-5'>
                    <span className='bg-glass-fill py-[13px] px-1 rounded-[100%]'>
                        <Image
                            src={feat.src}
                            alt={feat.title}
                            width={45}
                            height={45}
                            className='-mb-5'
                        />
                    </span>
                    <Typography variant='semibold' className='text-lg'>{feat.title}</Typography>
                    <ul className='flex flex-col gap-2'>
                        {feat.tools.map((asst) => (
                            <li className='bg-glass-fill shadow-sm p-4 flex justify-between items-center gap-16 rounded-[12px]' key={asst.title}>
                                <Typography variant='semibold' size='sm'>{asst.title}</Typography>
                                <Image
                                    src={arrowRightGray}
                                    alt='arrowRightGray'
                                    width={16}
                                    height={16}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Features