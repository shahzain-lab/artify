import { Button } from '@/components/elements/Button'
import EmojiPicker, { Theme } from 'emoji-picker-react'
import React, { useState } from 'react'
import { IconPlus } from '../../utils/icons'

interface IEmojiEvent {
    emoji: string
    names: string[]
}

interface Props {
    setEmoji: any
}

const ReactEmojiPicker = ({ setEmoji }: Props) => {
    const [open, setOpen] = useState(false)
    const handleEmojiClick = (e: IEmojiEvent) => {
        setEmoji({emoji: e.emoji, description: e.names[0]})
        setOpen(false)
    }
    return (
        <Button onClick={() => setOpen(!open)} size={'sm'} variant={'gray'} className='font-semibold h-7 text-[12px]'>
            <div className='absolute md:static left-0 z-50'>
                <EmojiPicker
                open={open}
                theme={Theme.DARK}
                onEmojiClick={handleEmojiClick}
                width={330}
                />
            </div>
            <span><IconPlus /></span>
        </Button>
    )
}

export default ReactEmojiPicker