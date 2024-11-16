"use client"

import React, { useState } from "react"
import Image from "next/image"
import { toast } from "sonner"
import { Button } from "@spheroid/ui"

const SignUp = () => {
  const [tokenName, setTokenName] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [tokenSymbol, setTokenSymbol] = useState("")
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null

    if (file && !file.type.startsWith("image/")) {
      toast.error("Please upload a valid image file (JPG, PNG, GIF).")
      return
    }

    if (file) {
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
      setImage(file)
    }
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTokenName(event.target.value)
  }

  const handleSymbolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTokenSymbol(event.target.value)
  }

  const handleSubmit = () => {
    // Check if all required fields are filled
    if (!tokenName.trim()) {
      toast.error("Please enter a token name")
      return
    }

    if (!tokenSymbol.trim()) {
      toast.error("Please enter a token symbol")
      return
    }

    if (!image) {
      toast.error("Please upload a token image")
      return
    }

    // If all validations pass, proceed with form submission
    try {
      // Add your form submission logic here
      toast.success("Token created successfully!")
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to create token. Please try again.")
    }
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="my-6 flex w-[500px] flex-col items-center gap-4 rounded-lg p-4 shadow-lg">
        <h1 className="text-center text-xl font-semibold">Create your Loyalty Token</h1>

        {/* Image Upload Section */}
        <div className="relative mt-4">
          <label
            htmlFor="image-upload"
            className="group relative flex cursor-pointer flex-col items-center"
          >
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-dashed border-gray-300 transition-all hover:border-gray-400">
              {previewUrl && image ? (
                <Image
                  src={previewUrl}
                  alt="Token preview"
                  fill
                  className="object-cover"
                />
              ) : (
                <Image
                  src={"/images/dummy-image.png"}
                  fill
                  alt="token"
                  className="object-cover"
                />
              )}
            </div>
          </label>
          <input
            id="image-upload"
            type="file"
            className="hidden"
            onChange={handleImageChange}
            accept="image/*"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex w-full flex-col items-start gap-2 font-normal text-gray-500">
            <span className="text-base">Token Name *</span>
            <input
              type="text"
              value={tokenName}
              onChange={handleNameChange}
              className="flex w-full rounded-lg border border-gray-400 p-2"
              placeholder="Token Name"
            />
          </div>
          <div className="flex w-full flex-col items-start gap-2 font-normal text-gray-500">
            <span className="text-base">Token Symbol *</span>
            <input
              type="text"
              value={tokenSymbol}
              onChange={handleSymbolChange}
              className="flex w-full rounded-lg border border-gray-400 p-2"
              placeholder="Token Symbol"
            />
          </div>
        </div>
        <Button
          variant={"primary"}
          className="w-full text-white"
          onClick={handleSubmit}
        >
          Create
        </Button>
      </div>
    </div>
  )
}

export default SignUp
