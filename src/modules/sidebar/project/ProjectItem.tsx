import React, { FC } from 'react'
import { IProject } from '@/interfaces/app.interface'
import Image from 'next/image'
import Typography from '@/components/elements/Typography'
import Link from 'next/link'

interface Props {
  project: IProject
  index: number
  active: number
  setActive: React.Dispatch<React.SetStateAction<number>>
}

const ProjectItem: FC<Props> = ({ project, index, active, setActive }) => {
  return (
    <Link
      href={'/project'}
      onClick={() => setActive(index)}
      className={`${active === index ? 'bg-glass-fill' : ''} hover:bg-glass-fill rounded-[8px] my-1 px-1 py-4 flex justify-between items-center`}
    >
      <div className=' flex items-center gap-2'>
        {project.logo ? (
          <Image src={project.logo} alt={project.title || ''} width={20} height={20} className='' />
        ) : null}
        <Typography variant='semibold' className='text-sm dark:text-noble-black-100 text-noble-black-400'>
          {project.title}
        </Typography>
      </div>
    </Link>
  )
}

export default ProjectItem
