import React from 'react'
import CardLayer from '@/components/elements/CardLayer'
import { Button } from '@/components/elements/Button'
import { TColor } from '@/interfaces/IElements.interface'
import { Artificium, Download, Library, Setting, Share } from '@/utils/icons'

const page = () => {
  const buttons: TColor[] = ['primary', 'destructive', 'ghost', 'green', 'warning', 'light', 'link', 'gray']
  return (
    <div>
      <div className='grid grid-cols-2 gap-2'>
        <CardLayer title='Default Buttons'>
          <div className='flex gap-2 flex-wrap'>
            {buttons.map((btn) => (
              <Button key={btn} color={btn} className='capitalize'>
                {btn}
              </Button>
            ))}
          </div>
        </CardLayer>
        <CardLayer title='Rounded Buttons'>
          <div className='flex gap-2 flex-wrap'>
            {buttons.map((btn) => (
              <Button key={btn} outlook={'rounded'} color={btn} className='capitalize'>
                {btn}
              </Button>
            ))}
          </div>
        </CardLayer>
      </div>
      <div className='grid grid-cols-2 gap-2 my-2'>
        <CardLayer title='Outline Buttons'>
          <div className='flex gap-2 flex-wrap'>
            {buttons.map((btn) => (
              <Button key={btn} color={btn} variant={`${btn}outline`} className='capitalize'>
                {btn}
              </Button>
            ))}
          </div>
        </CardLayer>
        <CardLayer title='Outline Rounded Buttons'>
          <div className='flex gap-2 flex-wrap'>
            {buttons.map((btn) => (
              <Button key={btn} variant={`${btn}outline`} outlook={'rounded'} color={btn} className='capitalize'>
                {btn}
              </Button>
            ))}
          </div>
        </CardLayer>
      </div>
      <div className='grid grid-cols-2 gap-2 my-2'>
        <CardLayer title='Buttons with icon'>
          <div className='flex gap-2 flex-wrap'>
            <Button color={'primary'} Icon={<Setting />}>
              Primary
            </Button>
            <Button color={'destructive'} Icon={<Library />}>
              Destructive
            </Button>
            <Button color={'ghost'} Icon={<Setting />}>
              Ghost
            </Button>
            <Button color={'green'} Icon={<Artificium />}>
              Green
            </Button>
            <Button color={'warning'} Icon={<Download />}>
              Warning
            </Button>
            <Button color={'light'} Icon={<Share />}>
              Light
            </Button>
          </div>
        </CardLayer>
        <CardLayer title='Rounded Buttons with icon'>
          <div className='flex gap-2 flex-wrap'>
            <Button color={'primary'} outlook={'rounded'} Icon={<Setting />}>
              Primary
            </Button>
            <Button color={'destructive'} outlook={'rounded'} Icon={<Library />}>
              Destructive
            </Button>
            <Button color={'ghost'} outlook={'rounded'} Icon={<Setting />}>
              Ghost
            </Button>
            <Button color={'green'} outlook={'rounded'} Icon={<Artificium />}>
              Green
            </Button>
            <Button color={'warning'} outlook={'rounded'} Icon={<Download />}>
              Warning
            </Button>
            <Button color={'light'} outlook={'rounded'} Icon={<Share />}>
              Light
            </Button>
          </div>
        </CardLayer>
      </div>
      <div className='grid grid-cols-2 gap-2 my-2'>
        <CardLayer title='Outline Buttons with icon'>
          <div className='flex gap-2 flex-wrap'>
            <Button color={'primary'} variant={'primaryoutline'} Icon={<Setting />}>
              Primary
            </Button>
            <Button color={'destructive'} variant={'destructiveoutline'} Icon={<Library />}>
              Destructive
            </Button>
            <Button color={'ghost'} variant={'ghostoutline'} Icon={<Setting />}>
              Ghost
            </Button>
            <Button color={'green'} variant={'greenoutline'} Icon={<Artificium />}>
              Green
            </Button>
            <Button color={'warning'} variant={'warningoutline'} Icon={<Download />}>
              Warning
            </Button>
            <Button color={'light'} variant={'lightoutline'} Icon={<Share />}>
              Light
            </Button>
          </div>
        </CardLayer>
        <CardLayer title='Outline Rounded Buttons with icon'>
          <div className='flex gap-2 flex-wrap'>
            <Button color={'primary'} variant={'primaryoutline'} outlook={'rounded'} Icon={<Setting />}>
              Primary
            </Button>
            <Button color={'destructive'} variant={'destructiveoutline'} outlook={'rounded'} Icon={<Library />}>
              Destructive
            </Button>
            <Button color={'ghost'} variant={'ghostoutline'} outlook={'rounded'} Icon={<Setting />}>
              Ghost
            </Button>
            <Button color={'green'} variant={'greenoutline'} outlook={'rounded'} Icon={<Artificium />}>
              Green
            </Button>
            <Button color={'warning'} variant={'warningoutline'} outlook={'rounded'} Icon={<Download />}>
              Warning
            </Button>
            <Button color={'light'} variant={'lightoutline'} outlook={'rounded'} Icon={<Share />}>
              Light
            </Button>
          </div>
        </CardLayer>
      </div>
    </div>
  )
}

export default page
