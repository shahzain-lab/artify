import React from 'react'
import { IFeature } from '../../IMessage.interface'
import Image from 'next/image'
import Typography from '@/components/ui/Typography'

interface Props {
    features: IFeature[]
}

const MessageFeatures = ({features}: Props) => {
  return (
    <div className='flex items-center gap-3'>
        {features.map((feat, i) => (
            <div key={i} className='flex flex-col items-center p-6 gap-2 mt-5 bg-glass-fill rounded-[12px]'>
             <span className='bg-glass-fill py-[13px] px-1 rounded-[100%]'>
                 {feat.Icon}
             </span>
             <Typography variant='semibold' size='ms' className=''>{feat.title}</Typography>
            </div>
        ))}
    </div>
  )
}

export default MessageFeatures