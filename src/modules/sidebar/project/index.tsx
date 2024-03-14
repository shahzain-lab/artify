'use client'
import React, { useState } from 'react'
import Typography from '@/components/elements/Typography'
import plusCircle from '@/assets/icons/plus-circle.svg'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '@/model/store'
import ProjectItem from './ProjectItem'

const Project = () => {
    const [active, setActive] = useState(0)
    const org = useSelector((state: RootState) => state.workspace.selectedOrg)
    return (
        <>
            {org.projects.map((project, i) => (
                <ProjectItem
                    key={i}
                    index={i}
                    project={project}
                    active={active}
                    setActive={setActive}
                />
            ))}
            <div className='text-noble-black-400 flex items-center gap-2 px-2 my-3'>
                <Image
                    src={plusCircle}
                    alt='plusCircle'
                    width={22}
                    height={22}
                />
                <Typography variant='semibold' className='text-sm'>Add new project</Typography>
            </div>
        </>
    )
}

export default Project