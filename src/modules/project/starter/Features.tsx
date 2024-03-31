import React from 'react'
import { IFeature } from '../../../interfaces/IMessage.interface'
{
  /* Components */
}
import Typography from '@/components/elements/Typography'
{
  /* Images */
}
import Image from 'next/image'
import arrowRightGray from '@/assets/icons/arrow-right-gray.svg'
{
  /* Utils */
}
import { Code, Comment, Idea, Pencil } from '@/utils/icons'

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
        <div key={i} className='flex flex-col items-center gap-2 mt-5'>
          <p className='bg-glass-fill p-2 md:p-3 rounded-[100%]'>{feat.Icon}</p>
          <Typography variant='semibold' className='text-sm md:text-lg'>
            {feat.title}
          </Typography>
          <ul className='md:flex flex-col gap-2 hidden'>
            {feat.tools.map((asst) => (
              <li
                className='bg-glass-fill shadow-sm p-4 flex justify-between items-center gap-16 rounded-[12px]'
                key={asst.title}
              >
                <Typography variant='semibold' size='sm'>
                  {asst.title}
                </Typography>
                <Image src={arrowRightGray} alt='arrowRightGray' width={16} height={16} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Features
