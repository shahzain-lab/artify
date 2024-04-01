import React from 'react'
import { IAlertProps } from '@/interfaces/IElements.interface'
{
  /* Utils */
}
import { Cross, Danger, Idea, Success, Warning } from '@/utils/icons'

const Alert: React.FC<IAlertProps> = ({
  title,
  message,
  type,
  className,
  variant = 'default',
  Icon: UserIcon,
  theme = 'default',
  onCancel
}) => {
  const Icon = ({ color }: { color?: string }) =>
    UserIcon ? (
      <UserIcon />
    ) : type === 'danger' ? (
      <Danger className={color ? color : 'text-[#D90200]'} />
    ) : type === 'idea/FYI' ? (
      <Idea className={color ? color : 'text-[#4D62E5]'} />
    ) : type === 'success' ? (
      <Success className={color ? color : 'text-[#4AC97E]'} />
    ) : (
      <Warning className={color ? color : 'text-[#FF7B20]'} />
    )
  const color =
    type === 'danger'
      ? `text-red-600`
      : type === 'idea/FYI'
        ? `text-blue-500`
        : type === 'success'
          ? `text-electric-green-600`
          : `text-happy-orange-600`
  const bgColor =
    type === 'danger'
      ? `bg-red-600`
      : type === 'idea/FYI'
        ? `bg-blue-500`
        : type === 'success'
          ? `bg-electric-green-600`
          : `bg-happy-orange-600`
  const bgBorder =
    type === 'danger'
      ? `border-red-600`
      : type === 'idea/FYI'
        ? `border-blue-500`
        : type === 'success'
          ? `border-electric-green-600`
          : `border-happy-orange-600`
  const styles = {
    main: {
      default: 'bg-noble-black-800',
      solid: bgColor,
      bordered: `border-t-2 bg-noble-black-800 ${bgBorder}`
    },
    title: {
      default: `${color}`,
      solid: `text-noble-black-100`,
      bordered: `${color}`
    }
  }
  return (
    <div
      className={`flex ${variant === 'vertical' ? 'flex-col gap-1 items-start' : 'flex-row gap-2 md:gap-4 items-center relative'} rounded-[8px] md:text-sm text-[10px] ${styles.main[theme]} p-4 ${className}`}
    >
      <div className={`${variant === 'vertical' && 'flex justify-between w-full'}`}>
        <Icon color={theme === 'solid' ? '#fff' : ''} />
        <span onClick={onCancel}>
          <Cross
            className={`${theme === 'solid' ? 'text-[#fff]' : 'text-[#686B6E]'} ${variant === 'default' && 'hidden'}`}
          />
        </span>
      </div>
      <p className='flex gap-2'>
        <span className={`${styles.title[theme]} font-medium`}>{title}</span> {message}
      </p>
      <span onClick={onCancel}>
        <Cross
          className={`${theme === 'solid' ? '#fff' : '#686B6E'} ${variant === 'vertical' && 'hidden'} absolute right-2 md:right-3`}
        />
      </span>
    </div>
  )
}

export default Alert
