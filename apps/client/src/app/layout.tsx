import React from "react"
import { Metadata } from "next"
import { Toaster } from "sonner"
import { Providers as CoinbaseProvider } from "@spheroid/coinbase"
import { DynamicProvider } from "@spheroid/dynamic"

import "@spheroid/styles/src/styles/global.css"

export const metadata: Metadata = {
  title: {
    default: "CodeDump",
    template: "%s | CodeDump",
  },
  description: "",
  verification: {
    me: "",
    google: "",
    yahoo: "",
  },
}

const RootLayout = ({ children }: Readonly<IChildren>) => {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Toaster
          position="bottom-right"
          theme="system"
        />
        <CoinbaseProvider>
          <DynamicProvider>
            <>{children}</>
          </DynamicProvider>
        </CoinbaseProvider>
      </body>
    </html>
  )
}

export default RootLayout
