import React from 'react'
import { library } from './library'
import LibraryItem from './LibraryItem'
import { Plus } from '@/lib/icons'

const Library = () => {

  return (
    <div className='flex items-start gap-2 py-5 relative'>
        <div className='flex items-start gap-4'>
            {library.map((lib, i) => <LibraryItem key={i} index={i} library={lib} />)}
        </div>
        <div className='bg-light-dark p-4 flex items-center justify-center rounded-[10px] sticky top-0 h-[100vh] cursor-pointer'>
            <Plus />
        </div>
    </div>
  )
}

export default Library