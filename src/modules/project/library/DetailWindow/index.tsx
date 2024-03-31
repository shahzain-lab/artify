import React, { Dispatch, SetStateAction } from 'react'
import WindowLayer from '@/components/elements/WindowLayer'
import Typography from '@/components/elements/Typography'
import { ILibraryAsset } from '@/interfaces/app.interface'

interface Props {
  asset: ILibraryAsset
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const DetailWindow = ({ asset, setIsOpen }: Props) => {
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
