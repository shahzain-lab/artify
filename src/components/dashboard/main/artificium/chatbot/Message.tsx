import Typography from '@/components/ui/Typography'
import Image from 'next/image'
import React from 'react'
import copy from '@/assets/icons/copy.svg'
import MessageText from './MessageText'
import MessagePhotos from './MessagePhotos'
import { IMessage } from '../../IMessage.interface'
import { formatTimeDifference } from '@/lib/formatTimeDifference'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import MessageFeatures from './MessageFeatures'

interface Props {
    message: IMessage
}

const Message = ({ message }: Props) => {
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
                        ):null}
                        <Image
                            src={message.issuer.profilePic}
                            alt={message.issuer.fullName}
                            width={50}
                            height={50}
                            className={`${message.isHuman ? 'w-[40px] md:w-[50px] h-[40px] md:h-[50px]':'w-[37px] md:w-[43px] h-[37px] md:h-[43px]'}`}
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
                {message.isHuman ? null : (
                    <div className='pt-3 flex items-center gap-2'>
                        <Button size={'sm'} variant={'gray'} className='font-semibold text-[12px]'>Regenerate response</Button>
                        <Button size={'sm'} variant={'gray'} className='font-semibold text-[12px]'>Modify</Button>
                    </div>    
                )}
                <div className='group-hover:flex hidden items-center gap-3 pt-3'>
                    <Button size={'sm'} variant={'gray'} className='font-semibold text-[12px]'>Reply</Button>
                    <div className='flex bg-light-dark p-1 rounded-[8px] items-start'>
                        <span>🔥</span>
                        <span className='-ml-1'>💅🏻</span>
                        <span className='-ml-1'>🙄</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message