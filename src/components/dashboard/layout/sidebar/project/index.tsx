'use client'
import React from 'react'
import { IMenuItems } from './items'
import Typography from '@/components/ui/Typography'
import plusCircle from '@/assets/icons/plus-circle.svg'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

const Project = () => {
    const active = 0;
    const org = useSelector((state: RootState) => state.workspace.selectedOrg)
    return (
        <div className='py-4'>
            {IMenuItems.map((item, i) => (
                <div key={i}>
                    {item.heading ? (
                        <div className='mb-5'>
                            <Typography variant='semibold' className='text-[12px] text-gray-light'>{item.heading}</Typography>
                        </div>
                    ) : null}
                </div>
            ))}
            {org.projects.map((project, i) => (
                <div className={`${active === i ? 'bg-glass-fill' : ''} hover:bg-glass-fill rounded-[8px] my-1 px-1 py-4 flex justify-between items-center`}>
                    <div className=' flex items-center gap-2'>
                        {project.logo ? (
                            <Image
                                src={project.logo}
                                alt={project.title || ''}
                                width={20}
                                height={20}
                                className=''
                            />
                        ) : null}
                        <Typography variant='semibold' className='text-sm text-gray-200'>{project.title}</Typography>
                    </div>
                </div>
            ))}
            <div className='text-gray-light flex items-center gap-2 px-2 my-3'>
                <Image
                    src={plusCircle}
                    alt='plusCircle'
                    width={22}
                    height={22}
                />
                <Typography variant='semibold' className='text-sm'>Add new project</Typography>
            </div>
        </div>
    )
}

export default Project