import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

interface Props {
  image?: StaticImageData; 
  letter?: string; 
  size?: string; 
  className?: string;
}

const Avatar: FC<Props> = ({ image, letter, size, className }) => {
  let content = null;
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

  if (image) {
    content = <Image width={30} height={30} src={image} alt="Avatar" className={cn(
      'rounded-full',
      avatarSize
    )}
      />;
  } else if (letter) {
    content = (
      <div className={cn(
        'flex items-center justify-center rounded-full uppercase bg-gray-300 text-gray-700 text-xl',
        avatarSize
      )}>
        {letter}
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden ${className}`}
    >
      {content}
    </div>
  );
};

Avatar.defaultProps = {
  size: "40px",
  className: "",
};

export default Avatar;