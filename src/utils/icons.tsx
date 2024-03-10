import { cn } from "@/lib/utils";

interface Props {
    color?: string
    className?: string
}

export const CheveronRight = ({ className, color = '#9B9C9E' }: Props) => {
    return (
        <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 5L11.9107 9.41074C12.2362 9.73618 12.2362 10.2638 11.9107 10.5893L7.5 15"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    );
};

export const CheveronDown = ({ className, color = '#9B9C9E' }: Props) => {
    return (
        <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 8.33334L10.5893 12.7441C10.2638 13.0695 9.73618 13.0695 9.41074 12.7441L5 8.33334"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    );
};

export const Download = ({ className, color = '#686B6E' }: Props) => {
    return (
        <svg className={cn(className)} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 14V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14M12 15L8 11M12 15L16 11M12 15V4" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};

export const Share = ({ className, color = '#686B6E' }: Props) => {
    return (
        <svg className={cn(className)} width="16" height="16" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4271 14.4563C11.156 14.9073 11 15.4354 11 16C11 17.6569 12.3431 19 14 19C15.6569 19 17 17.6569 17 16C17 14.3431 15.6569 13 14 13C12.9077 13 11.9518 13.5837 11.4271 14.4563ZM11.4271 14.4563L6.57287 11.5437M6.57287 11.5437C6.84405 11.0927 7 10.5646 7 10C7 9.43543 6.84405 8.90728 6.57287 8.45628M6.57287 11.5437C6.04822 12.4163 5.09228 13 4 13C2.34315 13 1 11.6569 1 10C1 8.34315 2.34315 7 4 7C5.09228 7 6.04822 7.58374 6.57287 8.45628M6.57287 8.45628L11.4271 5.54372M11.4271 5.54372C11.9518 6.41626 12.9077 7 14 7C15.6569 7 17 5.65685 17 4C17 2.34315 15.6569 1 14 1C12.3431 1 11 2.34315 11 4C11 4.56458 11.156 5.09272 11.4271 5.54372Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};

export const Lock = ({ className, color = '#9B9C9E' }: Props) => {
    return (
        <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 10V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V10M12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15ZM12 15V17M7 20H17C18.1046 20 19 19.1046 19 18V12C19 10.8954 18.1046 10 17 10H7C5.89543 10 5 10.8954 5 12V18C5 19.1046 5.89543 20 7 20Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    )
}

export const Globe = ({ className, color = '#9B9C9E' }: Props) => {
    return (
        <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M3 12C3 7.02944 7.02944 3 12 3"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round" />
        </svg>
    )
}

export const Cross = ({ className, color = '#686B6E' }: Props) => {
    return (
        <svg className={cn(className)} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="cross">
                <path id="icon" d="M4.16699 4.16666L15.8337 15.8333M15.8337 4.16666L4.16699 15.8333" stroke={color} stroke-width="1.5" stroke-linecap="round" />
            </g>
        </svg>
    )
}

export const Watch = ({ className, color = '#686B6E' }: Props) => {
    return (
        <svg className={cn(className)} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 4.33333V6.17157C7 6.70201 6.78929 7.21071 6.41421 7.58579L5.66667 8.33333M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z" stroke="#CDCECF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export const Comment = ({ className, color = '#38A7B6' }: Props) => {
    return (
        <svg className={cn(className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12V21H12Z" stroke={color} stroke-width="1.5" stroke-linecap="round" />
        </svg>
    )
}

export const Code = ({ className, color = '#38D7ED' }: Props) => {
    return (
        <svg className={cn(className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99985 8L3.70696 11.2929C3.31643 11.6834 3.31643 12.3166 3.70696 12.7071L6.99985 16M16.9998 8L20.2927 11.2929C20.6833 11.6834 20.6833 12.3166 20.2927 12.7071L16.9998 16M13.9998 6L9.99985 18" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export const Pencil = ({ className, color = '#BD9AF8' }: Props) => {
    return (
        <svg className={cn(className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 7L4.58579 15.4142C4.21071 15.7893 4 16.298 4 16.8284V18C4 19.1046 4.89543 20 6 20H7.17157C7.70201 20 8.21071 19.7893 8.58579 19.4142L17 11M13 7L14.5858 5.41421C15.3668 4.63317 16.6332 4.63317 17.4142 5.41421L18.5858 6.58579C19.3668 7.36684 19.3668 8.63317 18.5858 9.41421L17 11M13 7L17 11" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export const Idea = ({ className, color = '#FFD147' }: Props) => {
    return (
        <svg className={cn(className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.57143 16V17.5714C8.57143 19.465 10.1065 21 12 21V21C13.8935 21 15.4286 19.465 15.4286 17.5714V16M8.57143 16V15.3508C8.57143 14.7092 8.2476 14.1213 7.79785 13.6636C6.68829 12.5345 6 10.9617 6 9.22222C6 5.78578 8.68629 3 12 3C15.3137 3 18 5.78578 18 9.22222C18 10.9617 17.3117 12.5345 16.2022 13.6636C15.7524 14.1213 15.4286 14.7092 15.4286 15.3508V16M8.57143 16H15.4286" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export const Setting = ({ className, color = '#686B6E' }: Props) => {
    return (
        <svg className={cn(className)} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.90136 6.7469C5.96492 6.20624 4.76749 6.52709 4.22684 7.46353L4.1851 7.53583C3.64424 8.47263 3.96521 9.67051 4.902 10.2114L5.1448 10.3515C5.71742 10.6821 6 11.3388 6 12C6 12.6612 5.71742 13.3179 5.1448 13.6485L4.902 13.7886C3.96521 14.3295 3.64424 15.5274 4.1851 16.4642L4.22684 16.5365C4.7675 17.4729 5.96492 17.7938 6.90136 17.2531L7.14546 17.1122C7.71803 16.7816 8.42331 16.863 8.9953 17.1946C9.56711 17.526 10 18.1005 10 18.7614V19.0427C10 20.1237 10.8763 21 11.9573 21H12.0427C13.1237 21 14 20.1237 14 19.0427V18.7614C14 18.1005 14.4329 17.5261 15.0047 17.1946C15.5767 16.863 16.282 16.7816 16.8545 17.1122L17.0986 17.2531C18.0351 17.7938 19.2325 17.4729 19.7732 16.5365L19.8149 16.4642C20.3558 15.5274 20.0348 14.3295 19.098 13.7886L18.8552 13.6485C18.2826 13.3179 18 12.6612 18 12C18 11.3388 18.2826 10.6821 18.8552 10.3515L19.098 10.2114C20.0348 9.6705 20.3558 8.47262 19.8149 7.53581L19.7732 7.46353C19.2325 6.52709 18.0351 6.20623 17.0986 6.74689L16.8545 6.88783C16.282 7.2184 15.5767 7.13699 15.0047 6.80541C14.4329 6.47395 14 5.89952 14 5.23859V4.95728C14 3.8763 13.1237 3 12.0427 3L11.9573 3C10.8763 3 10 3.8763 10 4.95727V5.23858C10 5.89952 9.56711 6.47395 8.9953 6.80542C8.42331 7.13699 7.71803 7.2184 7.14546 6.88783L6.90136 6.7469Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export const Status = ({ className, color = "#4AC97E" }: Props) => {
    return (
        <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
            <rect x="10.333" y="10" width="10.6667" height="10.6667" rx="5.33333" stroke="#131619" strokeWidth="4" />
            <g filter="url(#filter0_d_845_2875)">
                <ellipse cx="15.6663" cy="15.3333" rx="3.33333" ry="3.33333" fill={color} />
            </g>
            <defs>
                <filter id="filter0_d_845_2875" x="0.333008" y="0" width="30.667" height="30.6667" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="6" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.290196 0 0 0 0 0.788235 0 0 0 0 0.494118 0 0 0 0.48 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_845_2875" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_845_2875" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}

export const TriLine = ({ className, color = '#363A3D' }: Props) => {
    return (
        <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_335_8613)">
                <path d="M12 0V12H24"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_335_8613">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export const Plus = ({ className, color = '#CDCECF' }: Props) => {
    return (
        <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10.0003 4.16669V10M10.0003 10V15.8334M10.0003 10H15.8337M10.0003 10H4.16699"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round" />
        </svg>
    )
}

export const Sqaure = ({ className, color = "#686B6E" }: Props) => {
    return (
        <svg className={cn(className)} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="18" height="18" rx="3" stroke={color} stroke-width="1.5" stroke-linecap="round" />
        </svg>
    )
}

export const ChatGradient = ({ className, color = "#686B6E" }: Props) => {
    return (
        <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
            <path d="M11.334 2H5.33398C3.67713 2 2.33398 3.34315 2.33398 5V9.33333C2.33398 10.4379 3.22942 11.3333 4.33398 11.3333C4.70217 11.3333 5.00065 11.6318 5.00065 12V12.3096C5.00065 13.1794 6.05228 13.615 6.66732 13L8.04109 11.6262C8.22863 11.4387 8.48298 11.3333 8.7482 11.3333H11.334C12.9908 11.3333 14.334 9.99019 14.334 8.33333V5C14.334 3.34315 12.9908 2 11.334 2Z"
                stroke="url(#paint0_linear_350_5612)"
                strokeWidth="1.5"
                strokeLinecap="round" />
            <defs>
                <linearGradient id="paint0_linear_350_5612" x1="2.33398" y1="14.6667" x2="14.9822" y2="2.68419" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#82DBF7" />
                    <stop offset="1" stop-color="#B6F09C" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export const Chat = ({ className, color = '#686B6E' }: Props) => {
    return (
        <svg className={cn(
            'w-4 h-4 md:w-auto md:h-auto',
            className
        )} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 3H6C4.34315 3 3 4.34315 3 6V15.7574C3 16.553 3.31607 17.3161 3.87868 17.8787L6.71967 20.7197C7.19214 21.1921 8 20.8575 8 20.1893V19C8 17.8954 8.89543 17 10 17H18C19.6569 17 21 15.6569 21 14V6C21 4.34315 19.6569 3 18 3Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    )
}

export const TwoDots = ({ className, color = '#686B6E' }: Props) => {
    return (
        <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path d="M12.7507 6.25001C12.7507 7.4006 11.8179 8.33334 10.6673 8.33334C9.51672 8.33334 8.58398 7.4006 8.58398 6.25001C8.58398 5.09941 9.51672 4.16667 10.6673 4.16667C11.8179 4.16667 12.7507 5.09941 12.7507 6.25001Z" fill={color} />
            <path d="M12.7507 13.75C12.7507 14.9006 11.8179 15.8333 10.6673 15.8333C9.51672 15.8333 8.58398 14.9006 8.58398 13.75C8.58398 12.5994 9.51672 11.6667 10.6673 11.6667C11.8179 11.6667 12.7507 12.5994 12.7507 13.75Z" fill={color} />
        </svg>
    )
}

export const GetStarted = ({ className, color = '#686B6E' }: Props) => {
    return (
        <svg className={cn(
            'w-4 h-4 md:w-auto md:h-auto',
            className
        )} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="magic-wand">
                <path id="icon" d="M10.5002 10.5L12.586 8.41421C13.367 7.63316 14.6334 7.63317 15.4144 8.41421L15.586 8.58579C16.367 9.36684 16.367 10.6332 15.586 11.4142L13.5002 13.5M10.5002 10.5L3.4144 17.5858C2.63335 18.3668 2.63335 19.6332 3.4144 20.4142L3.58597 20.5858C4.36702 21.3668 5.63335 21.3668 6.4144 20.5858L13.5002 13.5M10.5002 10.5L13.5002 13.5M8.29953 8.35722L6.00019 7.38534M11.3401 5.31499L10.4105 3M15.6457 5.31499L16.5752 3M18.6847 8.35353L20.9895 7.3949M18.6847 12.6465L21.0002 13.5794M15.6421 15.6865L16.5753 18"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
            </g>
        </svg>
    )
}

export const DoubleLeft = ({ className, color = "#686B6E" }: Props) => {
    return (
        <svg className={(cn(
            className
        ))} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.04964 8.46686C1.63189 8.88461 1.63189 9.56304 2.04964 9.98079L7.39686 15.328C7.81462 15.7458 8.49304 15.7458 8.9108 15.328C9.32855 14.9103 9.32855 14.2318 8.9108 13.8141L4.31887 9.22215L8.90745 4.63022C9.32521 4.21247 9.32521 3.53404 8.90745 3.11629C8.4897 2.69854 7.81127 2.69854 7.39352 3.11629L2.0463 8.46351L2.04964 8.46686ZM13.8135 3.11963L8.46631 8.46686C8.04856 8.88461 8.04856 9.56304 8.46631 9.98079L13.8135 15.328C14.2313 15.7458 14.9097 15.7458 15.3275 15.328C15.7452 14.9103 15.7452 14.2318 15.3275 13.8141L10.7355 9.22215L15.3241 4.63022C15.7419 4.21247 15.7419 3.53404 15.3241 3.11629C14.9064 2.69854 14.2279 2.69854 13.8102 3.11629L13.8135 3.11963Z" fill={color} />
        </svg>
    )
}

export const DoubleRight = ({ className, color = "#686B6E" }: Props) => {
    return (
        <svg className={cn(
            className
        )} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.9504 9.67597C16.3681 9.25821 16.3681 8.57978 15.9504 8.16203L10.6031 2.81481C10.1854 2.39706 9.50696 2.39706 9.08921 2.81481C8.67145 3.23256 8.67145 3.91099 9.08921 4.32874L13.6811 8.92067L9.09255 13.5126C8.67479 13.9303 8.67479 14.6088 9.09255 15.0265C9.5103 15.4443 10.1887 15.4443 10.6065 15.0265L15.9537 9.67931L15.9504 9.67597ZM4.18647 15.0232L9.53369 9.67597C9.95144 9.25821 9.95144 8.57978 9.53369 8.16203L4.18647 2.81481C3.76872 2.39706 3.09029 2.39706 2.67254 2.81481C2.25479 3.23256 2.25479 3.91099 2.67254 4.32874L7.26446 8.92067L2.67588 13.5126C2.25813 13.9303 2.25813 14.6088 2.67588 15.0265C3.09363 15.4443 3.77206 15.4443 4.18981 15.0265L4.18647 15.0232Z" fill={color} />
        </svg>
    )
}

export const IconPlus = ({ className, color = "#CDCECF" }: Props) => {
    return (
        <svg className={cn(
            className
        )} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.85702 5.71518C9.69044 5.71518 10.4897 6.04626 11.079 6.63557C11.6684 7.22489 11.9994 8.02417 11.9994 8.85759C11.9994 9.69101 11.6684 10.4903 11.079 11.0796C10.4897 11.6689 9.69044 12 8.85702 12C8.0236 12 7.22432 11.6689 6.635 11.0796C6.04569 10.4903 5.71461 9.69101 5.71461 8.85759C5.71461 8.02417 6.04569 7.22489 6.635 6.63557C7.22432 6.04626 8.0236 5.71518 8.85702 5.71518ZM5.71461 0C8.87073 0 11.4292 2.55849 11.4292 5.71461C11.4292 5.86488 11.4235 6.014 11.4121 6.16141C11.1606 5.92273 10.8769 5.72042 10.5693 5.56035C10.5392 4.6133 10.2328 3.69574 9.68768 2.92069C9.14261 2.14565 8.38273 1.54695 7.50166 1.19836C6.62058 0.849772 5.65679 0.766505 4.72898 0.958819C3.80118 1.15113 2.94988 1.61063 2.27996 2.28071C1.61003 2.95079 1.15073 3.80218 0.958629 4.73003C0.766527 5.65788 0.850014 6.62166 1.19881 7.50265C1.5476 8.38365 2.14646 9.14338 2.92164 9.68828C3.69681 10.2332 4.61444 10.5394 5.56149 10.5693C5.72147 10.8779 5.9243 11.1613 6.16141 11.4115C6.01457 11.4229 5.86545 11.4287 5.71461 11.4287C2.55849 11.4287 0 8.87016 0 5.71461C0 2.55906 2.55849 0.000571374 5.71461 0.000571374M8.85702 6.85673L8.8056 6.86131C8.74852 6.87173 8.69597 6.8993 8.65494 6.94033C8.61391 6.98136 8.58635 7.03391 8.57592 7.09099L8.57135 7.14241V8.57078L7.14184 8.57192L7.09042 8.57649C7.03334 8.58692 6.98078 8.61448 6.93975 8.65551C6.89873 8.69654 6.87116 8.74909 6.86073 8.80617L6.85616 8.85759L6.86073 8.90901C6.87116 8.96609 6.89873 9.01864 6.93975 9.05967C6.98078 9.1007 7.03334 9.12827 7.09042 9.13869L7.14184 9.14327H8.57135V10.5739L8.57592 10.6253C8.58645 10.6823 8.61406 10.7347 8.65508 10.7757C8.6961 10.8166 8.7486 10.8441 8.8056 10.8544L8.85702 10.8596L8.90844 10.8544C8.96552 10.844 9.01807 10.8165 9.0591 10.7754C9.10013 10.7344 9.1277 10.6818 9.13812 10.6248L9.1427 10.5733V9.14269L10.5728 9.14327L10.6242 9.13869C10.6813 9.12827 10.7338 9.1007 10.7749 9.05967C10.8159 9.01864 10.8435 8.96609 10.8539 8.90901L10.859 8.85759L10.8545 8.80617C10.844 8.74901 10.8163 8.6964 10.7752 8.65537C10.7341 8.61433 10.6814 8.58681 10.6242 8.57649L10.5728 8.57192H9.1427V7.14355L9.13812 7.09213C9.1278 7.03495 9.10028 6.98227 9.05925 6.94113C9.01821 6.89999 8.9656 6.87234 8.90844 6.86188L8.85702 6.85673ZM3.69319 7.30524C4.06841 7.7829 4.60083 8.11207 5.19583 8.23425C5.14706 8.51907 5.13191 8.80863 5.15069 9.09699C4.30759 8.95768 3.54726 8.50759 3.01957 7.83545C2.94926 7.74613 2.91731 7.63253 2.93076 7.51964C2.94421 7.40676 3.00195 7.30385 3.09127 7.23354C3.1806 7.16323 3.2942 7.13128 3.40708 7.14473C3.51996 7.15818 3.62288 7.21591 3.69319 7.30524ZM4.00057 3.85831C4.09602 3.85561 4.19104 3.87207 4.28002 3.90674C4.36899 3.9414 4.45011 3.99355 4.51858 4.06011C4.58705 4.12667 4.64148 4.20628 4.67864 4.29424C4.7158 4.3822 4.73495 4.47672 4.73495 4.5722C4.73495 4.66769 4.7158 4.76221 4.67864 4.85017C4.64148 4.93813 4.58705 5.01774 4.51858 5.0843C4.45011 5.15086 4.36899 5.20301 4.28002 5.23767C4.19104 5.27234 4.09602 5.2888 4.00057 5.2861C3.81473 5.28084 3.63826 5.20332 3.50867 5.07002C3.37908 4.93671 3.30659 4.75812 3.30659 4.5722C3.30659 4.38629 3.37908 4.2077 3.50867 4.07439C3.63826 3.94108 3.81473 3.86356 4.00057 3.85831ZM7.42865 3.85831C7.5241 3.85561 7.61913 3.87207 7.7081 3.90674C7.79707 3.9414 7.8782 3.99355 7.94666 4.06011C8.01513 4.12667 8.06956 4.20628 8.10672 4.29424C8.14389 4.3822 8.16304 4.47672 8.16304 4.5722C8.16304 4.66769 8.14389 4.76221 8.10672 4.85017C8.06956 4.93813 8.01513 5.01774 7.94666 5.0843C7.8782 5.15086 7.79707 5.20301 7.7081 5.23767C7.61913 5.27234 7.5241 5.2888 7.42865 5.2861C7.24281 5.28084 7.06635 5.20332 6.93676 5.07002C6.80717 4.93671 6.73467 4.75812 6.73467 4.5722C6.73467 4.38629 6.80717 4.2077 6.93676 4.07439C7.06635 3.94108 7.24281 3.86356 7.42865 3.85831Z"
                fill={color} />
        </svg>
    )
}

export const AngleBR = ({ className, color = "#363A3D" }: Props) => {
    return (
        <svg className={cn(
            className
        )} width="34" height="94" viewBox="0 0 34 94" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0.838623V84.8386C1 89.2569 4.58172 92.8386 9 92.8386H33"
                stroke={color}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

// export const Idea = ({ color = '#4D62E5' }) => (
//     <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M3.14286 12.3333V13.6429C3.14286 15.2208 4.42204 16.5 6 16.5V16.5C7.57796 16.5 8.85714 15.2208 8.85714 13.6429V12.3333M3.14286 12.3333V11.9627C3.14286 11.321 2.81521 10.7353 2.38089 10.2629C1.52531 9.33241 1 8.07241 1 6.68519C1 3.82149 3.23858 1.5 6 1.5C8.76142 1.5 11 3.82149 11 6.68519C11 8.07241 10.4747 9.33241 9.61911 10.2629C9.18479 10.7353 8.85714 11.321 8.85714 11.9627V12.3333M3.14286 12.3333H8.85714"
//             stroke={color}
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round" />
//     </svg>
// )

export const Warning = ({ className, color = '#FF7B20' }: Props) => (
    <svg className={cn(
        className
    )} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.00016 6.49994V9.83327M9.00016 13.1666H9.00849M13.9386 16.4999H4.06167C2.16016 16.4999 0.954754 14.4613 1.87113 12.7951L7.5398 2.48847C8.17301 1.33718 9.82731 1.33718 10.4605 2.48847L16.1292 12.7951C17.0456 14.4613 15.8402 16.4999 13.9386 16.4999Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round" />
    </svg>
)

export const Danger = ({ className, color = '#D90200' }: Props) => (
    <svg className={cn(
        className
    )} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00007 4.66663V7.99997M8.00007 11.3333H8.00841M1.50488 5.69334V10.3066C1.50488 11.1998 1.98138 12.0251 2.75488 12.4717L6.75007 14.7783C7.52358 15.2249 8.47657 15.2249 9.25007 14.7783L13.2453 12.4717C14.0188 12.0251 14.4953 11.1998 14.4953 10.3066V5.69334C14.4953 4.80018 14.0188 3.97486 13.2453 3.52828L9.25007 1.22166C8.47657 0.775073 7.52358 0.775073 6.75007 1.22166L2.75488 3.52828C1.98138 3.97486 1.50488 4.80018 1.50488 5.69334Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round" />
    </svg>
)

export const Success = ({ className, color = '#4AC97E' }: Props) => (
    <svg className={cn(
        className
    )} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.66667 9L7.57741 10.9107C7.90285 11.2362 8.43049 11.2362 8.75592 10.9107L12.3333 7.33333M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round" />
    </svg>
)

export const Artificium = ({ className, color = "#686B6E" }: Props) => {
    return (
        <svg className={cn(
            'w-4 h-4 md:w-auto md:h-auto',
            className
        )} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15.4221 7.30751L20.7806 18.0276C21.4632 19.3932 20.4704 21 18.9441 21H15.4221M15.4221 7.30751L13.8365 4.13535C13.0798 2.62155 10.9202 2.62155 10.1635 4.13535L3.21942 18.0276C2.53681 19.3932 3.52955 21 5.05592 21H8.57789M15.4221 7.30751L12 10.7306M8.57789 21H15.4221M8.57789 21L5.15577 17.5769M15.4221 21L8.57789 14.1538M12 10.7306L20.7264 19.4596M12 10.7306L8.57789 14.1538M3.27361 19.4596L5.15577 17.5769M5.15577 17.5769L8.57789 14.1538"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    )
}

export const Library = ({ className, color = '#686B6E' }: Props) => {
    return (
        <svg className={cn(
            'w-4 h-4 md:w-auto md:h-auto',
            className
        )} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M19 7.5H12.6499C12.2547 7.5 11.8966 7.26727 11.7361 6.90614L10.8889 5M19 7.5V7.5C20.1046 7.5 21 8.39543 21 9.5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H9.35013C9.74532 3 10.1034 3.23273 10.2639 3.59386L10.8889 5M19 7.5V6C19 5.44772 18.5523 5 18 5H10.8889" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const Search = ({ className, color = '#686B6E' }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cn("h-6 w-6 text-gray-600", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a4 4 0 11-8 0 4 4 0 018 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a4 4 0 11-8 0 4 4 0 018 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 19l-6-6M17 10l4-4" />
        </svg>
    )
}

export const Like = ({ className, color = '#686B6E' }: Props) => {
    return (
        <svg width="15" height="15" className={cn(className)} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.28571 14.6428V5.35712L9.28571 0.357117L10.6071 1.67855L9.67857 5.35712H15V8.49997L12.3929 14.6428H4.28571ZM0 14.6428V5.35712H2.85714V14.6428H0Z" fill="#CDCECF" />
        </svg>
    )
}

export const CommentDashed = ({ className, color = '#686B6E' }: Props) => {
    return (
        <svg width="13" height="13" className={cn(className)} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4937 1.25C12.4937 0.5625 11.9375 0 11.25 0H1.25C0.5625 0 0 0.5625 0 1.25V8.75C0 9.4375 0.5625 10 1.25 10H10L12.5 12.5L12.4937 1.25ZM9.375 7.5H3.125C2.78125 7.5 2.5 7.21875 2.5 6.875C2.5 6.53125 2.78125 6.25 3.125 6.25H9.375C9.71875 6.25 10 6.53125 10 6.875C10 7.21875 9.71875 7.5 9.375 7.5ZM9.375 5.625H3.125C2.78125 5.625 2.5 5.34375 2.5 5C2.5 4.65625 2.78125 4.375 3.125 4.375H9.375C9.71875 4.375 10 4.65625 10 5C10 5.34375 9.71875 5.625 9.375 5.625ZM9.375 3.75H3.125C2.78125 3.75 2.5 3.46875 2.5 3.125C2.5 2.78125 2.78125 2.5 3.125 2.5H9.375C9.71875 2.5 10 2.78125 10 3.125C10 3.46875 9.71875 3.75 9.375 3.75Z" fill="#CDCECF" />
        </svg>
    )
}

export const TripleDot = ({ className, color = '#686B6E' }: Props) => {
    return (
        <svg className={cn(className)} width="5" height="19" viewBox="0 0 5 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.49983 7.29901C2.21079 7.29901 1.92458 7.35594 1.65754 7.46655C1.3905 7.57716 1.14787 7.73929 0.943486 7.94367C0.739105 8.14805 0.57698 8.39069 0.466369 8.65772C0.355759 8.92476 0.298828 9.21097 0.298828 9.50001C0.298828 9.78905 0.355759 10.0753 0.466369 10.3423C0.57698 10.6093 0.739105 10.852 0.943486 11.0564C1.14787 11.2607 1.3905 11.4229 1.65754 11.5335C1.92458 11.6441 2.21079 11.701 2.49983 11.701C3.08357 11.7009 3.64335 11.4689 4.05602 11.056C4.4687 10.6431 4.70046 10.0833 4.70033 9.49951C4.7002 8.91577 4.46818 8.35599 4.05532 7.94332C3.64245 7.53064 3.08257 7.29888 2.49883 7.29901H2.49983ZM2.49983 4.69901C2.78874 4.69888 3.07479 4.64185 3.34166 4.53116C3.60852 4.42048 3.85097 4.25832 4.05517 4.05394C4.25937 3.84956 4.42131 3.60696 4.53175 3.33999C4.64218 3.07302 4.69896 2.78692 4.69883 2.49801C4.6987 2.2091 4.64166 1.92305 4.53098 1.65618C4.4203 1.38932 4.25814 1.14687 4.05376 0.942669C3.84937 0.738473 3.60677 0.576533 3.33981 0.466094C3.07284 0.355655 2.78674 0.29888 2.49783 0.299011C1.91435 0.299277 1.35488 0.531316 0.942486 0.944084C0.530094 1.35685 0.298563 1.91654 0.298828 2.50001C0.299094 3.08349 0.531133 3.64296 0.9439 4.05535C1.35667 4.46775 1.91635 4.69928 2.49983 4.69901ZM2.49983 14.299C1.91609 14.299 1.35625 14.5309 0.943486 14.9437C0.530719 15.3564 0.298828 15.9163 0.298828 16.5C0.298828 17.0838 0.530719 17.6436 0.943486 18.0564C1.35625 18.4691 1.91609 18.701 2.49983 18.701C3.08357 18.701 3.6434 18.4691 4.05617 18.0564C4.46894 17.6436 4.70083 17.0838 4.70083 16.5C4.70083 15.9163 4.46894 15.3564 4.05617 14.9437C3.6434 14.5309 3.08357 14.299 2.49983 14.299Z" fill="white" />
        </svg>
    )
}
