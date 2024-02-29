import React from 'react'
import Message from './Message'
import { chats } from '@/lib/chatDB'
import { IMessage } from '../../../../interfaces/IMessage.interface'

const Messages = () => {
  return (
    <div className='p-1 flex flex-col gap-5 relative'>
        {chats.map((chat: IMessage) => (
            <Message key={chat.id} message={chat} />
        ))}
    </div>
  )
}

export default Messages