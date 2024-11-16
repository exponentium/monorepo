"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { BiDotsVertical, BiSolidTorch } from "react-icons/bi"
import { GrClose, GrGallery } from "react-icons/gr"
import { MdQrCode2 } from "react-icons/md"
import Rodal from "rodal"
import { boundingBox, Scanner } from "@yudiel/react-qr-scanner"

const ScannerPage = () => {
  const router = useRouter()

  const truncateAddress = (address: string) => {
    if (!address) {
      return ""
    }
    return `(${address.slice(0, 4)}...${address.slice(-4)})`
  }

  const [data, setData] = useState<{
    orderId: string
    merchantAddress: string
    merchantName: string
    total: number
    products: { name: string; price: number; quantity: number }[]
  } | null>(null)

  //   useEffect(() => {
  //     const rawData = data ? JSON.parse(data) : null
  //     if (rawData && rawData.rawValue && rawData.rawValue !== "") {
  //     }
  //   }, [data])

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
            <h2 className="text-texts-1 mb-1 text-lg font-semibold">Scan QR code of your merchant</h2>
            <p className="text-texts-6 text-sm">Instant • Secure • Easy</p>

            {/* Parsed data */}
            {data && (
              <div className="mt-4 flex w-full flex-col gap-2 text-white">
                <div className="flex flex-col items-start">
                  <span className="text-xs font-normal italic">Pay to</span>
                  <div className="flex flex-row items-center gap-1 text-sm font-medium">
                    <span>{data.merchantName}</span>
                    <span>{truncateAddress(data.merchantAddress)}</span>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start">
                  <span className="text-xs font-normal italic">Products</span>
                  {data.products.map((product) => (
                    <div
                      className="flex w-full flex-row items-center justify-between"
                      key={product.quantity}
                    >
                      <span className="text-xs font-medium">{product.name}</span>
                      <span className="text-xs font-normal italic text-gray-200">
                        {product.price} * {product.quantity}
                      </span>
                    </div>
                  ))}
                </div>
                <hr />
                <div className="flex w-full flex-row items-center justify-between">
                  <span className="text-xs font-normal">Total:</span>
                  <span className="text-xs font-normal italic text-gray-200">{data.total}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </Rodal>
    </>
  )
}

export default ScannerPage
