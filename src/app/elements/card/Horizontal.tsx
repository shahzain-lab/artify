'use client'
import Card from '@/components/elements/Card'
import React from 'react'
import card from '@/assets/card.png'
import card2 from '@/assets/card2.png'
import CardLayer from '@/components/elements/CardLayer'

const Horizontal = () => {
  return (
    <CardLayer title='Horizontal Card'>
      <div className='grid grid-cols-2 gap-3 items-start justify-between w-full'>
        <Card
          title='HELLO'
          content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, commodi!'
          image={card}
          tags={['UI', 'Design', 'Development']}
          position='horizontal'
          handler={{
            title: 'View',
            onClick: () => {}
          }}
          handler2={{
            title: 'Cancel',
            onClick: () => {}
          }}
        />
        <Card
          title='HELLO'
          content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, commodi!'
          image={card2}
          tags={['UI', 'Design', 'Development']}
          position='horizontal'
          handler={{
            title: 'Send',
            onClick: () => {}
          }}
        />
      </div>
      <Card
        title='HELLO'
        content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, commodi!'
        image={card}
        tags={['UI', 'Design', 'Development']}
        position='horizontal'
        handler2={{
          title: 'Learn More',
          onClick: () => {}
        }}
      />
    </CardLayer>
  )
}

export default Horizontal
