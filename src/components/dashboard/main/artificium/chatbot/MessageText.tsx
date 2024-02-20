import { formatTextMessage } from '@/components/dashboard/lib/formatTextMessage'
import Typography from '@/components/ui/Typography'
import React from 'react'

interface Props {
    message: string
}

const TextMessage = ({message}: Props) => {
    
  return (
    <div>
        <Typography variant='medium' className='text-gray text-[12px] md:text-auto'>
           <span dangerouslySetInnerHTML={{__html: formatTextMessage(message)}}></span> 
        </Typography>
    </div>
  )
}

export default TextMessage