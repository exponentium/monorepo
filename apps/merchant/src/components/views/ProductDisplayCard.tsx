import React from "react"
import Image from "next/image"

import dummyImage from "../../../public/images/dummy-image.png"

type ProductDisplayCardProps = {
  image?: string
  name?: string
  description?: string
  price?: string
  loyaltyPoints?: string
}

const ProductDisplayCard: React.FC<ProductDisplayCardProps> = ({ image, name, description, price, loyaltyPoints }) => {
  return (
    <div className="flex w-[400px] flex-col gap-4 rounded-lg border border-gray-400 p-4 shadow-lg">
      <h2 className="text-lg font-semibold">{name ? name : "Product Name"}</h2>
      {image ? (
        <Image
          src={image}
          width={350}
          height={350}
          alt="product"
        />
      ) : (
        <Image
          src={dummyImage}
          width={350}
          height={350}
          alt="dummy"
        />
      )}
      <div className="text-base font-normal">{description && description}</div>
      <div className="rounded-lg bg-gray-200 bg-opacity-70 px-2 py-1 text-base">Price: {price && price} </div>
      <div className="rounded-lg bg-gray-200 bg-opacity-70 px-2 py-1 text-base">
        Loyalty points per purchase: {loyaltyPoints && loyaltyPoints}
      </div>
    </div>
  )
}

export default ProductDisplayCard
