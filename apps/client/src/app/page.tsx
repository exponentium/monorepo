import React from "react"
import { DynamicSdk } from "@spheroid/dynamic"

const HomePage = () => {
  return (
    <main className="flex h-screen flex-col">
      <div className="bg-primary-base flex grow items-center justify-center">
        <></>
      </div>
      <div className="flex min-h-[40%] flex-col items-center justify-center bg-white p-8">
        <h2 className="mb-4 text-2xl font-bold">Easy payments online</h2>
        <p className="mb-6 text-center text-lg">Make your payment experience better today. No hidden fees</p>
        <Widget />
      </div>
    </main>
  )
}

export default HomePage

const Widget = () => {
  return (
    <>
      <style>{`
        #dynamic-widget {
            width: 100%;
            height: 100%;
        }
      `}</style>
      <div className="relative flex w-full items-stretch">
        <DynamicSdk.DynamicWidget
          buttonClassName=""
          buttonContainerClassName=""
        />
      </div>
    </>
  )
}
