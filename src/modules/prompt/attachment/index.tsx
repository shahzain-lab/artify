import React from 'react'
{
  /* Images */
}
import Image from 'next/image'
import attachment from '@/assets/icons/attachment.svg'

const Attachment = () => {
  return (
    <div>
      <Image src={attachment} alt='attachment' width={24} height={24} />
    </div>
  )
}

export default Attachment
