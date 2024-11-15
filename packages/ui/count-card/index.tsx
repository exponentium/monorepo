import React from "react"
import { cva } from "class-variance-authority"
import { IoAlertCircleOutline } from "react-icons/io5"

type CountCardProps = {
  label: string
  count: number | string
}

const cardClasses = cva("flex flex-col items-start gap-2 rounded-md p-5 shadow-lg")

const CountCard: React.FC<CountCardProps> = ({ label, count }) => {
  return (
    <div className={cardClasses()}>
      <div className="flex w-full flex-row items-center justify-between">
        <h2 className="text-xl font-semibold">{label}</h2>
        <IoAlertCircleOutline />
      </div>
      <div className="text-xl font-bold">{count}</div>
    </div>
  )
}

export default CountCard
