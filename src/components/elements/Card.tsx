'use client'
import React from 'react'
import { ICardProps } from '@/interfaces/IElements.interface'
{
  /* Components */
}
import Image from 'next/image'
import Typography from './Typography'
import { Button } from './Button'
{
  /* Utils */
}
import { cn } from '@/lib/utils'

const Card: React.FC<ICardProps> = ({
  image,
  content,
  title,
  classNames,
  tags,
  children,
  variant = 'primary',
  position = 'vertical',
  handler,
  handler2
}) => {
  const styles = {
    variant: {
      primary: 'border-theme-greenish'
    }
  }
  return (
    <div
      className={cn(
        'bg-glass-fill rounded-lg p-2',
        !image && `border-t-2 ${styles.variant[variant]}`,
        position === 'horizontal' ? 'flex h-[250px]' : 'w-[350px]',
        classNames?.base
      )}
    >
      {image && (
        <Image
          src={image}
          alt={typeof title === 'string' ? title : ''}
          width={250}
          height={250}
          className={cn(position === 'horizontal' ? 'w-[40%] h-full' : 'w-full h-[200px]', ' mb-2 rounded-lg')}
        />
      )}
      <div className={`${position === 'horizontal' ? 'flex flex-col justify-between p-3 ' : ''}`}>
        <div className='flex flex-col gap-2'>
          {tags && (
            <div className='mb-2 flex gap-2 '>
              {tags.map((tg) => (
                <Typography key={tg} className='bg-[#fa8752c2] px-2 text-[10px] rounded-sm'>
                  {tg}
                </Typography>
              ))}
            </div>
          )}
          {title && <Typography className={cn('text-md mb-2', classNames?.title)}>{title}</Typography>}
          {content && <div className={cn('text-[12px] mb-2 text-noble-black-300', classNames?.content)}>{content}</div>}
          {children && <div>{children}</div>}
        </div>
        <div className={cn('grid mt-4 gap-2', !handler || !handler2 ? 'grid-cols-1' : 'grid-cols-2')}>
          {handler2 && (
            <Button onClick={handler2.onClick} size={'sm'} variant={'ghostoutline'}>
              {handler2.title}
            </Button>
          )}
          {handler && (
            <Button onClick={handler.onClick} size={'sm'}>
              {handler.title}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
