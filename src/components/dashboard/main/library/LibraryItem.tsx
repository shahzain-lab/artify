import React, { useState } from 'react'
import { IUser } from '../IUser.interface';
import Typography from '@/components/ui/Typography';
import Image, { StaticImageData } from 'next/image';
import { ChatGradient, Status, TwoDots } from '@/lib/icons';
import UsersList from '../../layout/UsersList';
import DetailWindow from './DetailWindow';

interface ILibraryComments {
    author: IUser,
    text: string
}

interface ILibraryMedias {
    src: StaticImageData
}

export interface ILibraryAssets {
    name: string;
    caption: string;
    medias: ILibraryMedias[];
    comments: ILibraryComments[]
    contributors: IUser[]
}

export interface ILibrary {
    name: string;
    assets: ILibraryAssets[]
}

interface Props {
    library: ILibrary
    index: number
}

const LibraryItem = ({ library, index }: Props) => {
    const [isOpen, setIsOpen] = useState(false)
   const [currentAsset, setCurrenAsset] = useState<ILibraryAssets | null>(null) 

   const handleOpenWindow = (asset: ILibraryAssets) => {
    setIsOpen(true)
    setCurrenAsset(asset)
   }
    return (
        <div className='flex flex-col gap-4 relative'>
            <div className='px-4 flex items-center justify-between'>
                <Typography className='text-xl font-extrabold'>{library.name}</Typography>
                <span><TwoDots /></span>
            </div>
            <div className='flex flex-col gap-4 h-screen overflow-y-scroll no-scrollbar'>
                {library.assets.map((asset, i) => (
                    <div 
                        key={i}
                        onClick={() => handleOpenWindow(asset)} 
                        className='p-6 cursor-pointer rounded-[20px] bg-dark-800 flex flex-col gap-3'>
                        <Typography className='text-base font-semibold'>{asset.name}</Typography>
                        <Typography className='text-base font-medium text-gray'>{asset.caption}</Typography>
                        <div className='grid grid-cols-3 gap-2'>
                            {asset.medias.map((media, i) => (
                                <div key={i}>
                                    <Image
                                        src={media.src}
                                        alt={asset.name}
                                        width={80}
                                        height={80}
                                        className='w-full h-auto'
                                    />
                                </div>
                            ))}
                        </div>
                        <div className='pt-6 border-t-2 border-light-dark flex justify-between items-center px-2'>
                            <UsersList users={asset.contributors} depth={2} />
                            <div className='flex items-center gap-2'>
                                <Typography className='text-sm font-semibold'>{asset.comments.length}</Typography>
                                <ChatGradient />
                            </div>
                        </div>
                        {index !== 0 && (
                            <div className='w-[1px] h-full absolute bg-light-dark -top-4 -left-2 '></div>
                        )}
                    </div>
                ))}
            </div>
                {isOpen && currentAsset && (
                    <DetailWindow
                        asset={currentAsset}
                        setIsOpen={setIsOpen}
                    />
                )}
        </div>
    )
}

export default LibraryItem