import React from 'react'
{
  /* Images */
}
import Image from 'next/image'
import microphone from '@/assets/icons/microphone.svg'

const VoiceOver = () => {
  return (
    <div>
      <Image src={microphone} alt='microphone' width={24} height={24} />
    </div>
  )
}

export default VoiceOver
