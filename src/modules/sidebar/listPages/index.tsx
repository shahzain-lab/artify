import React from 'react'
{
  /* Components */
}
import Typography from '@/components/elements/Typography'
import Link from 'next/link'
{
  /* Utils */
}
import { Join, Login, Register, Workspace } from '@/utils/icons'

interface IPage {
  title: string
  path: string
  icon: JSX.Element
}

const ListPages = () => {
  const pages: IPage[] = [
    { title: 'Login', path: '/auth/login', icon: <Login className='w-4 h-4 text-[#fff]' /> },
    { title: 'Login 2', path: '/auth/login-second', icon: <Workspace className='w-4 h-4 text-[#fff]' /> },
    { title: 'Register', path: '/auth/register', icon: <Register className='w-4 h-4 text-[#fff]' /> },
    { title: 'Join', path: '/auth/register-second', icon: <Join className='w-4 h-4 text-[#fff]' /> }
  ]
  return (
    <div className='flex flex-col gap-1'>
      {pages.map((page, i) => (
        <Link key={i} href={page.path}>
          <div key={i} className={`hover:bg-glass-fill rounded-[8px] my-1 px-1 py-4 flex justify-between items-center`}>
            <div className=' flex items-center gap-2'>
              {page.icon ? <>{page.icon}</> : null}
              <Typography variant='semibold' className='text-sm text-noble-black-100'>
                {page.title}
              </Typography>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ListPages
