import React from "react"
import { DynamicSdk } from "@spheroid/dynamic"

const HomePage = () => {
  return (
    <main className="align-center relative flex min-h-screen flex-col justify-end">
      <div className="z-10 mx-auto mb-20">
        <DynamicSdk.DynamicWidget />
      </div>
    </main>
  )
}

export default HomePage
