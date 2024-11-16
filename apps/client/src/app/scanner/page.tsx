"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { BiDotsVertical, BiSolidTorch } from "react-icons/bi"
import { GrClose, GrGallery } from "react-icons/gr"
import { MdQrCode2 } from "react-icons/md"
import Rodal from "rodal"
import { boundingBox, Scanner } from "@yudiel/react-qr-scanner"
import { SendTx } from "@spheroid/dynamic"
import { parseUnits } from "viem"

import { truncateAddress } from "@/utils/truncateAddress"

const ScannerPage = () => {
  const router = useRouter()
  const { open } = SendTx.useSendBalance()

  const [data, setData] = useState<{
    stack: string | "spheroid"
    orderId: string
    total: number
    merchant: { name: string; logo?: string; address: string }
    products: { name: string; image?: string; price: number; quantity: number }[]
  } | null>(null)
  const onCickSend = async () => {
    if (!data) {
      console.log("data is null")
      return
    }

    try {
      const tx = await open({
        recipientAddress: data.merchant.address,
        value: BigInt(data.total),
      })
    } catch (err) {
      // Handle the promise rejection
    }
  }

  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-0 right-0 top-0 h-20 bg-black/80 backdrop-blur-md">
            <div className="flex items-center justify-between px-6 py-5">
              <button
                onClick={() => {
                  router.replace("/")
                }}
                className="flex items-center gap-1 text-white"
              >
                <GrClose size={20} />
              </button>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-white">
                  <BiSolidTorch size={24} />
                </button>
                <button className="flex items-center gap-1 text-white">
                  <MdQrCode2 size={24} />
                </button>
                <button className="flex items-center gap-1 text-white">
                  <BiDotsVertical size={24} />
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[calc(100%-25rem)] bg-black/80 backdrop-blur-md" />
          <div className="absolute bottom-[calc(100%-25rem)] left-0 top-20 w-[calc(50%-160px)] bg-black/80 backdrop-blur-md" />
          <div className="absolute bottom-[calc(100%-25rem)] right-0 top-20 w-[calc(50%-160px)] bg-black/80 backdrop-blur-md" />
          <div className="glowing-card absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 transform" />

          <button className="center bg-whites-wallet_modal_background absolute left-1/2 right-0 top-[28rem] -translate-x-1/2 gap-1.5 rounded-full px-2.5 py-2 text-sm">
            <GrGallery />
            <span>Upload from Gallery</span>
          </button>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Scanner
            allowMultiple={true}
            scanDelay={2000}
            paused={data !== null}
            onScan={(detectedCodes) => {
              const rawValues = detectedCodes.map((code) => code.rawValue)
              rawValues.forEach((rawValue) => {
                try {
                  const parsedValue = JSON.parse(rawValue)
                  console.log("Parsed value", parsedValue)
                  if (parsedValue && parsedValue.stack === "spheroid") {
                    console.log("Data found", parsedValue)
                    setData(parsedValue)
                  } else {
                    console.log("No matching data found")
                  }
                } catch (error) {
                  console.error("Failed to parse rawValue:", rawValue, error)
                }
              })
            }}
            onError={(error) => {
              console.log(`onError: ${error}'`)
            }}
            classNames={{
              container: "relative w-full h-full",
              video: "z-0 w-full h-full object-cover",
            }}
            components={{
              finder: false,
              zoom: true,
              tracker: boundingBox,
            }}
          />
        </div>
      </div>
      <Rodal
        visible
        onClose={() => {}}
        className="fixed inset-0 !z-[65] h-full w-full"
        customStyles={{
          background: "transparent",
        }}
        closeOnEsc
      >
        <div className="fixed inset-0 !z-[65] flex flex-col justify-end rounded-2xl p-0 md:items-center md:justify-center md:p-4">
          <div className="relative !z-[60] flex min-w-[380px] flex-col items-center rounded-t-xl bg-black px-5 py-6">
            <div className="absolute left-1/2 top-2 mb-2 h-1 w-10 -translate-x-1/2 transform rounded-full bg-gray-500" />
            <h2 className="text-texts-1 mb-1 text-lg font-semibold">
              {data ? `Pay ${truncateAddress(data.merchant.name)}` : "Scan QR code of your merchant"}
            </h2>
            <p className="text-texts-6 text-sm">Instant • Secure • Easy</p>

            {/* Parsed data */}
            {data && (
              <div className="mt-4 w-full max-w-md rounded-lg bg-white p-6 shadow-md">
                {/* Pay to Section */}
                <div className="mb-6">
                  <div className="flex items-center text-sm font-semibold text-gray-700">
                    <span>Pay to:</span>
                  </div>
                  <div className="mt-2 flex items-center">
                    {/* Optional: Merchant Logo */}
                    {data.merchant.logo && (
                      <img
                        src={data.merchant.logo}
                        alt="Merchant Logo"
                        className="mr-3 h-10 w-10 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{data.merchant.name}</h2>
                      <p className="text-sm text-gray-500">{truncateAddress(data.merchant.address)}</p>
                    </div>
                  </div>
                </div>
                {/* Products Section */}
                <div className="mb-6">
                  <div className="flex items-center text-sm font-semibold text-gray-700">
                    <span>Products:</span>
                  </div>
                  <div className="mt-2">
                    {data.products.map((product, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between border-b py-3 last:border-b-0"
                      >
                        <div className="flex items-center">
                          {/* Optional: Product Image */}
                          {product.image && (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="mr-3 h-8 w-8 rounded-md object-cover"
                            />
                          )}
                          <span className="text-gray-800">{product.name}</span>
                        </div>
                        <div className="text-gray-600">
                          {product.quantity} x ${product.price.toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Total Section */}
                <div className="flex items-center justify-between border-t pt-4">
                  <span className="text-lg font-semibold text-gray-900">Total:</span>
                  <span className="text-lg font-bold text-gray-900">${data.total.toFixed(2)}</span>
                </div>
              </div>
            )}

            <button onClick={onCickSend}>Pay</button>
          </div>
        </div>
      </Rodal>
    </>
  )
}

export default ScannerPage
