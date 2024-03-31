import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface AvatarProps {
  src: StaticImageData
  alt?: string
  size?: 'small' | 'medium' | 'large'
}

const Avatar: React.FC<AvatarProps> = ({ src, alt = 'Avatar', size = 'medium' }) => {
  let avatarSize = ''

  switch (size) {
    case 'small':
      avatarSize = 'h-8 w-8'
      break
    case 'large':
      avatarSize = 'h-12 w-12'
      break
    default:
      avatarSize = 'h-10 w-10'
      break
  }

  return <Image src={src} alt={alt} width={50} height={50} className={`rounded-full ${avatarSize}`} />
}

export default Avatar
