import CardLayer from '@/components/elements/CardLayer'
import Color from '@/utils/Color'
import React from 'react'

const Page = () => {
  {
    /* Colors Palette */
  }
  const colors = [
    {
      title: 'Noble Black',
      stream: [
        'noble-black-900',
        'noble-black-800',
        'noble-black-700',
        'noble-black-600',
        'noble-black-500',
        'noble-black-400',
        'noble-black-300',
        'noble-black-200',
        'noble-black-100'
      ]
    },
    {
      title: 'Day Blue',
      stream: [
        'day-blue-900',
        'day-blue-800',
        'day-blue-700',
        'day-blue-600',
        'day-blue-500',
        'day-blue-400',
        'day-blue-300',
        'day-blue-200',
        'day-blue-100'
      ]
    },
    {
      title: 'Purple Blue',
      stream: [
        'purple-blue-900',
        'purple-blue-800',
        'purple-blue-700',
        'purple-blue-600',
        'purple-blue-500',
        'purple-blue-400',
        'purple-blue-300',
        'purple-blue-200',
        'purple-blue-100'
      ]
    },
    {
      title: 'Sun Glow',
      stream: [
        'sun-glow-900',
        'sun-glow-800',
        'sun-glow-700',
        'sun-glow-600',
        'sun-glow-500',
        'sun-glow-400',
        'sun-glow-300',
        'sun-glow-200',
        'sun-glow-100'
      ]
    },
    {
      title: 'Stem Green',
      stream: [
        'stem-green-900',
        'stem-green-800',
        'stem-green-700',
        'stem-green-600',
        'stem-green-500',
        'stem-green-400',
        'stem-green-300',
        'stem-green-200',
        'stem-green-100'
      ]
    },
    {
      title: 'Heisenberg Blue',
      stream: [
        'heisenberg-blue-900',
        'heisenberg-blue-800',
        'heisenberg-blue-700',
        'heisenberg-blue-600',
        'heisenberg-blue-500',
        'heisenberg-blue-400',
        'heisenberg-blue-300',
        'heisenberg-blue-200',
        'heisenberg-blue-100'
      ]
    },
    {
      title: 'Happy Orange',
      stream: ['happy-orange-300', 'happy-orange-200', 'happy-orange-100']
    },
    {
      title: 'Electric Green',
      stream: ['electric-green-300', 'electric-green-200', 'electric-green-100']
    },
    {
      title: 'Red Power',
      stream: ['red-power-300', 'red-power-200', 'red-power-100']
    }
  ]
  return (
    <div className='flex flex-col gap-3'>
      {colors.map((color, i) => (
        <CardLayer key={i} title={color.title}>
          <div className='flex flex-wrap'>
            {color.stream.map((st) => (
              <Color key={st} title='' color={`bg-${st}`} />
            ))}
          </div>
        </CardLayer>
      ))}
    </div>
  )
}

export default Page
