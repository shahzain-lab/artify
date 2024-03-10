import { StaticImageData } from "next/image";
import { IComments, IUser } from "./app.interface";

export type TColor = "primary" | "destructive" | "secondary" | 'blue' | "ghost" | "link" | "green" | "warning" | "gray" | "light"

export interface IAlertProps {
    title: string;
    message: string;
    type?: 'warning' | 'danger' | 'idea/FYI' | 'success';
    className?: string
    variant?: 'default' | 'vertical';
    Icon?: () => React.JSX.Element;
    theme?: 'default' | 'solid' | 'bordered';
    onCancel?: () => void;
}

export interface ICardProps {
    image?: StaticImageData;
    content?: string | React.ReactNode;
    title?: string | React.ReactNode;
    tags?: string[];
    icon?: React.ReactNode;
    position?: 'vertical' | 'horizontal';
    variant?: 'primary';
    theme?: 'solid' | 'bordered' | 'default';
    classNames?: {title?: string; content?: string; base?: string};
    children?: React.ReactNode;
    handler?: {title: string, onClick: () => void};
    handler2?: {title: string, onClick: () => void};
  }
 
export interface ITaskCardProps {
    id: string;
    images?: (StaticImageData | string)[];
    content?: string | React.ReactNode;
    title?: string | React.ReactNode;
    classNames?: string;
    created?: Date;
    tags?: string[];
    children?: React.ReactNode;
    variant?: 'primary';
    comments?: IComments[];
    likes?: number;
    users?: IUser[];
}


export interface IDropdownProps {
    title?: string | React.ReactNode;
    children?: React.ReactNode;
    classNames?: {button?: string; base?: string; items?: string; item?: string};  
    options?: string[];  
    Icon?: boolean | React.ReactNode;
    color?: TColor;
}