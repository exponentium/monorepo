"use client"

import React, { useState } from "react"
import { IoAlertCircle } from "react-icons/io5"
import { toast } from "sonner"
import { Button } from "@spheroid/ui"

import ProductDisplayCard from "@/components/views/ProductDisplayCard"

const Services = () => {
  const [image, setImage] = useState<File | null>(null)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState<string>("0")
  const [loyaltyPoint, setLoyaltyPoint] = useState<string>("0")

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null

    if (file && !file.type.startsWith("image/")) {
      toast.error("Please upload a valid image file (JPG, PNG, GIF).")
      return
    }

    setImage(file)
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value)
  }

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (value === "" || /^[0-9]*$/.test(value)) {
      setPrice(value)
    }
  }

  const handleLoyaltyPointChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (value === "" || /^[0-9]*$/.test(value)) {
      setLoyaltyPoint(value)
    }
  }

  const validateFields = () => {
    if (!image) {
      toast.error("Please upload an image.")
      return false
    }
    if (!name.trim()) {
      toast.error("Please enter a product name.")
      return false
    }
    if (!price || price === "0") {
      toast.error("Please enter a valid price.")
      return false
    }
    if (!loyaltyPoint || loyaltyPoint === "0") {
      toast.error("Please enter loyalty points.")
      return false
    }
    return true
  }

  const handleCreateProduct = () => {
    if (validateFields()) {
      toast.success("Service created successfully!")
      // Add your product creation logic here
    }
  }

  return (
    <div className="flex w-full flex-col gap-4 p-6">
      <div className="flex w-full flex-row gap-4 rounded-lg p-6 shadow-xl">
        <div className="flex w-2/3 flex-col gap-4 rounded-lg border border-gray-400 p-4">
          <h2 className="text-xl font-semibold">Service Details</h2>
          <hr />
          <div className="flex flex-row items-center gap-2 rounded-lg bg-gray-200 p-2">
            <IoAlertCircle />
            <span className="text-base">
              The information on this page is unalterable; kindly ensure that the details are entered accurately.
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-start gap-2 font-normal text-gray-500">
              {image ? (
                <span className="text-base text-green-600">Uploaded Image: {image.name}</span>
              ) : (
                <>
                  <span className="text-base">Image *</span>
                  <span className="text-sm">JPG, PNG, GIF - resolution 350*350, size 5MB recommended</span>
                </>
              )}
              <label
                htmlFor="image-upload"
                className="cursor-pointer rounded-md border-2 border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50"
              >
                Upload Image
              </label>
              <input
                id="image-upload"
                type="file"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
            <div className="flex flex-col items-start gap-2 font-normal text-gray-500">
              <span className="text-base">Name *</span>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="flex w-[400px] rounded-lg border border-gray-400 p-2"
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col items-start gap-2 font-normal text-gray-500">
              <span className="text-base">Description</span>
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                className="flex w-[400px] rounded-lg border border-gray-400 p-2"
                placeholder="Description"
              />
            </div>
            <div className="flex flex-col items-start gap-2 font-normal text-gray-500">
              <span className="text-base">Price *</span>
              <input
                type="text"
                value={price}
                onChange={handlePriceChange}
                className="flex w-[400px] rounded-lg border border-gray-400 p-2"
                placeholder="Price"
              />
            </div>
            <div className="flex flex-col items-start gap-2 font-normal text-gray-500">
              <span className="text-base">Loyalty Points per purchase *</span>
              <input
                type="text"
                value={loyaltyPoint}
                onChange={handleLoyaltyPointChange}
                className="flex w-[400px] rounded-lg border border-gray-400 p-2"
                placeholder="Loyalty Points"
              />
            </div>
          </div>
          <Button
            variant="primary"
            onClick={handleCreateProduct}
          >
            Create
          </Button>
        </div>
        <ProductDisplayCard
          price={price}
          image={image ? URL.createObjectURL(image) : undefined}
          loyaltyPoints={loyaltyPoint}
          description={description}
          name={name}
        />
      </div>
    </div>
  )
}

export default Services
