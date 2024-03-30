import React, { useState } from 'react'
import Typography from '@/components/elements/Typography'
import Image from 'next/image'
import { ChatGradient, TwoDots } from '@/utils/icons'
import DetailWindow from './DetailWindow'
import { ILibrary, ILibraryAsset } from '@/interfaces/app.interface'
import UsersList from '../header/UsersList'

interface Props {
  library: ILibrary
  index: number
  currentIndex: number
  setCurrentIndex: (i: number) => void
}

const LibraryItem = ({ library, index, currentIndex, setCurrentIndex }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentAsset, setCurrenAsset] = useState<ILibraryAsset | null>(null)
  const handleOpenWindow = (asset: ILibraryAsset) => {
    setIsOpen(true)
    setCurrenAsset(asset)
  }
  return (
    <div className={`md:flex flex-col gap-4 relative w-full ${currentIndex === index ? 'flex' : 'hidden'}`}>
      <div className='px-4 hidden md:flex items-center justify-between'>
        <Typography className='text-xl font-extrabold'>{library.name}</Typography>
        <span>
          <TwoDots />
        </span>
      </div>
      <div
        className={`${currentIndex === index ? 'flex' : 'hidden'} md:flex flex-col gap-4 h-screen overflow-y-scroll no-scrollbar w-full `}
      >
        <div className='flex items-center gap-2 justify-between md:hidden'>
          {['Images', 'Documents', 'Ideas'].map((t, i) => (
            <p
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`bg-noble-black-600 text-sm p-1 px-3 rounded-[8px] ${i === index ? 'text-theme-greenish' : ''}`}
            >
              {t}
            </p>
          ))}
        </div>
        {library.assets.map((asset, i) => (
          <div
            key={i}
            onClick={() => handleOpenWindow(asset)}
            className='p-6 cursor-pointer rounded-[20px] bg-noble-black-800 flex flex-col gap-3 w-full'
          >
            <Typography className='text-base font-semibold'>{asset.name}</Typography>
            <Typography className='text-base font-medium text-gray-light-100'>{asset.caption}</Typography>
            <div className='grid grid-cols-3 gap-2'>
              {asset.medias.map((media, i) => (
                <div key={i}>
                  <Image src={media.src} alt={asset.name} width={80} height={80} className='w-full h-auto' />
                </div>
              ))}
            </div>
            <div className='pt-6 border-t-2 border-noble-black-600 flex justify-between items-center px-2'>
              <UsersList users={asset.contributors} depth={2} />
              <div className='flex items-center gap-2'>
                <Typography className='text-sm font-semibold'>{asset.comments.length}</Typography>
                <ChatGradient />
              </div>
            </div>
            {index !== 0 && <div className='w-[1px] h-full absolute bg-noble-black-600 -top-4 -left-2 '></div>}
          </div>
        ))}
      </div>
      {isOpen && currentAsset && <DetailWindow asset={currentAsset} setIsOpen={setIsOpen} />}
    </div>
  )
}

export default LibraryItem
