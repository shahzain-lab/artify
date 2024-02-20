import React, { useState } from 'react'
import { IMenu } from './header/navigation/items'
import PanalRoute from './PanalRoute'

interface Props {
    menuItems: IMenu[]
    setChange: (i: number) => void
    className?: string
}

const RoutePanel = ({ menuItems, className, setChange }: Props) => {
    const [active, setActive] = useState(0)

    const handleChange = (i: number) => {
        setChange(i)
        setActive(i)
    }
    return (
        <div className={`flex items-center gap-5 md:gap-6 ${className}`}>
            {menuItems.map((item, i) => (
                <PanalRoute
                    key={i}
                    route={item}
                    index={i}
                    active={active}
                    setChange={handleChange}
                />
            ))}
        </div>
    )
}

export default RoutePanel