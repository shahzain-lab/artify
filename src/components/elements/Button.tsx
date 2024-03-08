import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

export type TColor = "primary" | "destructive" | "secondary" | 'blue' | "ghost" | "link" | "green" | "warning" | "gray" | "light"
export type TSize = "default" | "sm" | "lg" | "icon"

const buttonVariants = cva(
  "flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-900",
  {
    variants: {
      color: {
        primary: "bg-theme-greenish text-slate-950",
        green: "bg-emerald-500 text-white",
        gray: "bg-noble-black-600 text-gray",
        warning: "bg-yellow-500 text-white",
        light: "bg-noble-black-400 text-white",
        destructive: "bg-red-500 text-white",
        secondary: "bg-slate-100 text-slate-900 ",
        blue: "bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300",
        ghost: "bg-slate-800 hover:text-white",
        link: "text-blue-500 underline-offset-4 underline ",
      },
      variant: {
        primaryoutline: 'border border-theme-greenish bg-inherit text-theme-greenish',
        greenoutline: "border border-emerald-500 bg-inherit text-emerald-500",
        grayoutline: "border border-noble-black-600 bg-inherit text-noble-black-600",
        warningoutline: "border border-yellow-500 bg-inherit text-yellow-500",
        lightoutline: "border border-noble-black-400 bg-inherit text-noble-black-400",
        destructiveoutline: "border border-red-500 bg-inherit text-red-500",
        secondaryoutline: "border border-slate-100 bg-inherit text-slate-100 ",
        ghostoutline: "border border-slate-800 bg-inherit hover:text-slate-800",
        linkoutline: "text-blue-500 underline-offset-4 underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      outlook: {
        rounded: 'rounded-3xl',
        square: ''
      }
    },
    defaultVariants: {
      color: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  color?: TColor;
  variant?: any;
  outlook?: 'rounded' | 'square';
  Icon?: JSX.Element;
  children?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, color, variant = 'default', outlook = 'square', size, Icon, children, ...props }, ref) => {
    const Comp = "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant: variant !== 'default' ? `${color}${variant}` : variant, color, outlook, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {Icon}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
