'use client'
import { TColor } from '@/interfaces/IElements.interface';
import { cn } from '@/lib/utils';
import React, { useState, Children, cloneElement, ReactNode } from 'react';

interface TabProps {
    id: number;
    title: string;
    onClick?: (id: number) => void;
    isActive?: boolean;
    Icon?: ReactNode;
    position?: 'left' | 'right';
    children?: ReactNode;
    className?: string;
    variant?: 'solid' | 'underline';
    color?: TColor;
}

const Tab: React.FC<TabProps> = ({
    id,
    title,
    onClick,
    isActive,
    Icon,
    position = 'left',
    className,
    variant = 'solid',
    color = 'destructive'
}) => {

    const styles = {
        solid: {
            primary: "bg-theme-greenish text-slate-950",
            green: "bg-emerald-500 text-white",
            gray: "bg-noble-black-600 text-gray",
            warning: "bg-yellow-500 text-white",
            light: "bg-noble-black-400 text-white",
            destructive: "bg-red-500 text-white",
            secondary: "bg-slate-100 text-slate-900 ",
            blue: "bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300",
            ghost: "bg-slate-800 text-white",
            link: "text-blue-500 underline-offset-4 underline ",
            white: 'text-gray-900 bg-white',
            black: 'text-white bg-black'
        },
        underline: {
            primary: "border-b-[3px] rounded-[0px] border-theme-greenish text-theme-greenish",
            green: "border-b-[3px] rounded-[0px] border-emerald-500 text-emerald-500",
            gray: "border-b-[3px] rounded-[0px] border-noble-black-600 text-noble-black-600",
            warning: "border-b-[3px] rounded-[0px] border-yellow-500 text-yellow-500",
            light: "border-b-[3px] rounded-[0px] border-noble-black-400 text-noble-black-400",
            destructive: "border-b-[3px] rounded-[0px] border-red-500 text-red-500",
            secondary: "border-b-[3px] rounded-[0px] border-slate-100 text-slate-100 ",
            blue: "border-b-[3px] rounded-[0px] border-blue-700 text-blue-700",
            ghost: "border-b-[3px] rounded-[0px] border-none text-white",
            link: "text-blue-500 underline-offset-4 underline ",
            white: 'text-gray-900 bg-white',
            black: 'text-white bg-black'
        }
    }
    return (
        <button
            onClick={() => onClick && onClick(id)}
            className={cn(
                'px-4 py-2 text-sm flex items-center justify-center gap-1 rounded focus:outline-none',
                isActive ? styles[variant][color] : styles[variant].ghost,
                className
            )}
        >
            {position === 'left' && (
                <>{Icon}</>
            )}
            {title}
            {position === 'right' && (
                <>{Icon}</>
            )}
        </button>
    );
};

interface TabsProps {
    children?: ReactNode;
    defaultTab?: number;
    orientation?: 'vertical' | 'horizontal';
    className?: string
}

const Tabs: React.FC<TabsProps> = ({
    children,
    defaultTab = 0,
    orientation = 'horizontal',
    className
}) => {
    const [activeTab, setActiveTab] = useState(defaultTab);

    const handleTabClick = (tabId: number) => {
        setActiveTab(tabId);
    };
    const totalTabs = Children.count(children);
    const gridItems = orientation === 'vertical' ? ` grid-rows-${totalTabs} mr-4 ` : `mb-4 grid-cols-${totalTabs}`;

    return (
        <div className={cn(
            'flex w-full',
            orientation === 'vertical' ? 'flex-row' : 'flex-col',
        )}>
            <div className={cn(
                'p-3 rounded-xl bg-noble-black-800 shadow-md',
                `grid`,
                gridItems,
                className
            )}>
                {Children.map(children, (child, index) => (
                    cloneElement(child as React.ReactElement<TabProps>, {
                        onClick: handleTabClick,
                        isActive: activeTab === index,
                    })
                ))}
            </div>
            <div>
                {Children.map(children, (child, index) =>
                    <div
                        key={index}
                    >
                        {index === activeTab && (child as React.ReactElement).props.children}
                    </div>
                )}
            </div>
        </div>
    );
};

export { Tabs, Tab };
