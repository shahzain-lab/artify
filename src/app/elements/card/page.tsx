import Card from '@/components/elements/Card'
import React from 'react'
import card from '@/assets/card.png'

const page = () => {
  return (
    <div>
        <Card 
          title='HELLO'
          content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, commodi!'
          image={card}
          tags={['UI', 'Design', 'Development']}
        />
    </div>
  )
}

export default page