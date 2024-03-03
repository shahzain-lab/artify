import { ICardProps } from '@/interfaces/IElements.interface';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import Typography from './Typography';
import { Button } from './Button';



const Card: React.FC<ICardProps> = ({
    image,
    content,
    title,
    classNames,
    tags,
    onCancel,
    onClick,
}) => {
    return (
        <div className={cn(
            'bg-glass-fill w-[300px] rounded-lg p-2 border-t-2 border-noble-black-300',
            classNames?.base
        )}
        >
            {image && (
                <Image
                    src={image}
                    alt={title}
                    width={250}
                    height={250}
                    className="w-full h-auto mb-2 rounded-lg" />
            )}
            {tags && <div className="mb-2 flex gap-2 ">{tags.map((tg) => (
                <Typography key={tg} className='bg-[#fa8752c2] px-2 text-[10px] rounded-sm'>{tg}</Typography>
            ))}</div>}
            {title && <Typography className={cn(
                "text-md mb-2",
                classNames?.title
            )}>{title}</Typography>}
            {content && <div className={cn(
                "text-[12px] mb-2 text-noble-black-300",
                classNames?.content
            )}>{content}</div>}
            <div className='grid grid-cols-2 mt-4 gap-2'>
                <Button onClick={onCancel} size={'sm'} variant={'outline'}>Cancel</Button>
                <Button onClick={onClick} size={'sm'} className=''>Proceed</Button>
            </div>
        </div>
    );
};

export default Card;
