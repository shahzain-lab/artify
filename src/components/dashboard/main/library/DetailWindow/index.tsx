import WindowLayer from '@/components/ui/WindowLayer'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { ILibraryAssets } from '../LibraryItem'
import Typography from '@/components/ui/Typography'
import RoutePanel from '@/components/dashboard/layout/RoutePanel'
import { Artificium, Chat, GetStarted, Library } from '@/lib/icons'

interface Props {
    asset: ILibraryAssets
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const DetailWindow = ({asset, setIsOpen}: Props) => {
     const menuItems = [
        {
            title: 'Chat',
            Icon: Chat
        },
        {
            title: 'Images',
            Icon: Artificium
        },
        {
            title: 'Comments',
            Icon: Chat
        }
    ]

    const handleChange = (i: number) => {

    }

  return (
    <WindowLayer setIsOpen={setIsOpen}>
        <div className='flex flex-col gap-3'>
            <Typography className='text-2xl font-semibold'>{asset.name}</Typography>
            <Typography className='text-base font-medium text-gray'>{asset.caption}</Typography>
        </div>
        <RoutePanel 
          menuItems={menuItems}
          setChange={handleChange} 
        />
    </WindowLayer>
  )
}

export default DetailWindow