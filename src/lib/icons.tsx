interface Props {
    color?: string
    className?: string
}

export const CheveronRight = ({ color = '#9B9C9E' }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 5L11.9107 9.41074C12.2362 9.73618 12.2362 10.2638 11.9107 10.5893L7.5 15"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    );
};

export const CheveronDown = ({ color = '#9B9C9E' }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 8.33334L10.5893 12.7441C10.2638 13.0695 9.73618 13.0695 9.41074 12.7441L5 8.33334"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    );
};

export const Lock = ({ color = '#9B9C9E' }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 10V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V10M12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15ZM12 15V17M7 20H17C18.1046 20 19 19.1046 19 18V12C19 10.8954 18.1046 10 17 10H7C5.89543 10 5 10.8954 5 12V18C5 19.1046 5.89543 20 7 20Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    )
}

export const Globe = ({ color = '#9B9C9E' }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M3 12C3 7.02944 7.02944 3 12 3"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round" />
        </svg>
    )
}

export const Status = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
            <rect x="10.333" y="10" width="10.6667" height="10.6667" rx="5.33333" stroke="#131619" strokeWidth="4" />
            <g filter="url(#filter0_d_845_2875)">
                <ellipse cx="15.6663" cy="15.3333" rx="3.33333" ry="3.33333" fill="#4AC97E" />
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

export const TriLine = ({ className }: Props) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_335_8613)">
                <path d="M12 0V12H24"
                    stroke="#363A3D"
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

export const Plus = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10.0003 4.16669V10M10.0003 10V15.8334M10.0003 10H15.8337M10.0003 10H4.16699"
                stroke="#CDCECF"
                stroke-width="1.5"
                stroke-linecap="round" />
        </svg>
    )
}

export const ChatGradient = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
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

export const Chat = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 3H6C4.34315 3 3 4.34315 3 6V15.7574C3 16.553 3.31607 17.3161 3.87868 17.8787L6.71967 20.7197C7.19214 21.1921 8 20.8575 8 20.1893V19C8 17.8954 8.89543 17 10 17H18C19.6569 17 21 15.6569 21 14V6C21 4.34315 19.6569 3 18 3Z" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" />
        </svg>
    )
}

export const TwoDots = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path d="M12.7507 6.25001C12.7507 7.4006 11.8179 8.33334 10.6673 8.33334C9.51672 8.33334 8.58398 7.4006 8.58398 6.25001C8.58398 5.09941 9.51672 4.16667 10.6673 4.16667C11.8179 4.16667 12.7507 5.09941 12.7507 6.25001Z" fill="#686B6E" />
            <path d="M12.7507 13.75C12.7507 14.9006 11.8179 15.8333 10.6673 15.8333C9.51672 15.8333 8.58398 14.9006 8.58398 13.75C8.58398 12.5994 9.51672 11.6667 10.6673 11.6667C11.8179 11.6667 12.7507 12.5994 12.7507 13.75Z" fill="#686B6E" />
        </svg>
    )
}

export const GetStarted = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="magic-wand">
                <path id="icon" d="M10.5002 10.5L12.586 8.41421C13.367 7.63316 14.6334 7.63317 15.4144 8.41421L15.586 8.58579C16.367 9.36684 16.367 10.6332 15.586 11.4142L13.5002 13.5M10.5002 10.5L3.4144 17.5858C2.63335 18.3668 2.63335 19.6332 3.4144 20.4142L3.58597 20.5858C4.36702 21.3668 5.63335 21.3668 6.4144 20.5858L13.5002 13.5M10.5002 10.5L13.5002 13.5M8.29953 8.35722L6.00019 7.38534M11.3401 5.31499L10.4105 3M15.6457 5.31499L16.5752 3M18.6847 8.35353L20.9895 7.3949M18.6847 12.6465L21.0002 13.5794M15.6421 15.6865L16.5753 18"
                    stroke="#686B6E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
            </g>
        </svg>
    )
}

export const Artificium = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15.4221 7.30751L20.7806 18.0276C21.4632 19.3932 20.4704 21 18.9441 21H15.4221M15.4221 7.30751L13.8365 4.13535C13.0798 2.62155 10.9202 2.62155 10.1635 4.13535L3.21942 18.0276C2.53681 19.3932 3.52955 21 5.05592 21H8.57789M15.4221 7.30751L12 10.7306M8.57789 21H15.4221M8.57789 21L5.15577 17.5769M15.4221 21L8.57789 14.1538M12 10.7306L20.7264 19.4596M12 10.7306L8.57789 14.1538M3.27361 19.4596L5.15577 17.5769M5.15577 17.5769L8.57789 14.1538"
                stroke="#686B6E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    )
}

export const Library = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 7.5H12.6499C12.2547 7.5 11.8966 7.26727 11.7361 6.90614L10.8889 5M19 7.5V7.5C20.1046 7.5 21 8.39543 21 9.5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H9.35013C9.74532 3 10.1034 3.23273 10.2639 3.59386L10.8889 5M19 7.5V6C19 5.44772 18.5523 5 18 5H10.8889" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}