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
            <CheveronRight color='#fff' />
          </Button>
          <Button color='ghost'>
            <CheveronDown color='#fff' />
          </Button>
          <Button color='ghost'>
            <Download color='#fff' />
          </Button>
          <Button color='ghost'>
            <Share color='#fff' />
          </Button>
          <Button color='ghost'>
            <Lock color='#fff' />
          </Button>
          <Button color='ghost'>
            <Globe color='#fff' />
          </Button>
          <Button color='ghost'>
            <Cross color='#fff' />
          </Button>
          <Button color='ghost'>
            <Comment color='#fff' />
          </Button>
          <Button color='ghost'>
            <Code color='#fff' />
          </Button>
          <Button color='ghost'>
            <Pencil color='#fff' />
          </Button>
          <Button color='ghost'>
            <Idea color='#fff' />
          </Button>
          <Button color='ghost'>
            <Setting color='#fff' />
          </Button>
          <Button color='ghost'>
            <Status color='#fff' />
          </Button>
          <Button color='ghost'>
            <TriLine color='#fff' />
          </Button>
          <Button color='ghost'>
            <Plus color='#fff' />
          </Button>
          <Button color='ghost'>
            <Sqaure color='#fff' />
          </Button>
          <Button color='ghost'>
            <Chat color='#fff' />
          </Button>
          <Button color='ghost'>
            <TwoDots color='#fff' />
          </Button>
          <Button color='ghost'>
            <GetStarted color='#fff' />
          </Button>
          <Button color='ghost'>
            <DoubleLeft color='#fff' />
          </Button>
          <Button color='ghost'>
            <DoubleRight color='#fff' />
          </Button>
          <Button color='ghost'>
            <Warning color='#fff' />
          </Button>
          <Button color='ghost'>
            <Danger color='#fff' />
          </Button>
          <Button color='ghost'>
            <Success color='#fff' />
          </Button>
          <Button color='ghost'>
            <Artificium color='#fff' />
          </Button>
          <Button color='ghost'>
            <Library color='#fff' />
          </Button>
        </div>
      </CardLayer>
    </div>
  )
}

export default Page
