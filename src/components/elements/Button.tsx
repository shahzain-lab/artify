import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

export type TVariant =  "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "green" | "orange" | "gray" | "light"
export type TSize =  "default" | "sm" | "lg" | "icon"

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-900",
    {
      variants: {
        variant: {
          default: "bg-theme-greenish text-slate-950",
          green: "bg-green-main text-slate-950",
          gray: "bg-noble-black-600 text-gray",
          orange: "bg-orange-main text-slate-950",
          light: "bg-light-main text-slate-950",
          destructive: "bg-red-500 text-slate-950",
          outline:
            "border-2 border-noble-black-400 ",
          secondary:
            "bg-slate-100 text-slate-900 ",
          ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-950",
          link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-950",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  )

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const Comp = "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant: variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
