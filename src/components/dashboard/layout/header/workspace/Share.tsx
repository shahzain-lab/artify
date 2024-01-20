'use client'
import { Button } from '@/components/ui/Button'
import ModalLayer from '@/components/ui/ModalLayer'
import Image from 'next/image'
import React, { useState } from 'react'
import ShareSpace from './ShareSpace'
import share from '@/assets/icons/share.svg'

const Share = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <Button
              onClick={() => setIsOpen(true)}
                className='bg-transparent text-sm font-semibold text-gray-light flex gap-1'>
                <Image
                    src={share}
                    alt='share'
                    width={20}
                    height={20}
                />
                Share
            </Button>
            {isOpen ? (
            <ModalLayer setIsOpen={setIsOpen}>
                <ShareSpace />
            </ModalLayer>
            ):null}
        </>
    )
}

export default Share