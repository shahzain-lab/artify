'use client'
import React, { FC } from 'react'
import Typography from '@/components/elements/Typography';
import Image from 'next/image';
import arrowRightGray from '@/assets/icons/arrow-right-gray.svg'
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { IFeature } from '@/interfaces/IMessage.interface';

interface Props {
    feature: IFeature
}

const FeatureItem: FC<Props> = ({ feature }) => {
    const { theme } = useTheme()
    return (
        <div className='flex flex-col items-center gap-2 mt-5'>
            <p className={cn(
                'p-2 md:p-3 rounded-[100%]',
                theme === 'dark' ? 'bg-glass-fill' : 'bg-white'
            )}>{feature.Icon}</p>
            <Typography variant='semibold' className='text-sm md:text-lg'>
                {feature.title}
            </Typography>
            <ul className='md:flex flex-col gap-2 hidden'>
                {feature.tools.map((asst) => (
                    <li
                        className={cn(
                            'shadow-md p-4 flex justify-between items-center gap-16 rounded-[12px]',
                            theme === 'dark' ? 'bg-glass-fill' : 'bg-white'
                        )}
                        key={asst.title}
                    >
                        <Typography variant='semibold' size='sm'>
                            {asst.title}
                        </Typography>
                        <Image src={arrowRightGray} alt='arrowRightGray' width={16} height={16} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FeatureItem