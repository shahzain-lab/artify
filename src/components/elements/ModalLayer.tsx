'use client'
import { cn } from '@/lib/utils'
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { preventScroll } from '@/lib/preventScroll';
import { Cross } from '@/utils/icons';
import { Button } from './Button';

interface Props {
  children?: React.ReactNode;
  position?: 'top' | 'center' | 'bottom'
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalLayer = ({ children, setIsOpen, position = 'center' }: Props) => {

  useEffect(() => {
    preventScroll()
    // Cleanup function to restore scroll position when the modal is closed
    return () => {
      preventScroll(true)
    };
  }, []);

  useEffect(() => {
    const classes = ['.userItem', '.prompt-input', '.dropdown-element', '.searchBar', '.setting-widget']
    classes.forEach(element => {
      // Identify elements to hide (replace 'your-element-selector' with the appropriate selector)
    const elementsToHide = document.querySelectorAll(element);

      // Set z-index for each element
      elementsToHide.forEach(element => {
        if (element instanceof HTMLElement) {
          element.style.zIndex = "-1"; // Or any value lower than your layer div's z-index
        } 
      });
    })
    return () => {
      classes.forEach(element => {
        const elementsToHide = document.querySelectorAll(element);
        elementsToHide.forEach(element => {
          if (element instanceof HTMLElement) {
            element.style.zIndex = ""; // Or any value lower than your layer div's z-index
          }
        });
      });
    };
  }, []);


  const handleCloseModal = () => {
    setIsOpen(false)
  }
  return (
    <div
      className={cn(
        'fixed top-0 left-0 w-full h-screen flex justify-center',
        position === 'center' ? 'items-center' : position === 'top' ? 'items-start mt-10' : 'items-end mb-10',
        'z-9999'
      )}>
      <div
        onClick={handleCloseModal}
        className='w-full h-screen fixed top-0 left-0 bg-bg-layer backdrop-blur-sm'></div>
      <div className='shadow-xl-inset bg-glass-modal p-3 md:p-10 rounded-2xl w-full md:w-[50%] relative'>
        <Button
          size={'sm'}
          onClick={handleCloseModal}
          className='absolute bg-inherit border border-gray-800 top-4 p-1 py-0 right-4 md:right-8 md:top-10 cursor-pointer'>
          <Cross className='hover:text-[#ccc] transition duration-100' />
        </Button>
        {children}
      </div>
    </div>
  )
}

export default ModalLayer