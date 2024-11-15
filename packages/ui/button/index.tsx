import React from "react"
import { cva, VariantProps } from "class-variance-authority"

const buttonClasses = cva(
  "rounded font-medium shadow-sm transition-colors duration-300 focus:outline-none focus:ring-2",
  {
    variants: {
      type: {
        primary: "bg-black hover:bg-opacity-90 text-white",
        secondary: "bg-white hover:bg-gray-200 text-gray-800",
        disabled: "bg-gray-400 hover:bg-gray-400 text-gray-500 cursor-not-allowed",
        outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
      },
      size: {
        small: "px-4 py-2 text-sm",
        medium: "px-6 py-2 text-base",
        large: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      type: "primary",
      size: "medium",
    },
  }
)

type ButtonProps = VariantProps<typeof buttonClasses> & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ type, size, className, ...props }) => {
  return (
    <button
      type="button"
      className={buttonClasses({ type, size, className })}
      {...props}
    />
  )
}

export default Button
