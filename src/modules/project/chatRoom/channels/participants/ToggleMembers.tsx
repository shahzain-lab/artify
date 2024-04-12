import React from 'react'
import groupGray from '@/assets/icons/group-gray.svg'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { Chat, GroupUser } from '@/utils/icons'

interface Props {
  toggleBar: number
  setToggleBar: React.Dispatch<React.SetStateAction<number>>
}

const ToggleMembers = ({ toggleBar, setToggleBar }: Props) => {
  const { theme } = useTheme() 
  return (
    <div className={cn(
      'fixed bottom-5 z-10  flex items-center shadow-lg border-[2px] rounded-xl',
      theme === 'dark' ? 'bg-noble-black-700 border-noble-black-600' : 'bg-white border-gray-300'
  )}>
      <div
        onClick={() => setToggleBar(0)}
        className={`cursor-pointer px-6 py-4 flex items-center gap-2  ${toggleBar === 0 ? `rounded-xl text-theme-greenish ${theme === 'dark' ? 'bg-noble-black-600' : 'bg-white border shadow-md text-gray-800'}` : 'text-gray-light-100'}`}
      >
        <Chat className={cn(
          'w-5 h-5',
          toggleBar === 0 ? 'text-theme-greenish' : 'text-black'
        )} />
        {/* <Image src={chatPrimary} alt='chatPrimary' width={24} height={24} /> */}
        <span>Chats</span>
      </div>
      <div
        onClick={() => setToggleBar(1)}
        className={`cursor-pointer px-6 py-4 flex items-center gap-2  ${toggleBar === 1 ? `rounded-xl text-theme-greenish ${theme === 'dark' ? 'bg-noble-black-600' : 'bg-white border shadow-md text-gray-800'}` : 'text-gray-light-100'}`}
      >
        <GroupUser className={cn(
          // 'w-5 h-5',
          toggleBar === 1 ? 'text-theme-greenish' : 'text-black'
        )} />
        {/* <Image src={groupGray} alt='groupGray' width={24} height={24} /> */}
        <span>Members</span>
      </div>
    </div>
  )
}

export default ToggleMembers
