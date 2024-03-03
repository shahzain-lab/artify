import Typography from '@/components/elements/Typography'
import { formatTextMessage } from '@/lib/formatTextMessage'
import React from 'react'

interface Props {
    message: string
}

const TextMessage = ({message}: Props) => {
    
  return (
    <div>
        <Typography variant='medium' className='text-gray-light-100 text-[12px] md:text-auto'>
           <span dangerouslySetInnerHTML={{__html: formatTextMessage(message)}}></span> 
        </Typography>
    </div>
  )
}

export default TextMessage