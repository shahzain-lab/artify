import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { Artificium, Chat, GetStarted, Library } from '@/utils/icons'
import { Url } from 'next/dist/shared/lib/router/router'

export interface IMenu {
    title: string
    path: Url
    Icon?: ({}) => JSX.Element
    tag?: string
  }
  
export const menuItems: IMenu[] = [
    {
        title: 'Get Started',
        Icon: GetStarted,
        path: '/project'
    },
    {
        title: 'Artificium',
        Icon: Artificium,
        path: '/project/artificium'
    },
    {
        title: 'Chat',
        Icon: Chat,
        path: '/project/chat'
    },
    {
        title: 'Library',
        Icon: Library,
        path: '/project/library'
    },
]