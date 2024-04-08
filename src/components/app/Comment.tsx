import React from 'react'
{
  /* Components */
}
import Image from 'next/image'
import Typography from '../elements/Typography'
import { formatTimeDifference } from '@/lib/formatTimeDifference'
import MessageText from '@/modules/project/artificium/chatbot/MessageText'
import { IUser } from '@/interfaces/app.interface'
import { cn } from '@/lib/utils'
{
  /* Image */
}
import copy from '@/assets/icons/copy.svg'

interface IComment {
  date: Date
  title: string
  user: IUser
  description: string
}

interface IComentProps {
  coment: IComment
}

const Comment = ({ coment }: IComentProps) => {
  return (
    <div

      className={cn(
        'p-2 md:p-4 z-20 dark:bg-noble-black-700 text-black bg-white rounded-[16px] border dark:border-noble-black-600 border-noble-black-400',
        `dark:hover:border-noble-black-800 hover:bg-gray-100 group hover:shadow-xl dark:hover:bg-noble-black-800`
      )}
    >
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='relative'>
            <span className='absolute right-0 top-0 inline-flex rounded-full h-3 w-3 bg-[#4AC97E] border border-black'></span>
            <Image
              src={coment.user.avatar}
              alt={coment.title}
              width={50}
              height={50}
              className={`w-[40px] md:w-[50px] h-[40px] md:h-[50px]`}
            />
          </div>
          <Typography variant='semibold' className='text-[10px] md:text-[12px] flex gap-2 text-neutral-400'>
            <p dangerouslySetInnerHTML={{ __html: coment.title }}></p>
          </Typography>
          <Typography variant='medium' className='text-[11px] md:text-[12px] text-noble-black-400'>
            {formatTimeDifference(coment.date)}
          </Typography>
        </div>
        <div>
          <Image src={copy} alt='copy' width={16} height={16} />
        </div>
      </div>
      <div className='ml-[65px] md:ml-[77px]'>
        <MessageText message={coment.description} />
        {/* {(message.message.medias)?.length ? (
                <MessagePhotos photos={message.message.medias} />
            ) : null}
            {(message.message?.variants)?.length ? (
                <MessageFeatures features={message.message.variants} />
            ) : null} */}
      </div>
    </div>
  )
}

export default Comment
