import { IEmoji } from '@/interfaces/IApp.interface';
import React from 'react';

interface EmojiListProps {
    emoji: IEmoji | null
}

const EmojiList: React.FC<EmojiListProps> = ({ emoji }) => {
    const emojiList: IEmoji[] = [
        { emoji: '👍', description: 'Face with Tears of Joy' },
        { emoji: '🙂', description: 'Smiling Face with Heart-Eyes' },
        { emoji: '🚀', description: 'Smiling Face' },
    ];
    if(emoji) {
        emojiList.push(emoji)
    }
    
    return (
        <div className='flex'>
            {emojiList.map((emoji, index) => (
                // <Tooltip key={index} content={emoji.description}>
                <div key={index}
                    className='rounded-full border-2 shadow-xl px-[1px] border-noble-black-800 hover:text-md hover:z-30 -ml-2 bg-noble-black-600'
                    aria-label={emoji.description}
                >
                    {emoji.emoji}
                </div>
                // </Tooltip>
            ))}
            <div
                className='rounded-full flex justify-center items-center px-2 text-noble-black-200 border-2 shadow-xl border-noble-black-800 text-[12px] hover:z-30 -ml-1.5 bg-noble-black-600'>
                {emoji ? 5+1 : 5}
            </div>
        </div>
    );
};

export default EmojiList;
