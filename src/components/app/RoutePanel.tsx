import React from 'react'
import PanalRoute from './RouteItem'
import { IMenu } from '@/modules/project/header/navigation'

interface Props {
    menuItems: IMenu[]
    className?: string
}

const RoutePanel = ({ menuItems, className }: Props) => {

    return (
        <div className={`flex items-center gap-5 md:gap-8 ${className}`}>
            {menuItems.map((item, i) => (
                <PanalRoute
                    key={i}
                    route={item}
                />
            ))}
        </div>
    )
}

export default RoutePanel