import React from 'react'
import Messages from '../artificium/chatbot/Messages'
import Participant from './channels/participants'
import Prompt from '../../prompt'
import Channels from './channels'

const ChatRoom = () => {
  return (
    <div className='flex gap-2'>
      <div>
        <Messages /> 
        <Prompt className='w-[57%] left-[22%]' />
      </div>
        <Channels />
    </div>
  )
}

export default ChatRoom