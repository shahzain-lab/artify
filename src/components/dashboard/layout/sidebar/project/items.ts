import square from '@/assets/icons/square.svg'
import triangle from '@/assets/icons/triangle.svg'
import square2 from '@/assets/icons/square-2.svg'
import octagon from '@/assets/icons/octagon.svg'
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
        heading: 'PROJECTS'
    },
    {
        title: 'Orbital Oddysey',
        icon: square,
        path: '/search-tab'
    },
    {
        title: 'Digital Product Launch',
        icon: triangle,
        path: '/billing'
    },
    {
        title: 'Brand Refresh',
        icon: square2,
        path: '/billing'
    },
    {
        title: 'Social Media Strategy',
        icon: octagon,
        path: '/billing'
    },
]