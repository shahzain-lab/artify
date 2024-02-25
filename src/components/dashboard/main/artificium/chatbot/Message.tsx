import Typography from '@/components/ui/Typography'
import Image from 'next/image'
import React, { useState } from 'react'
import copy from '@/assets/icons/copy.svg'
import MessageText from './MessageText'
import MessagePhotos from './MessagePhotos'
import { IMessage } from '../../IMessage.interface'
import { formatTimeDifference } from '@/lib/formatTimeDifference'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import MessageFeatures from './MessageFeatures'
import EmojiList from '@/components/dashboard/shared/emojiList'
import ReactEmojiPicker from '@/components/dashboard/shared/EmojiPicker'
import { IEmoji } from '../../IApp.interface'
import { AngleBR } from '@/components/dashboard/shared/icons'

interface Props {
    message: IMessage
}

const Message = ({ message }: Props) => {
    const [emoji, setEmoji] = useState<IEmoji | null>(null)
    return (
        <div className={cn(
            'p-2 md:p-4 rounded-[16px] border border-light-dark',
            `${message.isHuman && 'hover:border-dark-800 group hover:shadow-xl hover:bg-dark-800'}`,
        )}>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <div className='relative'>
                        {message.isHuman ? (
                            <span className="absolute right-0 top-0 inline-flex rounded-full h-3 w-3 bg-[#4AC97E] border border-black"></span>
                        ) : null}
                        <Image
                            src={message.issuer.profilePic}
                            alt={message.issuer.fullName}
                            width={50}
                            height={50}
                            className={`${message.isHuman ? 'w-[40px] md:w-[50px] h-[40px] md:h-[50px]' : 'w-[37px] md:w-[43px] h-[37px] md:h-[43px]'}`}
                        />
                    </div>
                    <Typography variant='semibold' className='md:text-base text-sm'>{message.issuer.fullName}</Typography>
                    <Typography variant='medium' className="text-[11px] md:text-[12px] text-gray-light">{formatTimeDifference(message.timeAgo)}</Typography>
                </div>
                <div>
                    <Image
                        src={copy}
                        alt='copy'
                        width={16}
                        height={16}
                    />
                </div>
            </div>
            <div className='ml-[65px] md:ml-[77px]'>
                <MessageText message={message.message.text} />
                {(message.message.medias)?.length ? (
                    <MessagePhotos photos={message.message.medias} />
                ) : null}
                {(message.message?.variants)?.length ? (
                    <MessageFeatures features={message.message.variants} />
                ) : null}
                {/* <div className='pt-8 pb-6 '>
                    <div className='flex items-center gap-4'>
                        <div className='relative'>
                            {message.isHuman ? (
                                <span className="absolute right-0 top-0 inline-flex rounded-full h-3 w-3 bg-[#4AC97E] border border-black"></span>
                            ) : null}
                            <Image
                                src={message.issuer.profilePic}
                                alt={message.issuer.fullName}
                                width={50}
                                height={50}
                                className={`${message.isHuman ? 'w-[40px] md:w-[50px] h-[40px] md:h-[50px]' : 'w-[37px] md:w-[43px] h-[37px] md:h-[43px]'}`}
                            />
                        </div>
                        <Typography variant='semibold' className='md:text-base text-sm'>{message.issuer.fullName}</Typography>
                        <Typography variant='medium' className="text-[11px] md:text-[12px] text-gray-light">{formatTimeDifference(message.timeAgo)}</Typography>
                    </div>
                    <MessageText message={message.message.text} />
                    {(message.message.medias)?.length ? (
                        <MessagePhotos photos={message.message.medias} />
                    ) : null}
                    {(message.message?.variants)?.length ? (
                        <MessageFeatures features={message.message.variants} />
                    ) : null}
                    {message.isHuman ? null : (
                    <div className='pt-3 flex items-center gap-2'>
                        <Button size={'sm'} variant={'gray'} className='font-semibold text-[12px]'>Regenerate response</Button>
                        <Button size={'sm'} variant={'gray'} className='font-semibold text-[12px]'>Modify</Button>
                    </div>
                )}
                {message.isHuman && (
                    <div className='flex items-center justify-between px-10 gap-3 -mb-5 md:-mb-7 pt-4'>
                        <span></span>
                        <div className='flex items-center gap-1 pr-4'>
                            <Button size={'sm'} variant={'gray'} className='font-semibold h-7 text-[12px]'>Reply</Button>
                            <ReactEmojiPicker setEmoji={setEmoji} />
                        </div>
                    </div>
                )}
                </div> */}

                {message.isHuman ? null : (
                    <div className='pt-3 flex items-center gap-2'>
                        <Button size={'sm'} variant={'gray'} className='font-semibold text-[12px]'>Regenerate response</Button>
                        <Button size={'sm'} variant={'gray'} className='font-semibold text-[12px]'>Modify</Button>
                    </div>
                )}
                {message.isHuman && (
                    <div className='flex items-center justify-between gap-3 -mb-5 md:-mb-7 pt-4'>
                        <EmojiList emoji={emoji} />
                        <div className='flex items-center gap-1 pr-4'>
                            <Button size={'sm'} variant={'gray'} className='font-semibold h-7 text-[12px]'>Reply</Button>
                            <ReactEmojiPicker setEmoji={setEmoji} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Message