import React from 'react'
{
  /* Images */
}
import chatPrimary from '@/assets/icons/chat-primary.svg'
import groupGray from '@/assets/icons/group-gray.svg'
import Image from 'next/image'

interface Props {
  toggleBar: number
  setToggleBar: React.Dispatch<React.SetStateAction<number>>
}

const ToggleMembers = ({ toggleBar, setToggleBar }: Props) => {
  return (
    <div className='fixed bottom-5 z-10 bg-noble-black-700 flex items-center shadow-lg border-[2px] rounded-xl border-noble-black-600 '>
      <div
        onClick={() => setToggleBar(0)}
        className={`cursor-pointer px-6 py-4 flex items-center gap-2  ${toggleBar === 0 ? 'bg-noble-black-600 rounded-xl text-white ' : 'text-gray-light-100'}`}
      >
        <Image src={chatPrimary} alt='chatPrimary' width={24} height={24} />
        <span>Chats</span>
      </div>
      <div
        onClick={() => setToggleBar(1)}
        className={`cursor-pointer px-6 py-4 flex items-center gap-2 ${toggleBar === 1 ? 'bg-noble-black-600 rounded-xl text-white' : 'text-gray-light-100'} `}
      >
        <Image src={groupGray} alt='groupGray' width={24} height={24} />
        <span>Members</span>
      </div>
    </div>
  )
}

export default ToggleMembers
