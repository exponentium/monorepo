import React from "react"
import { Metadata } from "next"

import "@spheroid/styles/src/styles/global.css"

export const metadata: Metadata = {
  title: {
    absolute: "Webhooks | Spheroid",
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
        <>{children}</>
      </body>
    </html>
  )
}

export default RootLayout
