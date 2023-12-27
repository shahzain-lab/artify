import search from '@/assets/icons/search.svg'
import searchCommand from '@/assets/icons/search-command.svg'
import creditCard from '@/assets/icons/credit-card.svg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export interface IMenu {
    title?: string
    heading?: string
    path?: string
    icon?: string | StaticImport 
    tag?: string
  }

  
export const IMenuItems: IMenu[] = [
    {
        heading: 'GENERAL'
    },
    {
        title: 'Search',
        icon: search,
        path: '/search-tab',
        tag: searchCommand
    },
    {
        title: 'Billing',
        icon: creditCard,
        path: '/billing'
    },
]