'use client'
import React from 'react'
import Card from '@/components/elements/Card'
import { Watch } from '@/utils/icons'
import CardLayer from '@/components/elements/CardLayer'
import card from '@/assets/card.png'
import card2 from '@/assets/card2.png'

const VerticalCards = () => {
  return (
    <CardLayer title='Vertical Card'>
      <div className='flex gap-6 items-start justify-between w-full'>
        <Card
          title='HELLO'
          content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, commodi!'
          image={card}
          tags={['UI', 'Design', 'Development']}
          handler={{
            title: 'View',
            onClick: () => {}
          }}
          handler2={{
            title: 'Cancel',
            onClick: () => {}
          }}
        >
          <div className='flex justify-between items-center text-[12px] my-2 text-noble-black-200'>
            <p className='flex items-center gap-2'>
              <Watch /> <span>Created - 8 feb</span>
            </p>
            <span>2 days ago</span>
          </div>
        </Card>
        <Card
          title='HELLO'
          content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, commodi!'
          image={card2}
          tags={['UI', 'Design', 'Development']}
          handler={{
            title: 'Send',
            onClick: () => {}
          }}
        >
          <div className='flex justify-between items-center text-[12px] my-2 text-noble-black-200'>
            <p className='flex items-center gap-2'>
              <Watch /> <span>Created - 8 feb</span>
            </p>
            <span>2 days ago</span>
          </div>
        </Card>
        <Card
          title='HELLO'
          content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, commodi!'
          image={card}
          tags={['UI', 'Design', 'Development']}
          handler2={{
            title: 'Learn More',
            onClick: () => {}
          }}
        >
          <div className='flex justify-between items-center text-[12px] my-2 text-noble-black-200'>
            <p className='flex items-center gap-2'>
              <Watch /> <span>Created - 8 feb</span>
            </p>
            <span>2 days ago</span>
          </div>
        </Card>
      </div>
    </CardLayer>
  )
}

export default VerticalCards
