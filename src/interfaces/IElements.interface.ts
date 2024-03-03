import { StaticImageData } from "next/image";



export interface IAlertProps {
    title: string;
    message: string;
    type?: 'warning' | 'danger' | 'idea/FYI' | 'success';
    className?: string
    variant?: 'default' | 'vertical';
    Icon?: () => React.JSX.Element;
    theme?: 'default' | 'solid' | 'bordered'
    onCancel?: () => void;
}

export interface ICardProps {
    image?: StaticImageData;
    content?: React.ReactNode;
    title: string;
    tags?: string[];
    icon?: React.ReactNode;
    theme?: 'solid' | 'bordered' | 'default';
    classNames?: {title: string; content: string; base: string};
    onCancel?: () => void;
    onClick?: () => void;
  }