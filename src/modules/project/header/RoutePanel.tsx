import React from 'react'
import PanalRoute from './PanalRoute'
import { IMenu } from './navigation/items'

interface Props {
    menuItems: IMenu[]
    className?: string
}

const RoutePanel = ({ menuItems, className }: Props) => {

    return (
        <div className={`flex items-center gap-5 md:gap-6 ${className}`}>
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