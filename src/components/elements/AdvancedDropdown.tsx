'use client'
import React, { FC, useState } from 'react'
import Typography from './Typography';
import Divider from './Divider';

interface IHeader {
    title?: React.ReactNode | string;
    tag?: React.ReactNode | string
}

interface IList {
    icon?: JSX.Element;
    title?: React.ReactNode | string;
    desc?: React.ReactNode | string
}

interface Props {
    children: React.ReactNode
    header?: IHeader;
    list?: IList[];
    footer?: React.ReactNode;
}

const AdvancedDropdown: FC<Props> = ({ children, header, list, footer }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className='relative'>
            <button onClick={() => setOpen(!open)}>{children}</button>
            {open && (
                <div className='absolute right-0 w-72 bg-glass-fill p-3 rounded-md'>
                    {header && (
                        <div className='flex justify-between items-center'>
                            <Typography>{header.title}</Typography>
                            <span>{header.tag}</span>
                        </div>
                    )}
                    <Divider />
                    {list && list.map((lst) => (
                        <div className='flex justify-between items-center'>
                            <Typography>{lst.title}</Typography>
                            <span>{lst.desc}</span>
                        </div>
                    ))}
                    <Divider />
                    {footer && (
                        <div>{footer}</div>
                    )}
                </div>
            )}
        </div>
    )
}

export default AdvancedDropdown