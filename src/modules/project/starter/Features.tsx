
import React from 'react'
import { IFeature } from '../../../interfaces/IMessage.interface'
{
  /* Components */
}
import Typography from '@/components/elements/Typography'
{
  /* Utils */
}
import { Code, Comment, Idea, Pencil } from '@/utils/icons'
import FeatureItem from './FeatureItem'

const features: IFeature[] = [
  {
    title: 'Creative Assets',
    Icon: <Comment />,
    tools: [
      { title: 'UI wireframe', link: '' },
      { title: 'Brochure design', link: '' },
      { title: 'Social media', link: '' },
      { title: 'Brand guidelines', link: '' }
    ]
  },
  {
    title: 'Developer Tools',
    Icon: <Code />,
    tools: [
      { title: 'API Integration', link: '' },
      { title: 'Test automation', link: '' },
      { title: 'DB optimization', link: '' },
      { title: 'Code review', link: '' }
    ]
  },
  {
    title: 'Content Creation',
    Icon: <Pencil />,
    tools: [
      { title: 'Product description', link: '' },
      { title: 'E-mail copy', link: '' },
      { title: 'Whitepaper', link: '' },
      { title: 'Press release', link: '' }
    ]
  },
  {
    title: 'Idea Generation',
    Icon: <Idea />,
    tools: [
      { title: 'Hashtag ideas', link: '' },
      { title: 'Brainstorming', link: '' },
      { title: 'Trend analysis', link: '' },
      { title: 'Social media posts', link: '' }
    ]
  }
]

const Features = () => {
  return (
    <div className='md:flex md:items-start gap-10 grid grid-cols-2 pt-3 md:pt-0'>
      {features.map((feat: IFeature, i: number) => (
        <FeatureItem key={i} feature={feat} />
      ))}
    </div>
  )
}

export default Features
