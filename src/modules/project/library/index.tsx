'use client'
import React, { useState } from 'react'
import LibraryItem from './LibraryItem'
import { useSelector } from 'react-redux'
import { RootState } from '@/model/store'
import { Plus } from '@/utils/icons'
import { cn } from '@/lib/utils'

const Library = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const library = useSelector((state: RootState) => state.workspace.library)
  return (
    <div className={cn(
      'no-overlay',
      'flex items-start gap-2 py-5 relative'
    )}>
      <div className='flex items-start gap-4'>
        {library.map((lib, i) => (
          <LibraryItem key={i} index={i} library={lib} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        ))}
        {/* <LibraryItem key={1} index={1} library={library[1]} /> */}
      </div>
      <div className='dark:bg-noble-black-600 bg-white p-4 flex items-center justify-center rounded-[10px] sticky top-0 h-[100vh] cursor-pointer'>
        <Plus />
      </div>
    </div>
  )
}

export default Library
