import React from 'react'
import { IEmoji } from '@/interfaces/IApp.interface'

interface EmojiListProps {
  emoji: IEmoji | null
}

const EmojiList: React.FC<EmojiListProps> = ({ emoji }) => {
  const emojiList: IEmoji[] = [
    { emoji: '👍', description: 'Face with Tears of Joy' },
    { emoji: '🙂', description: 'Smiling Face with Heart-Eyes' },
    { emoji: '🚀', description: 'Smiling Face' }
  ]

  if (emoji) {
    emojiList.push(emoji)
  }

  return (
    <div className='flex'>
      {emojiList.map((emoji, index) => (
        <div
          key={index}
          className='rounded-full border-2 shadow-xl px-[1px] border-gray-100 dark:border-noble-black-800 hover:text-md hover:z-30 -ml-2 bg-gray-300 dark:bg-noble-black-600'
          aria-label={emoji.description}
        >
          {emoji.emoji}
        </div>
      ))}
      <div className='rounded-full flex justify-center items-center px-2 text-black dark:text-noble-black-200 border-2 shadow-xl border-gray-100 dark:border-noble-black-800 text-[12px] hover:z-30 -ml-1.5 bg-gray-300 dark:bg-noble-black-600'>
        {emoji ? 5 + 1 : 5}
      </div>
    </div>
  )
}

export default EmojiList
