import React from 'react'
import microphone from '@/assets/icons/microphone.svg'
import Image from 'next/image'

const VoiceOver = () => {
    return (
        <div>
            <Image
                src={microphone}
                alt='microphone'
                width={24}
                height={24}
            />
        </div>
    )
}

export default VoiceOver