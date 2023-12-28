import React from 'react'
import attachment from '@/assets/icons/attachment.svg'
import Image from 'next/image'

const Attachment = () => {
  return (
    <div>
        <Image 
          src={attachment}
          alt='attachment'
          width={24}
          height={24}
        />
    </div>
  )
}

export default Attachment