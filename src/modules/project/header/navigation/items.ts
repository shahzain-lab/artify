import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { Artificium, Chat, GetStarted, Library } from '@/shared/icons'

export interface IMenu {
    title: string
    path?: string
    Icon?: ({}) => JSX.Element
    tag?: string
  }
  
export const menuItems: IMenu[] = [
    {
        title: 'Get Started',
        Icon: GetStarted
    },
    {
        title: 'Artificium',
        Icon: Artificium
    },
    {
        title: 'Chat',
        Icon: Chat
    },
    {
        title: 'Library',
        Icon: Library
    },
]