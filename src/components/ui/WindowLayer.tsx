'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image';
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import crossSVG from '@/assets/icons/cross.svg'

interface Props {
    children: React.ReactNode
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const WindowLayer = ({ children, setIsOpen }: Props) => {
    // Add an effect to handle the body style when the modal is opened
    useEffect(() => {
        // Save the current scroll position
        const scrollPosition = window.scrollY;

        // Apply styles to prevent scrolling
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';

        // Cleanup function to restore scroll position when the modal is closed
        return () => {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, scrollPosition);
        };
    }, []);

    const handleCloseModal = () => {
        setIsOpen(false)
    }
    return (
        <div
            className={cn(
                'fixed top-0 left-0 flex justify-end items-start w-full h-screen',
                'z-9999'
            )}>
            <div
                onClick={handleCloseModal}
                className='w-full h-screen fixed top-0 left-0 bg-bg-layer backdrop-blur-sm'></div>
            <div className='shadow-xl-inset bg-glass-modal p-10 rounded-l-2xl w-[50%] h-full relative'>
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

export default WindowLayer