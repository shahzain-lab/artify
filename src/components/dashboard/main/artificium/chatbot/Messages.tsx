import React from 'react'
import Message from './Message'
import { chats } from '@/components/dashboard/lib/chatDB'
import { IMessage } from '../../IMessage.interface'
import Prompt from '@/components/dashboard/prompt'

const Messages = () => {
  return (
    <div className='p-1 flex flex-col gap-3 relative'>
        {chats.map((chat: IMessage) => (
            <Message key={chat.id} message={chat} />
        ))}
    </div>
  )
}

export default Messages