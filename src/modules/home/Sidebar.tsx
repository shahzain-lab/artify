import React from 'react'
import Image from 'next/image'
import window from "@/assets/images/window.jpeg"
import figma from "@/assets/images/figma.jpeg"
import sphere from "@/assets/images/sphere.jpeg"
import dragon from "@/assets/images/dragon.jpeg"
import cone from "@/assets/images/cone.jpeg"
import hexa from "@/assets/images/hexa.jpeg"
import { TwoDots } from '@/utils/icons'

const Sidebar = () => {
  return (
    <div className='bg-white px-2 md:py-3 py-1 md:mt-2 dark:bg-noble-black-800 rounded-md'>
                <main className='my-2 dark:text-white'>
                    <h2 className='text-xl font-semibold my-3'>Upcoming Events</h2>
                    <div className='flex bg-gray-200 dark:bg-noble-black-600 justify-between rounded-md p-2'>
                        <div className='flex'>
                            <Image className='h-[60px] w-[60px] rounded-md' height={30} width={70} alt='img' src={window} />
                            <main className='mx-3 mt-1 dark:text-gray-300'>
                                <h3 className='font-medium text-[14px]'>Typography in UX/UI</h3>
                                <div className='flex text-sm gap-5 pl-1 my-1 text-gray-400'>
                                    <span>Design</span>
                                    <span>10:00 am</span>
                                </div>
                            </main>
                        </div>
                        <div className='flex justify-right'><span><TwoDots /></span></div>
                    </div>
                </main>

                <main className='my-2'>
                    <div className='flex justify-between bg-gray-200 dark:bg-noble-black-600 rounded-md p-2 dark:text-gray-700'>
                        <div className='flex'>
                            <Image className='h-[60px] w-[60px] rounded-md' height={30} width={70} alt='img' src={figma} />
                            <main className='mx-3 mt-1 dark:text-gray-300'>
                                <h3 className='font-medium text-[16px]'>Figma UX/UI</h3>
                                <div className='flex text-sm gap-5 pl-1 my-1 text-gray-400'>
                                    <span>Design</span>
                                    <span>10:00 am</span>
                                </div>
                            </main>
                        </div>
                        <div>< TwoDots /></div>
                    </div>
                </main>


                <main>
                    <h2 className='text-xl font-semibold mt-7 mb-4 dark:text-white'>Top Performing Courses</h2>
                    <div className='flex justify-between  p-2'>
                        <div className='flex gap-1'>
                            <Image className='w-[56px] h-[54px] rounded-md' height={30} width={70} alt='img' src={sphere} />
                            <main className='m-2 dark:text-white'>
                                <h3 className='font-medium text-[13px]'>CSS For Designers</h3>
                                <span className='flex gap-5 text-gray-400'>
                                    <div className='flex text-[12px]'>uxcel</div>
                                </span>
                            </main>
                        </div>
                        <button className='text-green-500 font-medium text-[12px]'>Read more</button>
                    </div>
                </main>

                <div className='flex justify-between gap-1 p-2'>
                    <div className='flex gap-1'>
                        <Image className='w-[56px] h-[54px] rounded-md' height={30} width={70} alt='img' src={dragon} />
                        <main className='m-2 dark:text-white'>
                            <h3 className='font-medium text-[12px]'>3D Designs</h3>
                            <span className='flex gap-5 text-gray-400'>
                                <div className='flex text-[12px]'>uxcel</div>
                            </span>
                        </main>
                    </div>

                    <button className='text-green-500 font-medium text-[12px]'>Read more</button>

                </div>

                <div className='flex justify-between p-2'>
                    <div className='flex gap-1'>
                        <Image className='w-[56px] h-[54px] rounded-md' height={30} width={70} alt='img' src={cone} />
                        <main className='m-2 dark:text-white'>
                            <h3 className='font-medium text-[13px]'>Design Composition</h3>
                            <span className='flex gap-5 text-gray-400'>
                                <div className='flex text-[12px]'>uxcel</div>

                            </span>
                        </main>
                    </div>
                    <button className='text-green-500 font-medium text-[12px]'>Check out</button>
                </div>

                <div className='flex p-2 gap-1 justify-between w-full'>
                    <div className='flex gap-1'>
                        <Image className='w-[56px] h-[54px] rounded-md' height={20} width={70} alt='img' src={hexa} />
                        <main className='m-2 dark:text-white'>
                            <h3 className='font-medium text-[13px]'>Color Physcology</h3>
                            <span className='flex gap-2  text-gray-400'>
                                <div className='flex text-[12px]'>uxcel</div>
                            </span>
                        </main>
                    </div>
                    <button className='text-green-500 font-medium text-[12px]'>Check out</button>
                </div>
            </div>
  )
}

export default Sidebar