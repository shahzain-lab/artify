import Typography from '@/components/elements/Typography'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/assets/icons/artificium.svg'
import { Join, Login, Register, Workspace } from '@/utils/icons'

interface IPage {
  title: string;
  path: string;
  icon:  JSX.Element;
}

const ListPages = () => {
  const pages: IPage[] = [
    { title: 'Login', path: '/auth/login', icon: <Login color='#fff' className='w-4 h-4' />},
    { title: 'Login 2', path: '/auth/login-second', icon: <Workspace color='#fff' className='w-4 h-4' />},
    { title: 'Register', path: '/auth/register', icon: <Register color='#fff' className='w-4 h-4' />},
    { title: 'Join', path: '/auth/register-second', icon: <Join color='#fff' className='w-4 h-4' />}
  ]
  return (
    <div className="flex flex-col gap-1">
      {pages.map((page, i) => (
        <Link key={i} href={page.path}>
          <div key={i} className={`hover:bg-glass-fill rounded-[8px] my-1 px-1 py-4 flex justify-between items-center`}>
            <div className=' flex items-center gap-2'>
              {page.icon ? (
                <>{page.icon}</>
              ) : null}
              <Typography variant='semibold' className='text-sm text-noble-black-100'>{page.title}</Typography>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ListPages