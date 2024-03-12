'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image';
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import crossSVG from '@/assets/icons/cross.svg'
import { preventScroll } from '@/lib/preventScroll';

interface Props {
  children?: React.ReactNode
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const ModalLayer = ({ children, setIsOpen }: Props) => {
  useEffect(() => {
    preventScroll()
    // Cleanup function to restore scroll position when the modal is closed
    return () => {
      preventScroll(true)
    };
  }, []);

  const handleCloseModal = () => {
    setIsOpen(false)
  }
  return (
    <div
      className={cn(
        'fixed top-0 left-0 flex justify-center items-center w-full h-screen',
        'z-9999'
      )}>
      <div
        onClick={handleCloseModal}
        className='w-full h-screen fixed top-0 left-0 bg-bg-layer backdrop-blur-sm'></div>
      <div className='shadow-xl-inset bg-glass-modal p-10 rounded-2xl w-[50%] relative'>
        <Image
          onClick={handleCloseModal}
          src={crossSVG}
          alt='cross'
          width={20}
          height={20}
          className='absolute right-8 top-10 cursor-pointer'
        />
        {children}
      </div>
    </div>
  )
}

export default ModalLayer