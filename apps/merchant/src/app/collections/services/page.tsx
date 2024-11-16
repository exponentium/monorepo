"use client"

import React, { useState } from "react"
import { IoAlertCircleOutline } from "react-icons/io5"
import { toast } from "sonner"
import { Button } from "@spheroid/ui"

import ProductDisplayCard from "@/components/views/ProductDisplayCard"

const Service: React.FC = () => {
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
    if (value === "" || /^[0-9]*\.?[0-9]*$/.test(value)) {
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
    if (!price || parseFloat(price) <= 0) {
      toast.error("Please enter a valid price.")
      return false
    }
    if (!loyaltyPoint || parseInt(loyaltyPoint) <= 0) {
      toast.error("Please enter loyalty points.")
      return false
    }
    return true
  }

  const handleCreateProduct = () => {
    if (validateFields()) {
      toast.success("Product created successfully!")
      // TODO: Upload product details to the storage

      // TODO: Register product/service to the registry
    }
  }

  return (
    <div className="h-screen w-full overflow-y-scroll bg-gray-50 p-8 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Create New Product</h1>
          <p className="mt-2 text-gray-600">Fill in the details below to add a new product to your collection.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="rounded-lg bg-white p-6 shadow">
              <div className="mb-6">
                <div className="flex items-center text-yellow-600">
                  <IoAlertCircleOutline className="mr-2 h-6 w-6" />
                  <p className="text-sm">
                    Ensure that the details entered here are accurate as they cannot be modified later.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                {/* Image Upload */}
                <div>
                  <label
                    htmlFor="image-upload"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Product Image <span className="text-red-500">*</span>
                  </label>
                  {image ? (
                    <div className="mt-2 flex items-center">
                      <img
                        src={URL.createObjectURL(image)}
                        alt="Product"
                        className="h-20 w-20 rounded-md border border-gray-300 object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => setImage(null)}
                        className="ml-4 text-sm text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="mt-2">
                      <label
                        htmlFor="image-upload"
                        className="flex cursor-pointer items-center justify-center rounded-md border border-dashed border-gray-300 p-6 text-center"
                      >
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H20C14.4772 8 10 12.4772 10 18V30C10 35.5228 14.4772 40 20 40H28C33.5228 40 38 35.5228 38 30V18C38 12.4772 33.5228 8 28 8Z"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M22 14L26 18M26 14L22 18"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <span className="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 hover:text-blue-500">
                              Upload an image
                            </span>
                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                        </div>
                        <input
                          id="image-upload"
                          name="image-upload"
                          type="file"
                          accept="image/*"
                          className="sr-only"
                          onChange={handleImageChange}
                        />
                      </label>
                    </div>
                  )}
                </div>

                {/* Product Name */}
                <div>
                  <label
                    htmlFor="product-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Product Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="product-name"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    className="mt-1 block w-full rounded-md border border-solid border-gray-300 p-2 sm:text-sm"
                    placeholder="Enter product name"
                  />
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="product-description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id="product-description"
                    value={description}
                    onChange={handleDescriptionChange}
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-solid border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Write a brief description"
                  />
                </div>

                {/* Price */}
                <div>
                  <label
                    htmlFor="product-price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Price ($) <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="product-price"
                    type="text"
                    value={price}
                    onChange={handlePriceChange}
                    className="mt-1 block w-full rounded-md border border-solid border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter price"
                  />
                </div>

                {/* Loyalty Points */}
                <div>
                  <label
                    htmlFor="product-mint"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Loyalty Points <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="product-mint"
                    type="text"
                    value={loyaltyPoint}
                    onChange={handleLoyaltyPointChange}
                    className="mt-1 block w-full rounded-md border border-solid border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter loyalty points"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="mb-4 text-lg font-medium text-gray-800">Preview</h2>
            <ProductDisplayCard
              price={price}
              image={image ? URL.createObjectURL(image) : undefined}
              loyaltyPoints={loyaltyPoint}
              description={description}
              name={name}
            />

            <div className="pt-5">
              <Button
                variant="primary"
                className="center mb-4 w-full rounded-md bg-blue-600 px-6 py-3 text-white shadow-md transition duration-300 hover:bg-blue-700"
                onClick={handleCreateProduct}
              >
                Create Product
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
