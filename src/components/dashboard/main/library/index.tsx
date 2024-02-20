import React, { useState } from 'react'
import LibraryItem from './LibraryItem'
import { Plus } from '@/model/icons'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

const Library = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const library = useSelector((state: RootState) => state.workspace.library)
  return (
    <div className='flex items-start gap-2 py-5 relative'>
        <div className='flex items-start gap-4'>
            {library.map((lib, i) => <LibraryItem 
            key={i} 
            index={i} 
            library={lib}
            currentIndex={currentIndex} 
            setCurrentIndex={setCurrentIndex}
            />)}
            {/* <LibraryItem key={1} index={1} library={library[1]} /> */}
        </div>
        <div className='bg-light-dark p-4 flex items-center justify-center rounded-[10px] sticky top-0 h-[100vh] cursor-pointer'>
            <Plus />
        </div>
    </div>
  )
}

export default Library