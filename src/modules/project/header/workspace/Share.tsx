'use client'
import React, { useState } from 'react'
{
  /* Compoents */
}
import { Button } from '@/components/elements/Button'
import ModalLayer from '@/components/elements/ModalLayer'
import ShareSpace from './ShareSpace'
import { Share as ShareIcon} from '@/utils/icons'

const Share = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant='grayoutline'
        className='border-transparent'
      >
        <ShareIcon className='dark:text-gray-200 text-gray-800' />
      </Button>
      {isOpen ? (
        <ModalLayer setIsOpen={setIsOpen}>
          <ShareSpace />
        </ModalLayer>
      ) : null}
    </>
  )
}

export default Share
