import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface Props {
  photos: {
    id: number
    src: StaticImageData | string
  }[]
}

const MessagePhotos = ({ photos }: Props) => {
  return (
    <div className='py-4 flex items-start gap-4'>
      {photos.map((photo) => (
        <div key={photo.id}>
          <Image src={photo.src} alt='photos' width={150} height={150} />
        </div>
      ))}
    </div>
  )
}

export default MessagePhotos
