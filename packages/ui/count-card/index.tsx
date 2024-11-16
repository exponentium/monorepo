import React from "react"
import { cva } from "class-variance-authority"
import { IoAlertCircleOutline } from "react-icons/io5"

type CountCardProps = {
  label: string
  count: number | string
}

const cardClasses = cva("flex flex-col items-start gap-2 rounded-md p-4 shadow-lg", {
  variants: {
    size: {
      small: "w-[200px]",
      medium: "w-[250px]",
      large: "w-[300px]",
    },
  },
  defaultVariants: {
    size: "medium",
  },
})

const CountCard: React.FC<CountCardProps & { size?: "small" | "medium" | "large" }> = ({ label, count, size }) => {
  return (
    <div className={cardClasses({ size })}>
      <div className="flex w-full flex-row items-center justify-between">
        <h2 className="text-xl font-semibold">{label}</h2>
        <IoAlertCircleOutline />
      </div>
      <div className="text-xl font-bold">{count}</div>
    </div>
  )
}

export default CountCard
