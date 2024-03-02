import Typography from '@/components/elements/Typography'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/assets/icons/artificium.svg'

const ListPages = () => {
  const pages = [
    { title: 'Login', path: '/auth/login', icon:  logo},
    { title: 'Login 2', path: '/auth/login-second', icon:  logo},
    { title: 'Register', path: '/auth/register', icon:  logo},
    { title: 'Join', path: '/auth/register-second', icon:  logo}
  ]
  return (
    <div className="flex flex-col gap-1">
      {pages.map((page, i) => (
        <Link key={i} href={page.path}>
          <div key={i} className={`hover:bg-glass-fill rounded-[8px] my-1 px-1 py-4 flex justify-between items-center`}>
            <div className=' flex items-center gap-2'>
              {page.icon ? (
                <Image
                  src={page.icon}
                  alt={page.title || ''}
                  width={20}
                  height={20}
                  className=''
                />
              ) : null}
              <Typography variant='semibold' className='text-sm text-gray-200'>{page.title}</Typography>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ListPages