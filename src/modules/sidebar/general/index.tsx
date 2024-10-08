import React from 'react'
{
  /* Component */
}
import Typography from '@/components/elements/Typography'
import SearchModal from '@/components/app/SearchModal'
{
  /* Images */
}
import Image from 'next/image'
import search from '@/assets/icons/search.svg'
import searchCommand from '@/assets/icons/search-command.svg'
{
  /* Utils */
}
import { IMenuItems } from './items'
import Link from 'next/link'

const General = () => {
  return (
    <div className='-mt-3'>
      <SearchModal>
        <div className='py-4 flex justify-between items-center'>
          <div className=' flex items-center'>
            <Image src={search} alt={'Search'} width={40} height={40} className='-mb-5' />
            <Typography variant='semibold' className='text-sm dark:text-noble-black-100 text-noble-black-400'>
              Search
            </Typography>
          </div>
          <Image src={searchCommand} alt={'Search'} width={40} height={40} className='' />
        </div>
      </SearchModal>
      {IMenuItems.map((item, i) =>
        (item.heading || !item.path) ? null : (
          <Link key={i} href={item.path} className='hover:bg-glass-fill rounded-[8px] py-4 flex justify-between items-center'>
            <div className=' flex items-center'>
              {item.icon ? (
                <Image src={item.icon} alt={item.title || ''} width={40} height={40} className='-mb-5' />
              ) : null}
              <Typography variant='semibold' className='text-sm dark:text-noble-black-100 text-noble-black-400'>
                {item.title}
              </Typography>
            </div>
            {item.tag ? <Image src={item.tag} alt={item.title || ''} width={40} height={40} className='' /> : null}
          </Link>
        )
      )}
    </div>
  )
}

export default General
