import WindowLayer from '@/components/elements/WindowLayer'
import React, { Dispatch, SetStateAction, useState } from 'react'
import Typography from '@/components/elements/Typography'
// import RoutePanel from '@/modules/project/header/RoutePanel'
import { Artificium, Chat, GetStarted, Library } from '@/utils/icons'
import { ILibraryAsset } from '@/interfaces/app.interface'

interface Props {
    asset: ILibraryAsset
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
            <Typography className='text-base font-medium text-gray-light-100'>{asset.caption}</Typography>
        </div>
        {/* <RoutePanel 
        /> */}
    </WindowLayer>
  )
}

export default DetailWindow