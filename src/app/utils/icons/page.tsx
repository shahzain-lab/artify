import React from 'react'
import { Button } from '@/components/elements/Button'
import CardLayer from '@/components/elements/CardLayer'
{
  /* Icons */
}
import {
  Artificium,
  Chat,
  CheveronDown,
  CheveronRight,
  Code,
  Comment,
  Cross,
  Danger,
  DoubleLeft,
  DoubleRight,
  Download,
  GetStarted,
  Globe,
  Idea,
  Library,
  Lock,
  Pencil,
  Plus,
  Setting,
  Share,
  Sqaure,
  Status,
  Success,
  TriLine,
  TwoDots,
  Warning
} from '@/utils/icons'

const Page = () => {
  return (
    <div>
      <CardLayer title='Icons'>
        <div className='flex flex-wrap gap-14'>
          <Button color='ghost'>
            <CheveronRight className='#fff' />
          </Button>
          <Button color='ghost'>
            <CheveronDown className='#fff' />
          </Button>
          <Button color='ghost'>
            <Download className='#fff' />
          </Button>
          <Button color='ghost'>
            <Share className='#fff' />
          </Button>
          <Button color='ghost'>
            <Lock className='#fff' />
          </Button>
          <Button color='ghost'>
            <Globe className='#fff' />
          </Button>
          <Button color='ghost'>
            <Cross className='#fff' />
          </Button>
          <Button color='ghost'>
            <Comment className='#fff' />
          </Button>
          <Button color='ghost'>
            <Code className='#fff' />
          </Button>
          <Button color='ghost'>
            <Pencil className='#fff' />
          </Button>
          <Button color='ghost'>
            <Idea className='#fff' />
          </Button>
          <Button color='ghost'>
            <Setting className='#fff' />
          </Button>
          <Button color='ghost'>
            <Status className='#fff' />
          </Button>
          <Button color='ghost'>
            <TriLine className='#fff' />
          </Button>
          <Button color='ghost'>
            <Plus className='#fff' />
          </Button>
          <Button color='ghost'>
            <Sqaure className='#fff' />
          </Button>
          <Button color='ghost'>
            <Chat className='#fff' />
          </Button>
          <Button color='ghost'>
            <TwoDots className='#fff' />
          </Button>
          <Button color='ghost'>
            <GetStarted className='#fff' />
          </Button>
          <Button color='ghost'>
            <DoubleLeft className='#fff' />
          </Button>
          <Button color='ghost'>
            <DoubleRight className='#fff' />
          </Button>
          <Button color='ghost'>
            <Warning className='#fff' />
          </Button>
          <Button color='ghost'>
            <Danger className='#fff' />
          </Button>
          <Button color='ghost'>
            <Success className='#fff' />
          </Button>
          <Button color='ghost'>
            <Artificium className='#fff' />
          </Button>
          <Button color='ghost'>
            <Library className='#fff' />
          </Button>
        </div>
      </CardLayer>
    </div>
  )
}

export default Page
