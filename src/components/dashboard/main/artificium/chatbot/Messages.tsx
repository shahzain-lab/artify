import React from 'react'
import Message from './Message'
import { chats } from '@/components/dashboard/lib/chatDB'
import { IMessage } from '../../IMessage.interface'

const Messages = () => {
  return (
    <div className='p-1 flex flex-col gap-3'>
        {chats.map((chat: IMessage) => (
            <Message message={chat} />
        ))}
    </div>
  )
}

export default Messages