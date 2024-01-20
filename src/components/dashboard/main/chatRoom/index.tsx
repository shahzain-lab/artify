import React from 'react'
import Messages from '../artificium/chatbot/Messages'
import Participant from './participants'

const ChatRoom = () => {
  return (
    <div className='flex gap-2'>
        <Messages />
        <Participant />
    </div>
  )
}

export default ChatRoom