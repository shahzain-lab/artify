'use client'
import React, { useEffect, useState } from 'react'
{
  /* Components */
}
import Messages from '../artificium/chatbot/Messages'
import Prompt from '../../prompt'
import Channels from './channels'
{
  /* Utils */
}
import { DoubleLeft, DoubleRight } from '@/utils/icons'
import { preventScroll } from '@/lib/preventScroll'

const ChatRoom = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      preventScroll()
    }
    // Cleanup function to restore scroll position when the modal is closed
    return () => {
      preventScroll(true)
    }
  }, [isOpen])

  return (
    <div className='flex gap-2'>
      <div>
        <Messages />
        <Prompt className='w-full md:w-[53%] left-0 md:left-[22%]' />
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden fixed px-0.5 z-30 top-[40%] dark:bg-noble-black-600 bg-white py-10 rounded-s-[12px] ${isOpen ? 'right-[80%]' : 'right-0'} `}
      >
        {isOpen ? <DoubleRight /> : <DoubleLeft />}
      </div>
      {isOpen && <div className='w-full z-20 h-screen fixed top-0 left-0 bg-bg-layer backdrop-blur-sm'></div>}
      <Channels isOpen={isOpen} />
    </div>
  )
}

export default ChatRoom
