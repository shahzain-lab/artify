import { Button, TColor } from '@/components/elements/Button'
import CardLayer from '@/components/elements/CardLayer'
import { Artificium, Download, Library, Setting, Share } from '@/utils/icons'
import React from 'react'

const page = () => {
    const buttons: TColor[] = ['primary', 'destructive', 'ghost', 'green', 'warning', 'light', 'link', 'gray']
    return (
        <div>
            <div className='grid grid-cols-2 gap-2'>
                <CardLayer title='Default Buttons'>
                    <div className='flex gap-2 flex-wrap'>
                        {buttons.map((btn) => (
                            <Button
                                key={btn}
                                color={btn}
                                className='capitalize'>{btn}</Button>
                        ))}
                    </div>
                </CardLayer>
                <CardLayer title='Rounded Buttons'>
                    <div className='flex gap-2 flex-wrap'>
                        {buttons.map((btn) => (
                            <Button
                                key={btn}
                                outlook={'rounded'}
                                color={btn}
                                className='capitalize'
                            >{btn}</Button>
                        ))}
                    </div>
                </CardLayer>
            </div>
            <div className='grid grid-cols-2 gap-2 my-2'>
                <CardLayer title='Outline Buttons'>
                    <div className='flex gap-2 flex-wrap'>
                        {buttons.map((btn) => (
                            <Button
                                key={btn}
                                color={btn}
                                variant={'outline'}
                                className='capitalize'>{btn}</Button>
                        ))}
                    </div>
                </CardLayer>
                <CardLayer title='Outline Rounded Buttons'>
                    <div className='flex gap-2 flex-wrap'>
                        {buttons.map((btn) => (
                            <Button
                                key={btn}
                                variant={'outline'}
                                outlook={'rounded'}
                                color={btn}
                                className='capitalize'
                            >{btn}</Button>
                        ))}
                    </div>
                </CardLayer>
            </div>
            <div className='grid grid-cols-2 gap-2 my-2'>
                <CardLayer title='Buttons with icon'>
                    <div className='flex gap-2 flex-wrap'>
                        <Button
                            color={'primary'}
                            Icon={<Setting color='#000' />}
                        >Primary</Button>
                         <Button
                            color={'destructive'}
                            Icon={<Library color='#fff' />}
                        >Destructive</Button>
                         <Button
                            color={'ghost'}
                            Icon={<Setting color='#fff' />}
                        >Ghost</Button>
                         <Button
                            color={'green'}
                            Icon={<Artificium color='#fff' />}
                        >Green</Button>
                         <Button
                            color={'warning'}
                            Icon={<Download color='#fff' />}
                        >Warning</Button>
                         <Button
                            color={'light'}
                            Icon={<Share color='#fff' />}
                        >Light</Button>
                    </div>
                </CardLayer>
                <CardLayer title='Rounded Buttons with icon'>
                <div className='flex gap-2 flex-wrap'>
                        <Button
                            color={'primary'}
                            outlook={'rounded'}
                            Icon={<Setting color='#000' />}
                        >Primary</Button>
                         <Button
                            color={'destructive'}
                            outlook={'rounded'}
                            Icon={<Library color='#fff' />}
                        >Destructive</Button>
                         <Button
                            color={'ghost'}
                            outlook={'rounded'}
                            Icon={<Setting color='#fff' />}
                        >Ghost</Button>
                         <Button
                            color={'green'}
                            outlook={'rounded'}
                            Icon={<Artificium color='#fff' />}
                        >Green</Button>
                         <Button
                            color={'warning'}
                            outlook={'rounded'}
                            Icon={<Download color='#fff' />}
                        >Warning</Button>
                         <Button
                            color={'light'}
                            outlook={'rounded'}
                            Icon={<Share color='#fff' />}
                        >Light</Button>
                    </div>
                </CardLayer>
            </div>
            <div className='grid grid-cols-2 gap-2 my-2'>
                <CardLayer title='Outline Buttons with icon'>
                    <div className='flex gap-2 flex-wrap'>
                        <Button
                            color={'primary'}
                            variant={'outline'}
                            Icon={<Setting color='#B6F09C' />}
                        >Primary</Button>
                         <Button
                            color={'destructive'}
                            variant={'outline'}
                            Icon={<Library color='#ef4444' />}
                        >Destructive</Button>
                         <Button
                            color={'ghost'}
                            variant={'outline'}
                            Icon={<Setting color='#1e293b' />}
                        >Ghost</Button>
                         <Button
                            color={'green'}
                            variant={'outline'}
                            Icon={<Artificium color='#10b981' />}
                        >Green</Button>
                         <Button
                            color={'warning'}
                            variant={'outline'}
                            Icon={<Download color='#eab308' />}
                        >Warning</Button>
                         <Button
                            color={'light'}
                            variant={'outline'}
                            Icon={<Share color='#686B6E' />}
                        >Light</Button>
                    </div>
                </CardLayer>
                <CardLayer title='Outline Rounded Buttons with icon'>
                <div className='flex gap-2 flex-wrap'>
                        <Button
                            color={'primary'}
                            variant={'outline'}
                            outlook={'rounded'}
                            Icon={<Setting color='#B6F09C' />}
                        >Primary</Button>
                         <Button
                            color={'destructive'}
                            variant={'outline'}
                            outlook={'rounded'}
                            Icon={<Library color='#ef4444' />}
                        >Destructive</Button>
                         <Button
                            color={'ghost'}
                            variant={'outline'}
                            outlook={'rounded'}
                            Icon={<Setting color='#1e293b' />}
                        >Ghost</Button>
                         <Button
                            color={'green'}
                            variant={'outline'}
                            outlook={'rounded'}
                            Icon={<Artificium color='#10b981' />}
                        >Green</Button>
                         <Button
                            color={'warning'}
                            variant={'outline'}
                            outlook={'rounded'}
                            Icon={<Download color='#eab308' />}
                        >Warning</Button>
                         <Button
                            color={'light'}
                            variant={'outline'}
                            outlook={'rounded'}
                            Icon={<Share color='#686B6E' />}
                        >Light</Button>
                    </div>
                </CardLayer>
            </div>
        </div>
    )
}

export default page