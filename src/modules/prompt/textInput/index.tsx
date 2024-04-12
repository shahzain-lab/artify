'use client'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/model/store'
{
  /* Components */
}
import Input from '@/components/elements/Input'
import Image from 'next/image'
import { IChannel, channelGroups } from '@/modules/project/chatRoom/channels'
import { IUser } from '@/interfaces/app.interface'
{
  /* Utils */
}
import { extractMentions } from '../utils'

const TextInput = () => {
  const project = useSelector((state: RootState) => state.workspace.project)
  const [inputValue, setInputValue] = useState('')
  const [mentions, setMentions] = useState<{ symbol: string; value: string }[]>([])
  const [showList, setShowList] = useState<boolean>(false)

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
    const cursorPosition = e.target.selectionStart || 0
    const newMentions = extractMentions(value, cursorPosition)
    setMentions(newMentions)
    const splitText = `${inputValue}${value}`?.split(' ')
    if (splitText[splitText?.length - 1]?.includes('@') || splitText[splitText?.length - 1]?.includes('#')) {
      setShowList(true)
    } else {
      setShowList(false)
    }
  }
  const filterList = (query: string, list: IUser[] | IChannel[]) => {
    return list.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
  }
  const handleSelect = (mention: { symbol: string; value: string }) => {
    const lastMention = mentions[mentions.length - 1]
    if (!lastMention) return
    const mentionIndex = inputValue.lastIndexOf(`${lastMention.symbol}${lastMention.value}`)
    if (mentionIndex !== -1) {
      const newValue =
        inputValue.substring(0, mentionIndex) +
        `${mention.symbol}${mention.value}` +
        inputValue.substring(mentionIndex + lastMention.value.length + 1)
      setInputValue(newValue)
      setShowList(false)
    }
  }

  function isUser(item: IUser | IChannel): item is IUser {
    return 'avatar' in item
  }

  const renderList = () => {
    const lastMention = mentions[mentions.length - 1]
    if (!lastMention) return null
    const query = lastMention.value.trim()
    const list = lastMention.symbol === '@' ? (project.members as IUser[]) : (channelGroups[1].channels as IChannel[])
    const filteredList = filterList(query, list)

    return (
      <ul className='absolute dark:bg-noble-black-800 bg-white bottom-[100%] border border-zinc-700 w-[250px] p-2 rounded-[12px]'>
        {filteredList.map((item, i) => (
          <li
            className={` py-2 flex items-center gap-2 cursor-pointer hover:bg-noble-black-600 text-sm ${i === filteredList?.length - 1 ? '' : 'border-b border-zinc-700'}`}
            key={i}
            onClick={() => handleSelect({ symbol: lastMention.symbol, value: item.name })}
          >
            {isUser(item) ? <Image src={item.avatar} alt='' width={30} height={30} /> : <item.Icon />}
            {item.name}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className='w-full relative'>
      {showList && renderList()}
      <Input
        className='dark:text-noble-black-300 dark:bg-transparent bg-white text-black border-none outline-none w-full'
        placeholder='You can ask me anything! I am here to help.'
        value={inputValue}
        onChange={handleTextChange}
      />
    </div>
  )
}

export default TextInput
