import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

export const CheveronRight = ({ className }: Props) => {
  return (
    <svg
      className={cn('#9B9C9E', className)}
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
    >
      <path
        d='M7.5 5L11.9107 9.41074C12.2362 9.73618 12.2362 10.2638 11.9107 10.5893L7.5 15'
        stroke={'currentColor'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const CheveronDown = ({ className }: Props) => {
  return (
    <svg
      className={cn('#9B9C9E', className)}
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
    >
      <path
        d='M15 8.33334L10.5893 12.7441C10.2638 13.0695 9.73618 13.0695 9.41074 12.7441L5 8.33334'
        stroke={'currentColor'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const Download = ({ className }: Props) => {
  return (
    <svg
      className={cn('#686B6E', className)}
      width='22'
      height='22'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M20 14V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14M12 15L8 11M12 15L16 11M12 15V4'
        stroke={'currentColor'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const Share = ({ className }: Props) => {
  return (
    <svg
      className={cn('#686B6E', className)}
      width='16'
      height='16'
      viewBox='0 0 18 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.4271 14.4563C11.156 14.9073 11 15.4354 11 16C11 17.6569 12.3431 19 14 19C15.6569 19 17 17.6569 17 16C17 14.3431 15.6569 13 14 13C12.9077 13 11.9518 13.5837 11.4271 14.4563ZM11.4271 14.4563L6.57287 11.5437M6.57287 11.5437C6.84405 11.0927 7 10.5646 7 10C7 9.43543 6.84405 8.90728 6.57287 8.45628M6.57287 11.5437C6.04822 12.4163 5.09228 13 4 13C2.34315 13 1 11.6569 1 10C1 8.34315 2.34315 7 4 7C5.09228 7 6.04822 7.58374 6.57287 8.45628M6.57287 8.45628L11.4271 5.54372M11.4271 5.54372C11.9518 6.41626 12.9077 7 14 7C15.6569 7 17 5.65685 17 4C17 2.34315 15.6569 1 14 1C12.3431 1 11 2.34315 11 4C11 4.56458 11.156 5.09272 11.4271 5.54372Z'
        stroke={'currentColor'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const Lock = ({ className }: Props) => {
  return (
    <svg
      className={cn('#9B9C9E', className)}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M8 10V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V10M12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15ZM12 15V17M7 20H17C18.1046 20 19 19.1046 19 18V12C19 10.8954 18.1046 10 17 10H7C5.89543 10 5 10.8954 5 12V18C5 19.1046 5.89543 20 7 20Z'
        stroke={'cuurentColor'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const Globe = ({ className }: Props) => {
  return (
    <svg
      className={cn('#9B9C9E', className)}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M3 12C3 7.02944 7.02944 3 12 3'
        stroke={'currentColor'}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}

export const Cross = ({ className }: Props) => {
  return (
    <svg
      className={cn('text-[#686B6E]', className)}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='cross'>
        <path
          id='icon'
          d='M4.16699 4.16666L15.8337 15.8333M15.8337 4.16666L4.16699 15.8333'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
        />
      </g>
    </svg>
  )
}

export const Watch = ({ className }: Props) => {
  return (
    <svg
      className={cn('#CDCECF', className)}
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7 4.33333V6.17157C7 6.70201 6.78929 7.21071 6.41421 7.58579L5.66667 8.33333M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const Comment = ({ className }: Props) => {
  return (
    <svg
      className={cn('w-5 h-5 text-[#38A7B6]', className)}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12V21H12Z'
        stroke={'currentColor'}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}

export const Code = ({ className }: Props) => {
  return (
    <svg
      className={cn('#38D7ED', className)}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.99985 8L3.70696 11.2929C3.31643 11.6834 3.31643 12.3166 3.70696 12.7071L6.99985 16M16.9998 8L20.2927 11.2929C20.6833 11.6834 20.6833 12.3166 20.2927 12.7071L16.9998 16M13.9998 6L9.99985 18'
        stroke={'currentColor'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const Pencil = ({ className }: Props) => {
  return (
    <svg
      className={cn('#BD9AF8', className)}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13 7L4.58579 15.4142C4.21071 15.7893 4 16.298 4 16.8284V18C4 19.1046 4.89543 20 6 20H7.17157C7.70201 20 8.21071 19.7893 8.58579 19.4142L17 11M13 7L14.5858 5.41421C15.3668 4.63317 16.6332 4.63317 17.4142 5.41421L18.5858 6.58579C19.3668 7.36684 19.3668 8.63317 18.5858 9.41421L17 11M13 7L17 11'
        stroke={'currentColor'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const Moon = ({ className }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      className={cn('text-[#fff]', className)}
      viewBox="0 0 30 30" id="moon">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M20.63 20a9 9 0 0 1-9.12-8.78A8.61 8.61 0 0 1 14.17 5 10.17 10.17 0 0 0 5 15a10.23 10.23 0 0 0 10.42 10A10.43 10.43 0 0 0 25 18.9a9.3 9.3 0 0 1-4.37 1.1Z"></path>
    </svg>
  )
}

export const DayLight = ({ className }: Props) => {
  return (
    <svg
      width="22"
      height="22"
      className={cn('text-[#000] ', className)}
      viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 1V5M11 17V21M3.93 3.93L6.76 6.76M15.24 15.24L18.07 18.07M1 11H5M17 11H21M3.93 18.07L6.76 15.24M15.24 6.76L18.07 3.93"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round" />
    </svg>
  )
}

export const Idea = ({ className }: Props) => {
  return (
    <svg
      className={cn('#FFD147', className)}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.57143 16V17.5714C8.57143 19.465 10.1065 21 12 21V21C13.8935 21 15.4286 19.465 15.4286 17.5714V16M8.57143 16V15.3508C8.57143 14.7092 8.2476 14.1213 7.79785 13.6636C6.68829 12.5345 6 10.9617 6 9.22222C6 5.78578 8.68629 3 12 3C15.3137 3 18 5.78578 18 9.22222C18 10.9617 17.3117 12.5345 16.2022 13.6636C15.7524 14.1213 15.4286 14.7092 15.4286 15.3508V16M8.57143 16H15.4286'
        stroke={'currentColor'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const Setting = ({ className }: Props) => {
  return (
    <svg
      className={cn('#686B6E', className)}
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z'
        stroke={'currentColor'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.90136 6.7469C5.96492 6.20624 4.76749 6.52709 4.22684 7.46353L4.1851 7.53583C3.64424 8.47263 3.96521 9.67051 4.902 10.2114L5.1448 10.3515C5.71742 10.6821 6 11.3388 6 12C6 12.6612 5.71742 13.3179 5.1448 13.6485L4.902 13.7886C3.96521 14.3295 3.64424 15.5274 4.1851 16.4642L4.22684 16.5365C4.7675 17.4729 5.96492 17.7938 6.90136 17.2531L7.14546 17.1122C7.71803 16.7816 8.42331 16.863 8.9953 17.1946C9.56711 17.526 10 18.1005 10 18.7614V19.0427C10 20.1237 10.8763 21 11.9573 21H12.0427C13.1237 21 14 20.1237 14 19.0427V18.7614C14 18.1005 14.4329 17.5261 15.0047 17.1946C15.5767 16.863 16.282 16.7816 16.8545 17.1122L17.0986 17.2531C18.0351 17.7938 19.2325 17.4729 19.7732 16.5365L19.8149 16.4642C20.3558 15.5274 20.0348 14.3295 19.098 13.7886L18.8552 13.6485C18.2826 13.3179 18 12.6612 18 12C18 11.3388 18.2826 10.6821 18.8552 10.3515L19.098 10.2114C20.0348 9.6705 20.3558 8.47262 19.8149 7.53581L19.7732 7.46353C19.2325 6.52709 18.0351 6.20623 17.0986 6.74689L16.8545 6.88783C16.282 7.2184 15.5767 7.13699 15.0047 6.80541C14.4329 6.47395 14 5.89952 14 5.23859V4.95728C14 3.8763 13.1237 3 12.0427 3L11.9573 3C10.8763 3 10 3.8763 10 4.95727V5.23858C10 5.89952 9.56711 6.47395 8.9953 6.80542C8.42331 7.13699 7.71803 7.2184 7.14546 6.88783L6.90136 6.7469Z'
        stroke={'currentColor'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const Status = ({ className }: Props) => {
  return (
    <svg
      className={cn('#4AC97E', className)}
      xmlns='http://www.w3.org/2000/svg'
      width='31'
      height='31'
      viewBox='0 0 31 31'
      fill='none'
    >
      <rect x='10.333' y='10' width='10.6667' height='10.6667' rx='5.33333' stroke='#131619' strokeWidth='4' />
      <g filter='url(#filter0_d_845_2875)'>
        <ellipse cx='15.6663' cy='15.3333' rx='3.33333' ry='3.33333' fill={'currentColor'} />
      </g>
      <defs>
        <filter
          id='filter0_d_845_2875'
          x='0.333008'
          y='0'
          width='30.667'
          height='30.6667'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='6' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix type='matrix' values='0 0 0 0 0.290196 0 0 0 0 0.788235 0 0 0 0 0.494118 0 0 0 0.48 0' />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_845_2875' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_845_2875' result='shape' />
        </filter>
      </defs>
    </svg>
  )
}

export const TriLine = ({ className }: Props) => {
  return (
    <svg
      className={cn('text-[#363A3D]', className)}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <g clip-path='url(#clip0_335_8613)'>
        <path d='M12 0V12H24' stroke={'currentColor'} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      </g>
      <defs>
        <clipPath id='clip0_335_8613'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export const Plus = ({ className }: Props) => {
  return (
    <svg
      className={cn('#CDCECF', className)}
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
    >
      <path
        d='M10.0003 4.16669V10M10.0003 10V15.8334M10.0003 10H15.8337M10.0003 10H4.16699'
        stroke={'currentColor'}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}

export const Sqaure = ({ className }: Props) => {
  return (
    <svg
      className={cn('#686B6E', className)}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='1'
        y='1'
        width='18'
        height='18'
        rx='3'
        stroke={'currentColor'}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}

export const ChatGradient = ({ className }: Props) => {
  return (
    <svg
      className={cn(className)}
      xmlns='http://www.w3.org/2000/svg'
      width='17'
      height='16'
      viewBox='0 0 17 16'
      fill='none'
    >
      <path
        d='M11.334 2H5.33398C3.67713 2 2.33398 3.34315 2.33398 5V9.33333C2.33398 10.4379 3.22942 11.3333 4.33398 11.3333C4.70217 11.3333 5.00065 11.6318 5.00065 12V12.3096C5.00065 13.1794 6.05228 13.615 6.66732 13L8.04109 11.6262C8.22863 11.4387 8.48298 11.3333 8.7482 11.3333H11.334C12.9908 11.3333 14.334 9.99019 14.334 8.33333V5C14.334 3.34315 12.9908 2 11.334 2Z'
        stroke='url(#paint0_linear_350_5612)'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <defs>
        <linearGradient
          id='paint0_linear_350_5612'
          x1='2.33398'
          y1='14.6667'
          x2='14.9822'
          y2='2.68419'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#82DBF7' />
          <stop offset='1' stop-color='#B6F09C' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const Chat = ({ className }: Props) => {
  return (
    <svg
      className={cn('w-4 h-4 text-[#686B6E]', className)}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M18 3H6C4.34315 3 3 4.34315 3 6V15.7574C3 16.553 3.31607 17.3161 3.87868 17.8787L6.71967 20.7197C7.19214 21.1921 8 20.8575 8 20.1893V19C8 17.8954 8.89543 17 10 17H18C19.6569 17 21 15.6569 21 14V6C21 4.34315 19.6569 3 18 3Z'
        stroke={'currentColor'}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}

export const TwoDots = ({ className }: Props) => {
  return (
    <svg
      className={cn('dark:text-[#686B6E] text-[#484a4c]', className)}
      xmlns='http://www.w3.org/2000/svg'
      width='21'
      height='20'
      viewBox='0 0 21 20'
      fill='none'
    >
      <path
        d='M12.7507 6.25001C12.7507 7.4006 11.8179 8.33334 10.6673 8.33334C9.51672 8.33334 8.58398 7.4006 8.58398 6.25001C8.58398 5.09941 9.51672 4.16667 10.6673 4.16667C11.8179 4.16667 12.7507 5.09941 12.7507 6.25001Z'
        fill={'currentColor'}
      />
      <path
        d='M12.7507 13.75C12.7507 14.9006 11.8179 15.8333 10.6673 15.8333C9.51672 15.8333 8.58398 14.9006 8.58398 13.75C8.58398 12.5994 9.51672 11.6667 10.6673 11.6667C11.8179 11.6667 12.7507 12.5994 12.7507 13.75Z'
        fill={'currentColor'}
      />
    </svg>
  )
}

export const GetStarted = ({ className }: Props) => {
  return (
    <svg
      className={cn('w-5 h-5 text-[#686B6E]', className)}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='magic-wand'>
        <path
          id='icon'
          d='M10.5002 10.5L12.586 8.41421C13.367 7.63316 14.6334 7.63317 15.4144 8.41421L15.586 8.58579C16.367 9.36684 16.367 10.6332 15.586 11.4142L13.5002 13.5M10.5002 10.5L3.4144 17.5858C2.63335 18.3668 2.63335 19.6332 3.4144 20.4142L3.58597 20.5858C4.36702 21.3668 5.63335 21.3668 6.4144 20.5858L13.5002 13.5M10.5002 10.5L13.5002 13.5M8.29953 8.35722L6.00019 7.38534M11.3401 5.31499L10.4105 3M15.6457 5.31499L16.5752 3M18.6847 8.35353L20.9895 7.3949M18.6847 12.6465L21.0002 13.5794M15.6421 15.6865L16.5753 18'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  )
}

export const DoubleLeft = ({ className }: Props) => {
  return (
    <svg
      className={cn('text-[#686B6E]', className)}
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.04964 8.46686C1.63189 8.88461 1.63189 9.56304 2.04964 9.98079L7.39686 15.328C7.81462 15.7458 8.49304 15.7458 8.9108 15.328C9.32855 14.9103 9.32855 14.2318 8.9108 13.8141L4.31887 9.22215L8.90745 4.63022C9.32521 4.21247 9.32521 3.53404 8.90745 3.11629C8.4897 2.69854 7.81127 2.69854 7.39352 3.11629L2.0463 8.46351L2.04964 8.46686ZM13.8135 3.11963L8.46631 8.46686C8.04856 8.88461 8.04856 9.56304 8.46631 9.98079L13.8135 15.328C14.2313 15.7458 14.9097 15.7458 15.3275 15.328C15.7452 14.9103 15.7452 14.2318 15.3275 13.8141L10.7355 9.22215L15.3241 4.63022C15.7419 4.21247 15.7419 3.53404 15.3241 3.11629C14.9064 2.69854 14.2279 2.69854 13.8102 3.11629L13.8135 3.11963Z'
        fill={'currentColor'}
      />
    </svg>
  )
}

export const DoubleRight = ({ className }: Props) => {
  return (
    <svg
      className={cn('text-[#686B6E]', className)}
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.9504 9.67597C16.3681 9.25821 16.3681 8.57978 15.9504 8.16203L10.6031 2.81481C10.1854 2.39706 9.50696 2.39706 9.08921 2.81481C8.67145 3.23256 8.67145 3.91099 9.08921 4.32874L13.6811 8.92067L9.09255 13.5126C8.67479 13.9303 8.67479 14.6088 9.09255 15.0265C9.5103 15.4443 10.1887 15.4443 10.6065 15.0265L15.9537 9.67931L15.9504 9.67597ZM4.18647 15.0232L9.53369 9.67597C9.95144 9.25821 9.95144 8.57978 9.53369 8.16203L4.18647 2.81481C3.76872 2.39706 3.09029 2.39706 2.67254 2.81481C2.25479 3.23256 2.25479 3.91099 2.67254 4.32874L7.26446 8.92067L2.67588 13.5126C2.25813 13.9303 2.25813 14.6088 2.67588 15.0265C3.09363 15.4443 3.77206 15.4443 4.18981 15.0265L4.18647 15.0232Z'
        fill={'currentColor'}
      />
    </svg>
  )
}

export const GroupUser = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={cn(
        'text-[#686B6E]',
        className
      )}
    >
      <path d="M12 20C12 17.7909 10.2091 16 8 16H6C3.79086 16 2 17.7909 2 20M22 17C22 14.7909 20.2091 13 18 13H16C14.8053 13 13.7329 13.5238 13 14.3542M10 10C10 11.6569 8.65685 13 7 13C5.34315 13 4 11.6569 4 10C4 8.34315 5.34315 7 7 7C8.65685 7 10 8.34315 10 10ZM20 7C20 8.65685 18.6569 10 17 10C15.3431 10 14 8.65685 14 7C14 5.34315 15.3431 4 17 4C18.6569 4 20 5.34315 20 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const IconPlus = ({ className }: Props) => {
  return (
    <svg
      className={cn('text-[#050505]', className)}
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.85702 5.71518C9.69044 5.71518 10.4897 6.04626 11.079 6.63557C11.6684 7.22489 11.9994 8.02417 11.9994 8.85759C11.9994 9.69101 11.6684 10.4903 11.079 11.0796C10.4897 11.6689 9.69044 12 8.85702 12C8.0236 12 7.22432 11.6689 6.635 11.0796C6.04569 10.4903 5.71461 9.69101 5.71461 8.85759C5.71461 8.02417 6.04569 7.22489 6.635 6.63557C7.22432 6.04626 8.0236 5.71518 8.85702 5.71518ZM5.71461 0C8.87073 0 11.4292 2.55849 11.4292 5.71461C11.4292 5.86488 11.4235 6.014 11.4121 6.16141C11.1606 5.92273 10.8769 5.72042 10.5693 5.56035C10.5392 4.6133 10.2328 3.69574 9.68768 2.92069C9.14261 2.14565 8.38273 1.54695 7.50166 1.19836C6.62058 0.849772 5.65679 0.766505 4.72898 0.958819C3.80118 1.15113 2.94988 1.61063 2.27996 2.28071C1.61003 2.95079 1.15073 3.80218 0.958629 4.73003C0.766527 5.65788 0.850014 6.62166 1.19881 7.50265C1.5476 8.38365 2.14646 9.14338 2.92164 9.68828C3.69681 10.2332 4.61444 10.5394 5.56149 10.5693C5.72147 10.8779 5.9243 11.1613 6.16141 11.4115C6.01457 11.4229 5.86545 11.4287 5.71461 11.4287C2.55849 11.4287 0 8.87016 0 5.71461C0 2.55906 2.55849 0.000571374 5.71461 0.000571374M8.85702 6.85673L8.8056 6.86131C8.74852 6.87173 8.69597 6.8993 8.65494 6.94033C8.61391 6.98136 8.58635 7.03391 8.57592 7.09099L8.57135 7.14241V8.57078L7.14184 8.57192L7.09042 8.57649C7.03334 8.58692 6.98078 8.61448 6.93975 8.65551C6.89873 8.69654 6.87116 8.74909 6.86073 8.80617L6.85616 8.85759L6.86073 8.90901C6.87116 8.96609 6.89873 9.01864 6.93975 9.05967C6.98078 9.1007 7.03334 9.12827 7.09042 9.13869L7.14184 9.14327H8.57135V10.5739L8.57592 10.6253C8.58645 10.6823 8.61406 10.7347 8.65508 10.7757C8.6961 10.8166 8.7486 10.8441 8.8056 10.8544L8.85702 10.8596L8.90844 10.8544C8.96552 10.844 9.01807 10.8165 9.0591 10.7754C9.10013 10.7344 9.1277 10.6818 9.13812 10.6248L9.1427 10.5733V9.14269L10.5728 9.14327L10.6242 9.13869C10.6813 9.12827 10.7338 9.1007 10.7749 9.05967C10.8159 9.01864 10.8435 8.96609 10.8539 8.90901L10.859 8.85759L10.8545 8.80617C10.844 8.74901 10.8163 8.6964 10.7752 8.65537C10.7341 8.61433 10.6814 8.58681 10.6242 8.57649L10.5728 8.57192H9.1427V7.14355L9.13812 7.09213C9.1278 7.03495 9.10028 6.98227 9.05925 6.94113C9.01821 6.89999 8.9656 6.87234 8.90844 6.86188L8.85702 6.85673ZM3.69319 7.30524C4.06841 7.7829 4.60083 8.11207 5.19583 8.23425C5.14706 8.51907 5.13191 8.80863 5.15069 9.09699C4.30759 8.95768 3.54726 8.50759 3.01957 7.83545C2.94926 7.74613 2.91731 7.63253 2.93076 7.51964C2.94421 7.40676 3.00195 7.30385 3.09127 7.23354C3.1806 7.16323 3.2942 7.13128 3.40708 7.14473C3.51996 7.15818 3.62288 7.21591 3.69319 7.30524ZM4.00057 3.85831C4.09602 3.85561 4.19104 3.87207 4.28002 3.90674C4.36899 3.9414 4.45011 3.99355 4.51858 4.06011C4.58705 4.12667 4.64148 4.20628 4.67864 4.29424C4.7158 4.3822 4.73495 4.47672 4.73495 4.5722C4.73495 4.66769 4.7158 4.76221 4.67864 4.85017C4.64148 4.93813 4.58705 5.01774 4.51858 5.0843C4.45011 5.15086 4.36899 5.20301 4.28002 5.23767C4.19104 5.27234 4.09602 5.2888 4.00057 5.2861C3.81473 5.28084 3.63826 5.20332 3.50867 5.07002C3.37908 4.93671 3.30659 4.75812 3.30659 4.5722C3.30659 4.38629 3.37908 4.2077 3.50867 4.07439C3.63826 3.94108 3.81473 3.86356 4.00057 3.85831ZM7.42865 3.85831C7.5241 3.85561 7.61913 3.87207 7.7081 3.90674C7.79707 3.9414 7.8782 3.99355 7.94666 4.06011C8.01513 4.12667 8.06956 4.20628 8.10672 4.29424C8.14389 4.3822 8.16304 4.47672 8.16304 4.5722C8.16304 4.66769 8.14389 4.76221 8.10672 4.85017C8.06956 4.93813 8.01513 5.01774 7.94666 5.0843C7.8782 5.15086 7.79707 5.20301 7.7081 5.23767C7.61913 5.27234 7.5241 5.2888 7.42865 5.2861C7.24281 5.28084 7.06635 5.20332 6.93676 5.07002C6.80717 4.93671 6.73467 4.75812 6.73467 4.5722C6.73467 4.38629 6.80717 4.2077 6.93676 4.07439C7.06635 3.94108 7.24281 3.86356 7.42865 3.85831Z'
        fill={'currentColor'}
      />
    </svg>
  )
}

export const AngleBR = ({ className }: Props) => {
  return (
    <svg
      className={cn('text-[#363A3D]', className)}
      width='34'
      height='94'
      viewBox='0 0 34 94'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 0.838623V84.8386C1 89.2569 4.58172 92.8386 9 92.8386H33'
        stroke={'currentColor'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

// export const Idea = ({ color = '#4D62E5' }) => (
//     <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M3.14286 12.3333V13.6429C3.14286 15.2208 4.42204 16.5 6 16.5V16.5C7.57796 16.5 8.85714 15.2208 8.85714 13.6429V12.3333M3.14286 12.3333V11.9627C3.14286 11.321 2.81521 10.7353 2.38089 10.2629C1.52531 9.33241 1 8.07241 1 6.68519C1 3.82149 3.23858 1.5 6 1.5C8.76142 1.5 11 3.82149 11 6.68519C11 8.07241 10.4747 9.33241 9.61911 10.2629C9.18479 10.7353 8.85714 11.321 8.85714 11.9627V12.3333M3.14286 12.3333H8.85714"
//             stroke={'currentColor'}
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round" />
//     </svg>
// )

export const Warning = ({ className }: Props) => (
  <svg
    className={cn('text-[#FF7B20]', className)}
    width='18'
    height='18'
    viewBox='0 0 18 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M9.00016 6.49994V9.83327M9.00016 13.1666H9.00849M13.9386 16.4999H4.06167C2.16016 16.4999 0.954754 14.4613 1.87113 12.7951L7.5398 2.48847C8.17301 1.33718 9.82731 1.33718 10.4605 2.48847L16.1292 12.7951C17.0456 14.4613 15.8402 16.4999 13.9386 16.4999Z'
      stroke={'currentColor'}
      strokeWidth='1.5'
      strokeLinecap='round'
    />
  </svg>
)

export const Danger = ({ className }: Props) => (
  <svg
    className={cn('text-[#D90200]', className)}
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M8.00007 4.66663V7.99997M8.00007 11.3333H8.00841M1.50488 5.69334V10.3066C1.50488 11.1998 1.98138 12.0251 2.75488 12.4717L6.75007 14.7783C7.52358 15.2249 8.47657 15.2249 9.25007 14.7783L13.2453 12.4717C14.0188 12.0251 14.4953 11.1998 14.4953 10.3066V5.69334C14.4953 4.80018 14.0188 3.97486 13.2453 3.52828L9.25007 1.22166C8.47657 0.775073 7.52358 0.775073 6.75007 1.22166L2.75488 3.52828C1.98138 3.97486 1.50488 4.80018 1.50488 5.69334Z'
      stroke={'currentColor'}
      strokeWidth='1.5'
      strokeLinecap='round'
    />
  </svg>
)

export const Success = ({ className }: Props) => (
  <svg
    className={cn('text-[#4AC97E]', className)}
    width='18'
    height='18'
    viewBox='0 0 18 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M5.66667 9L7.57741 10.9107C7.90285 11.2362 8.43049 11.2362 8.75592 10.9107L12.3333 7.33333M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z'
      stroke={'currentColor'}
      strokeWidth='1.5'
      strokeLinecap='round'
    />
  </svg>
)

export const Artificium = ({ className }: Props) => {
  return (
    <svg
      className={cn('w-4 h-4 text-[#686B6E]', className)}
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M15.4221 7.30751L20.7806 18.0276C21.4632 19.3932 20.4704 21 18.9441 21H15.4221M15.4221 7.30751L13.8365 4.13535C13.0798 2.62155 10.9202 2.62155 10.1635 4.13535L3.21942 18.0276C2.53681 19.3932 3.52955 21 5.05592 21H8.57789M15.4221 7.30751L12 10.7306M8.57789 21H15.4221M8.57789 21L5.15577 17.5769M15.4221 21L8.57789 14.1538M12 10.7306L20.7264 19.4596M12 10.7306L8.57789 14.1538M3.27361 19.4596L5.15577 17.5769M5.15577 17.5769L8.57789 14.1538'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const Library = ({ className }: Props) => {
  return (
    <svg
      className={cn('w-4 h-4 text-[#686B6E]', className)}
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M19 7.5H12.6499C12.2547 7.5 11.8966 7.26727 11.7361 6.90614L10.8889 5M19 7.5V7.5C20.1046 7.5 21 8.39543 21 9.5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H9.35013C9.74532 3 10.1034 3.23273 10.2639 3.59386L10.8889 5M19 7.5V6C19 5.44772 18.5523 5 18 5H10.8889'
        stroke={'currentColor'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const Search = ({ className }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={cn('h-6 w-6 text-gray-600', className)}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a4 4 0 11-8 0 4 4 0 018 0z' />
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a4 4 0 11-8 0 4 4 0 018 0z' />
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 19l-6-6M17 10l4-4' />
    </svg>
  )
}

export const Like = ({ className }: Props) => {
  return (
    <svg
      width='15'
      height='15'
      className={cn('text-[#CDCECF]', className)}
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.28571 14.6428V5.35712L9.28571 0.357117L10.6071 1.67855L9.67857 5.35712H15V8.49997L12.3929 14.6428H4.28571ZM0 14.6428V5.35712H2.85714V14.6428H0Z'
        fill='currentColor'
      />
    </svg>
  )
}

export const CommentDashed = ({ className }: Props) => {
  return (
    <svg
      width='13'
      height='13'
      className={cn('text-[#CDCECF]', className)}
      viewBox='0 0 13 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.4937 1.25C12.4937 0.5625 11.9375 0 11.25 0H1.25C0.5625 0 0 0.5625 0 1.25V8.75C0 9.4375 0.5625 10 1.25 10H10L12.5 12.5L12.4937 1.25ZM9.375 7.5H3.125C2.78125 7.5 2.5 7.21875 2.5 6.875C2.5 6.53125 2.78125 6.25 3.125 6.25H9.375C9.71875 6.25 10 6.53125 10 6.875C10 7.21875 9.71875 7.5 9.375 7.5ZM9.375 5.625H3.125C2.78125 5.625 2.5 5.34375 2.5 5C2.5 4.65625 2.78125 4.375 3.125 4.375H9.375C9.71875 4.375 10 4.65625 10 5C10 5.34375 9.71875 5.625 9.375 5.625ZM9.375 3.75H3.125C2.78125 3.75 2.5 3.46875 2.5 3.125C2.5 2.78125 2.78125 2.5 3.125 2.5H9.375C9.71875 2.5 10 2.78125 10 3.125C10 3.46875 9.71875 3.75 9.375 3.75Z'
        fill='currentColor'
      />
    </svg>
  )
}

export const TripleDot = ({ className }: Props) => {
  return (
    <svg
      className={cn('text-[white]', className)}
      width='5'
      height='19'
      viewBox='0 0 5 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.49983 7.29901C2.21079 7.29901 1.92458 7.35594 1.65754 7.46655C1.3905 7.57716 1.14787 7.73929 0.943486 7.94367C0.739105 8.14805 0.57698 8.39069 0.466369 8.65772C0.355759 8.92476 0.298828 9.21097 0.298828 9.50001C0.298828 9.78905 0.355759 10.0753 0.466369 10.3423C0.57698 10.6093 0.739105 10.852 0.943486 11.0564C1.14787 11.2607 1.3905 11.4229 1.65754 11.5335C1.92458 11.6441 2.21079 11.701 2.49983 11.701C3.08357 11.7009 3.64335 11.4689 4.05602 11.056C4.4687 10.6431 4.70046 10.0833 4.70033 9.49951C4.7002 8.91577 4.46818 8.35599 4.05532 7.94332C3.64245 7.53064 3.08257 7.29888 2.49883 7.29901H2.49983ZM2.49983 4.69901C2.78874 4.69888 3.07479 4.64185 3.34166 4.53116C3.60852 4.42048 3.85097 4.25832 4.05517 4.05394C4.25937 3.84956 4.42131 3.60696 4.53175 3.33999C4.64218 3.07302 4.69896 2.78692 4.69883 2.49801C4.6987 2.2091 4.64166 1.92305 4.53098 1.65618C4.4203 1.38932 4.25814 1.14687 4.05376 0.942669C3.84937 0.738473 3.60677 0.576533 3.33981 0.466094C3.07284 0.355655 2.78674 0.29888 2.49783 0.299011C1.91435 0.299277 1.35488 0.531316 0.942486 0.944084C0.530094 1.35685 0.298563 1.91654 0.298828 2.50001C0.299094 3.08349 0.531133 3.64296 0.9439 4.05535C1.35667 4.46775 1.91635 4.69928 2.49983 4.69901ZM2.49983 14.299C1.91609 14.299 1.35625 14.5309 0.943486 14.9437C0.530719 15.3564 0.298828 15.9163 0.298828 16.5C0.298828 17.0838 0.530719 17.6436 0.943486 18.0564C1.35625 18.4691 1.91609 18.701 2.49983 18.701C3.08357 18.701 3.6434 18.4691 4.05617 18.0564C4.46894 17.6436 4.70083 17.0838 4.70083 16.5C4.70083 15.9163 4.46894 15.3564 4.05617 14.9437C3.6434 14.5309 3.08357 14.299 2.49983 14.299Z'
        fill='currentColor'
      />
    </svg>
  )
}

export const DollarSign = ({ className }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      className={cn('text-[#101828]', className)}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12 1V23M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6'
        stroke={'currentColor'}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const Dribble = ({ className }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      className={cn('text-[#101828]', className)}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.56 2.75C12.93 8.78 14.58 12.17 16.59 20.47M19.13 5.09C15.41 9.44 10.19 10.75 2.25 10.94M21.75 12.84C18.25 11.91 15.12 12.02 12.81 12.84C10.23 13.76 7.8 15.7 5.37 19.16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
        stroke={'currentColor'}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const Level = ({ className }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      className={cn('w-5 h-5 text-[#101828]', className)}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 3.99995V9.99995M1 9.99995H7M1 9.99995L5.64 5.63995C6.71475 4.56467 8.04437 3.77916 9.50481 3.35673C10.9652 2.93429 12.5089 2.8887 13.9917 3.22421C15.4745 3.55972 16.8482 4.26539 17.9845 5.27537C19.1209 6.28536 19.9828 7.56674 20.49 8.99995M23 20V14M23 14H17M23 14L18.36 18.36C17.2853 19.4352 15.9556 20.2207 14.4952 20.6432C13.0348 21.0656 11.4911 21.1112 10.0083 20.7757C8.52547 20.4402 7.1518 19.7345 6.01547 18.7245C4.87913 17.7145 4.01717 16.4332 3.51 15'
        stroke={'currentColor'}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const Backlog = ({ className }: Props) => {
  return (
    <svg
      className={cn('w-5 h-5 text-[#000] ', className)}
      fill='currentColor'
      width='800px'
      height='800px'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M5,5 L19,5 L19,4.5 C19,3.67157288 18.3284271,3 17.5,3 L6.5,3 C5.67157288,3 5,3.67157288 5,4.5 L5,5 Z M4,5.5 L4,4.5 C4,3.11928813 5.11928813,2 6.5,2 L17.5,2 C18.8807119,2 20,3.11928813 20,4.5 L20,5.5 C20,5.77614237 19.7761424,6 19.5,6 L4.5,6 C4.22385763,6 4,5.77614237 4,5.5 Z M4,10.5 L4,7.5 C4,7.22385763 4.22385763,7 4.5,7 L19.5,7 C19.7761424,7 20,7.22385763 20,7.5 L20,10.5 C20,10.7761424 19.7761424,11 19.5,11 L4.5,11 C4.22385763,11 4,10.7761424 4,10.5 Z M5,10 L19,10 L19,8 L5,8 L5,10 Z M6,15.5 L6,12.5 C6,12.2238576 6.22385763,12 6.5,12 L21.5,12 C21.7761424,12 22,12.2238576 22,12.5 L22,15.5 C22,15.7761424 21.7761424,16 21.5,16 L6.5,16 C6.22385763,16 6,15.7761424 6,15.5 Z M7,15 L21,15 L21,13 L7,13 L7,15 Z M4,18.5 L4,17.5 C4,17.2238576 4.22385763,17 4.5,17 L19.5,17 C19.7761424,17 20,17.2238576 20,17.5 L20,18.5 C20,19.8807119 18.8807119,21 17.5,21 L6.5,21 C5.11928813,21 4,19.8807119 4,18.5 Z M5,18 L5,18.5 C5,19.3284271 5.67157288,20 6.5,20 L17.5,20 C18.3284271,20 19,19.3284271 19,18.5 L19,18 L5,18 Z' />
    </svg>
  )
}

export const Task = ({ className }: Props) => {
  return (
    <svg
      className={cn('text-[#231815]', className)}
      width='800px'
      height='800px'
      viewBox='0 0 1024 1024'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M864 512a32 32 0 0 0-32 32v96a32 32 0 0 0 64 0v-96a32 32 0 0 0-32-32zM881.92 389.44a23.68 23.68 0 0 0-5.76-2.88 19.84 19.84 0 0 0-6.08-1.92 32 32 0 0 0-28.8 8.64A32 32 0 0 0 832 416a32 32 0 1 0 64 0 33.6 33.6 0 0 0-9.28-22.72z'
        fill='currentColor'
      />
      <path
        d='M800 128h-32a96 96 0 0 0-96-96H352a96 96 0 0 0-96 96H224a96 96 0 0 0-96 93.44v677.12A96 96 0 0 0 224 992h576a96 96 0 0 0 96-93.44V736a32 32 0 0 0-64 0v162.56a32 32 0 0 1-32 29.44H224a32 32 0 0 1-32-29.44V221.44A32 32 0 0 1 224 192h32a96 96 0 0 0 96 96h320a96 96 0 0 0 96-96h32a32 32 0 0 1 32 29.44V288a32 32 0 0 0 64 0V221.44A96 96 0 0 0 800 128z m-96 64a32 32 0 0 1-32 32H352a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32h320a32 32 0 0 1 32 32z'
        fill='currentColor'
      />
      <path
        d='M712.32 426.56L448 721.6l-137.28-136.32A32 32 0 0 0 265.6 630.4l160 160a32 32 0 0 0 22.4 9.6 32 32 0 0 0 23.04-10.56l288-320a32 32 0 0 0-47.68-42.88z'
        fill='currentColor'
      />
    </svg>
  )
}

export const Login = ({ className }: Props) => {
  return (
    <svg
      className={cn('text-[#1C274C]', className)}
      width='800px'
      height='800px'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.00098 11.999L16.001 11.999M16.001 11.999L12.501 8.99902M16.001 11.999L12.501 14.999'
        stroke={'currentColor'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827'
        stroke={'currentColor'}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}

export const Workspace = ({ className }: Props) => {
  return (
    <svg
      className={cn('text-[#000000]', className)}
      fill={'currentColor'}
      width='800px'
      height='800px'
      viewBox='0 0 32 32'
      id='icon'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs></defs>
      <path d='M16,17v8H6V17H16m0-2H6a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V17a2,2,0,0,0-2-2Z' />
      <path d='M27,6v5H17V6H27m0-2H17a2,2,0,0,0-2,2v5a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2Z' />
      <path d='M27,17v5H22V17h5m0-2H22a2,2,0,0,0-2,2v5a2,2,0,0,0,2,2h5a2,2,0,0,0,2-2V17a2,2,0,0,0-2-2Z' />
      <path d='M11,6v5H6V6h5m0-2H6A2,2,0,0,0,4,6v5a2,2,0,0,0,2,2h5a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2Z' />
      <g id='_Rectangle_' data-name='&lt;Rectangle&gt;'>
        <rect fill='none' width='32' height='32' />
      </g>
    </svg>
  )
}

export const Register = ({ className }: Props) => {
  return (
    <svg
      className={cn('w-5 h-5 text-[#000000]', className)}
      fill={'currentColor'}
      height='800px'
      width='800px'
      version='1.1'
      id='Capa_1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 310 310'
      xmlSpace='preserve'
    >
      <path
        d='M300.606,159.727l-45.333-45.333c-5.857-5.858-15.355-5.858-21.213,0L225,123.454V15c0-8.284-6.716-15-15-15H20
	C11.716,0,5,6.716,5,15v240.002c0,8.284,6.716,15,15,15h85V295c0,8.284,6.716,15,15,15h45.333c3.979,0,7.794-1.581,10.607-4.394
	l124.667-124.667C306.465,175.081,306.465,165.585,300.606,159.727z M35,30h160v123.454l-85.606,85.605
	c-0.302,0.301-0.581,0.619-0.854,0.942H35V30z M159.12,280H135v-24.121l109.667-109.666l24.12,24.12L159.12,280z'
      />
    </svg>
  )
}

export const Join = ({ className }: Props) => {
  return (
    <svg
      className={cn('w-5 h-5 text-[#000000]', className)}
      fill={'currentColor'}
      version='1.1'
      id='Capa_1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='800px'
      height='800px'
      viewBox='0 0 461.759 461.759'
      xmlSpace='preserve'
    >
      <g>
        <path
          d='M0,301.058h147.916v147.919H0V301.058z M194.432,448.977H342.35V301.058H194.432V448.977z M2.802,257.347h147.916V109.434
		H2.802V257.347z M325.476,92.219l-51.603-79.437l-79.441,51.601l51.604,79.437L325.476,92.219z M219.337,213.733l71.045,62.663
		l62.66-71.039l-71.044-62.669L219.337,213.733z M412.107,57.967l-80.668,49.656l49.652,80.666l80.668-49.65L412.107,57.967z'
        />
      </g>
    </svg>
  )
}

export const UserPlus = ({ className }: Props) => {
  return (
    <svg
      className={cn('text-[#1C274C] w-5 h-5', className)}
      width='800px'
      height='800px'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='10' cy='6' r='4' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='M21 10H19M19 10H17M19 10L19 8M19 10L19 12'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M17.9975 18C18 17.8358 18 17.669 18 17.5C18 15.0147 14.4183 13 10 13C5.58172 13 2 15.0147 2 17.5C2 19.9853 2 22 10 22C12.231 22 13.8398 21.8433 15 21.5634'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}

export const User = ({ className }: Props) => {
  return (
    <svg
      className={cn('text-[#000] w-5 h-5', className)}
      width='800px'
      height='800px'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const Project = ({ className }: Props) => {
  return (
    <svg
      className={cn('text-[#000] w-5 h-5', className)}
      fill='currentColor'
      width='800px'
      height='800px'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g>
        <path d='M2,9H9V2H2ZM4,4H7V7H4Zm7-2V9h7V2Zm5,5H13V4h3ZM2,18H9V11H2Zm2-5H7v3H4Zm7,5h7V11H11Zm2-5h3v3H13Z' />
      </g>
    </svg>
  )
}

export const Resource = ({ className }: Props) => {
  return (
    <svg
      className={cn('text-[#000] w-5 h-5', className)}
      width='800px'
      height='800px'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        d='M12,3 L21,7.5 L12,12 L3,7.5 L12,3 Z M16.5,10.25 L21,12.5 L12,17 L3,12.5 L7.5,10.25 L7.5,10.25 M16.5,15.25 L21,17.5 L12,22 L3,17.5 L7.5,15.25 L7.5,15.25'
      />
    </svg>
  )
}

export const Document = ({ className }: Props) => {
  return (
    <svg
      className={cn('text-[#1C274D] w-5 h-5', className)}
      width='800px'
      height='800px'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18 6.00002V6.75002H18.75V6.00002H18ZM15.7172 2.32614L15.6111 1.58368L15.7172 2.32614ZM4.91959 3.86865L4.81353 3.12619H4.81353L4.91959 3.86865ZM5.07107 6.75002H18V5.25002H5.07107V6.75002ZM18.75 6.00002V4.30604H17.25V6.00002H18.75ZM15.6111 1.58368L4.81353 3.12619L5.02566 4.61111L15.8232 3.0686L15.6111 1.58368ZM4.81353 3.12619C3.91638 3.25435 3.25 4.0227 3.25 4.92895H4.75C4.75 4.76917 4.86749 4.63371 5.02566 4.61111L4.81353 3.12619ZM18.75 4.30604C18.75 2.63253 17.2678 1.34701 15.6111 1.58368L15.8232 3.0686C16.5763 2.96103 17.25 3.54535 17.25 4.30604H18.75ZM5.07107 5.25002C4.89375 5.25002 4.75 5.10627 4.75 4.92895H3.25C3.25 5.9347 4.06532 6.75002 5.07107 6.75002V5.25002Z'
        fill='#1C274D'
      />
      <path d='M8 12H16' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <path d='M8 15.5H13.5' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <path
        d='M4 6V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V14M4 6V5M4 6H17C18.6569 6 20 7.34315 20 9V10'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}

export const Image = ({ className }: Props) => {
  return (
    <svg
      className={cn('text-[#000] w-5 h-5', className)}
      width='800px'
      height='800px'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.2639 15.9375L12.5958 14.2834C11.7909 13.4851 11.3884 13.086 10.9266 12.9401C10.5204 12.8118 10.0838 12.8165 9.68048 12.9536C9.22188 13.1095 8.82814 13.5172 8.04068 14.3326L4.04409 18.2801M14.2639 15.9375L14.6053 15.599C15.4112 14.7998 15.8141 14.4002 16.2765 14.2543C16.6831 14.126 17.12 14.1311 17.5236 14.2687C17.9824 14.4251 18.3761 14.8339 19.1634 15.6514L20 16.4934M14.2639 15.9375L18.275 19.9565M18.275 19.9565C17.9176 20 17.4543 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4.12796 18.7313 4.07512 18.5321 4.04409 18.2801M18.275 19.9565C18.5293 19.9256 18.7301 19.8727 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V16.4934M4.04409 18.2801C4 17.9221 4 17.4575 4 16.8V7.2C4 6.0799 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.07989 4 7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V16.4934M17 8.99989C17 10.1045 16.1046 10.9999 15 10.9999C13.8954 10.9999 13 10.1045 13 8.99989C13 7.89532 13.8954 6.99989 15 6.99989C16.1046 6.99989 17 7.89532 17 8.99989Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const Notification = ({ className }: Props) => {
  return (
    <svg
      className={cn('text-[#000] w-5 h-5', className)}
      width='800px'
      height='800px'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.713 7.14977C12.1271 7.13953 12.4545 6.79555 12.4443 6.38146C12.434 5.96738 12.0901 5.63999 11.676 5.65023L11.713 7.14977ZM6.30665 12.193H7.05665C7.05665 12.1874 7.05659 12.1818 7.05646 12.1761L6.30665 12.193ZM6.30665 14.51L6.34575 15.259C6.74423 15.2382 7.05665 14.909 7.05665 14.51H6.30665ZM6.30665 17.6L6.26755 18.349C6.28057 18.3497 6.29361 18.35 6.30665 18.35L6.30665 17.6ZM9.41983 18.35C9.83404 18.35 10.1698 18.0142 10.1698 17.6C10.1698 17.1858 9.83404 16.85 9.41983 16.85V18.35ZM10.9445 6.4C10.9445 6.81421 11.2803 7.15 11.6945 7.15C12.1087 7.15 12.4445 6.81421 12.4445 6.4H10.9445ZM12.4445 4C12.4445 3.58579 12.1087 3.25 11.6945 3.25C11.2803 3.25 10.9445 3.58579 10.9445 4H12.4445ZM11.713 5.65023C11.299 5.63999 10.955 5.96738 10.9447 6.38146C10.9345 6.79555 11.2619 7.13953 11.676 7.14977L11.713 5.65023ZM17.0824 12.193L16.3325 12.1761C16.3324 12.1818 16.3324 12.1874 16.3324 12.193H17.0824ZM17.0824 14.51H16.3324C16.3324 14.909 16.6448 15.2382 17.0433 15.259L17.0824 14.51ZM17.0824 17.6V18.35C17.0954 18.35 17.1084 18.3497 17.1215 18.349L17.0824 17.6ZM13.9692 16.85C13.555 16.85 13.2192 17.1858 13.2192 17.6C13.2192 18.0142 13.555 18.35 13.9692 18.35V16.85ZM10.1688 17.6027C10.1703 17.1885 9.83574 16.8515 9.42153 16.85C9.00732 16.8485 8.67034 17.1831 8.66886 17.5973L10.1688 17.6027ZM10.0848 19.3L10.6322 18.7873L10.6309 18.786L10.0848 19.3ZM13.3023 19.3L12.7561 18.786L12.7549 18.7873L13.3023 19.3ZM14.7182 17.5973C14.7167 17.1831 14.3797 16.8485 13.9655 16.85C13.5513 16.8515 13.2167 17.1885 13.2182 17.6027L14.7182 17.5973ZM9.41788 16.85C9.00366 16.85 8.66788 17.1858 8.66788 17.6C8.66788 18.0142 9.00366 18.35 9.41788 18.35V16.85ZM13.9692 18.35C14.3834 18.35 14.7192 18.0142 14.7192 17.6C14.7192 17.1858 14.3834 16.85 13.9692 16.85V18.35ZM11.676 5.65023C8.198 5.73622 5.47765 8.68931 5.55684 12.2099L7.05646 12.1761C6.99506 9.44664 9.09735 7.21444 11.713 7.14977L11.676 5.65023ZM5.55665 12.193V14.51H7.05665V12.193H5.55665ZM6.26755 13.761C5.0505 13.8246 4.125 14.8488 4.125 16.055H5.625C5.625 15.6136 5.95844 15.2792 6.34575 15.259L6.26755 13.761ZM4.125 16.055C4.125 17.2612 5.0505 18.2854 6.26755 18.349L6.34575 16.851C5.95843 16.8308 5.625 16.4964 5.625 16.055H4.125ZM6.30665 18.35H9.41983V16.85H6.30665V18.35ZM12.4445 6.4V4H10.9445V6.4H12.4445ZM11.676 7.14977C14.2917 7.21444 16.3939 9.44664 16.3325 12.1761L17.8322 12.2099C17.9114 8.68931 15.191 5.73622 11.713 5.65023L11.676 7.14977ZM16.3324 12.193V14.51H17.8324V12.193H16.3324ZM17.0433 15.259C17.4306 15.2792 17.764 15.6136 17.764 16.055H19.264C19.264 14.8488 18.3385 13.8246 17.1215 13.761L17.0433 15.259ZM17.764 16.055C17.764 16.4964 17.4306 16.8308 17.0433 16.851L17.1215 18.349C18.3385 18.2854 19.264 17.2612 19.264 16.055H17.764ZM17.0824 16.85H13.9692V18.35H17.0824V16.85ZM8.66886 17.5973C8.66592 18.4207 8.976 19.2162 9.53861 19.814L10.6309 18.786C10.335 18.4715 10.1673 18.0473 10.1688 17.6027L8.66886 17.5973ZM9.53739 19.8127C10.0977 20.4109 10.8758 20.7529 11.6935 20.7529V19.2529C11.2969 19.2529 10.9132 19.0873 10.6322 18.7873L9.53739 19.8127ZM11.6935 20.7529C12.5113 20.7529 13.2894 20.4109 13.8497 19.8127L12.7549 18.7873C12.4739 19.0873 12.0901 19.2529 11.6935 19.2529V20.7529ZM13.8484 19.814C14.4111 19.2162 14.7211 18.4207 14.7182 17.5973L13.2182 17.6027C13.2198 18.0473 13.0521 18.4715 12.7561 18.786L13.8484 19.814ZM9.41788 18.35H13.9692V16.85H9.41788V18.35Z'
        fill='currentColor'
      />
    </svg>
  )
}

export const PaperPlane = ({ className }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={cn(`text-[#CDCECF] ${className}`)}
      xmlns="http://www.w3.org/2000/svg">
      <g id="paper-plane">
        <path id="icon" d="M9.73084 14.2692L19.2337 4.76642M5.48664 7.99807L17.1349 4.11532C18.8344 3.54883 20.4512 5.16564 19.8847 6.8651L16.0019 18.5134C15.3895 20.3507 12.8613 20.5304 11.9952 18.7981L10.0548 14.9174C9.84447 14.4967 9.50334 14.1555 9.08263 13.9452L5.20188 12.0048C3.46962 11.1387 3.64929 8.61052 5.48664 7.99807Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

export const Edit = ({ className }: Props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'text-gray-900',
        className
      )}
    >
      <g id="edit">
        <path id="icon" d="M16.6666 15.8333H10.4166M3.33325 13.2101V15.6667C3.33325 15.7587 3.40787 15.8333 3.49992 15.8333H5.95652C6.00073 15.8333 6.04312 15.8158 6.07438 15.7845L14.8821 6.97683C14.9472 6.91174 14.9472 6.80621 14.8821 6.74112L12.4255 4.28452C12.3604 4.21943 12.2548 4.21943 12.1898 4.28452L3.38207 13.0922C3.35081 13.1235 3.33325 13.1659 3.33325 13.2101Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

export const ColorPallet = ({ className }: Props) => {
  return (
    <svg className={cn(className)} fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
      width="800px" height="800px" viewBox="0 0 29.73 29.73" xmlSpace="preserve"
    >
      <g>
        <path d="M14.865,0C6.655,0,0,6.655,0,14.865c0,1.714,0.201,2.83,0.767,4.546c1.104,3.188,6.896-2.808,9.388,0.729
		c2.492,3.535-5.62,6.64-0.18,8.764c2.475,0.601,3.175,0.826,4.89,0.826c8.21,0,14.865-6.654,14.865-14.864
		C29.73,6.655,23.075,0,14.865,0z M22.077,4.955c1.694,0,3.069,1.17,3.069,2.614c0,1.442-1.375,2.613-3.069,2.613
		c-1.695,0-3.07-1.171-3.07-2.613C19.007,6.125,20.381,4.955,22.077,4.955z M4.74,15.802c-1.695,0-3.069-1.171-3.069-2.614
		s1.375-2.614,3.069-2.614c1.696,0,3.071,1.171,3.071,2.614S6.437,15.802,4.74,15.802z M8.335,9.784c-1.695,0-3.07-1.17-3.07-2.614
		c0-1.444,1.375-2.614,3.07-2.614s3.07,1.17,3.07,2.614C11.405,8.614,10.03,9.784,8.335,9.784z M12.078,4.189
		c0-1.443,1.374-2.615,3.07-2.615c1.694,0,3.068,1.172,3.068,2.615s-1.375,2.614-3.068,2.614
		C13.452,6.803,12.078,5.632,12.078,4.189z M17.341,27.627c-1.696,0-3.069-1.17-3.069-2.613s1.375-2.613,3.069-2.613
		c1.695,0,3.07,1.17,3.07,2.613S19.036,27.627,17.341,27.627z M23.48,23.155c-1.695,0-3.069-1.173-3.069-2.614
		c0-1.443,1.374-2.614,3.069-2.614c1.694,0,3.069,1.171,3.069,2.614C26.55,21.982,25.176,23.155,23.48,23.155z M25.146,16.604
		c-1.695,0-3.07-1.17-3.07-2.614s1.375-2.614,3.07-2.614s3.07,1.17,3.07,2.614S26.843,16.604,25.146,16.604z"/>
      </g>
    </svg>
  )
}

export const Alert = ({ className }: Props) => {
  return (
    <svg className={cn(className)} fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 310.806 310.806" xmlSpace="preserve">
      <path d="M305.095,229.104L186.055,42.579c-6.713-10.52-18.172-16.801-30.652-16.801c-12.481,0-23.94,6.281-30.651,16.801
   L5.711,229.103c-7.145,11.197-7.619,25.39-1.233,37.042c6.386,11.647,18.604,18.883,31.886,18.883h238.079
   c13.282,0,25.5-7.235,31.888-18.886C312.714,254.493,312.24,240.301,305.095,229.104z M155.403,253.631
   c-10.947,0-19.82-8.874-19.82-19.82c0-10.947,8.874-19.821,19.82-19.821c10.947,0,19.82,8.874,19.82,19.821
   C175.223,244.757,166.349,253.631,155.403,253.631z M182.875,115.9l-9.762,65.727c-1.437,9.675-10.445,16.353-20.119,14.916
   c-7.816-1.161-13.676-7.289-14.881-14.692l-10.601-65.597c-2.468-15.273,7.912-29.655,23.185-32.123
   c15.273-2.468,29.655,7.912,32.123,23.185C183.284,110.192,183.268,113.161,182.875,115.9z"/>
    </svg>
  )
}

export const Rectangle = ({ className }: Props) => {
  return (
    <svg className={cn(className)} fill="currentColor" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><path d="M 12.6952 4.6562 L 43.3280 4.6562 C 43.1874 2.6875 42.0624 1.6328 39.9062 1.6328 L 16.1171 1.6328 C 13.9609 1.6328 12.8358 2.6875 12.6952 4.6562 Z M 8.1015 11.1484 L 47.9454 11.1484 C 47.5936 9.0156 46.5625 7.8438 44.2187 7.8438 L 11.8046 7.8438 C 9.4609 7.8438 8.4531 9.0156 8.1015 11.1484 Z M 10.2343 54.3672 L 45.7888 54.3672 C 50.6641 54.3672 53.1251 51.9297 53.1251 47.1016 L 53.1251 22.2109 C 53.1251 17.3828 50.6641 14.9453 45.7888 14.9453 L 10.2343 14.9453 C 5.3358 14.9453 2.8749 17.3594 2.8749 22.2109 L 2.8749 47.1016 C 2.8749 51.9297 5.3358 54.3672 10.2343 54.3672 Z M 10.3046 50.5938 C 7.9609 50.5938 6.6484 49.3281 6.6484 46.8906 L 6.6484 22.3984 C 6.6484 19.9609 7.9609 18.7187 10.3046 18.7187 L 45.7187 18.7187 C 48.0390 18.7187 49.3513 19.9609 49.3513 22.3984 L 49.3513 46.8906 C 49.3513 49.3281 48.0390 50.5938 45.7187 50.5938 Z" /></svg>
  )
}

export const Card = ({ className }: Props) => {
  return (
    <svg className={cn(className)} fill="currentColor" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" id="memory-card-text"><path d="M17 8V10H5V8H17M5 12H15V14H5V12M2 3H20V4H21V18H20V19H2V18H1V4H2V3M3 5V17H19V5H3Z" /></svg>)
}

export const Tab = ({ className }: Props) => {
  return (
    <svg className={cn(className)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.50004 2C6.11933 2 5.00004 3.11929 5.00004 4.5V12.5C5.00004 13.8807 6.11933 15 7.50004 15H15.5C16.8807 15 18 13.8807 18 12.5V4.5C18 3.11929 16.8807 2 15.5 2H7.50004ZM17 4.5V5H10.5C10.2239 5 10 4.77614 10 4.5V3H15.5C16.3285 3 17 3.67157 17 4.5ZM9.00004 4.5C9.00004 5.32843 9.67161 6 10.5 6H17V12.5C17 13.3284 16.3285 14 15.5 14H7.50004C6.67161 14 6.00004 13.3284 6.00004 12.5V4.5C6.00004 3.67157 6.67161 3 7.50004 3H9.00004V4.5Z" fill="currentColor" />
      <path d="M12.5002 18C13.7097 18 14.7186 17.1411 14.9502 16H13.9149C13.709 16.5826 13.1534 17 12.5002 17H6.00024C4.34339 17 3.00024 15.6568 3.00024 14V7.49998C3.00024 6.84687 3.41765 6.29125 4.00025 6.08533V5.04999C2.85913 5.28162 2.00024 6.2905 2.00024 7.49998V14C2.00024 16.2091 3.79111 18 6.00024 18H12.5002Z" fill="currentColor" />
    </svg>
  )
}
