"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { AiOutlineRobot } from "react-icons/ai"
import { FaBell, FaGift, FaHome, FaTrophy, FaWallet } from "react-icons/fa"
import { DynamicSdk } from "@spheroid/dynamic"

const HomeView = () => {
  const router = useRouter()
  const loggedIn = DynamicSdk.useIsLoggedIn()

  if (loggedIn) {
    return (
      <>
        {/* Header */}
        <header className="bg-secondary text-primary flex items-center justify-between px-4 py-4">
          <h1 className="text-xl font-semibold">Wallet</h1>
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span className="font-medium">Spheroid</span>
            <button className="text-primary transform transition-transform hover:rotate-180">&#9662;</button>
          </div>
        </header>

        {/* Tab Bar */}
        <div className="mx-4 mt-4 grid grid-cols-3 rounded-lg bg-white shadow">
          <Link
            href="/"
            className="center text-secondary h-full grow space-x-2 py-4 text-center transition-transform hover:scale-105"
          >
            <span>History</span>
          </Link>
          <Link
            href="/scanner"
            className="center bg-accent h-full grow space-x-2 bg-black px-4 py-4 text-center text-white transition-transform hover:scale-105 active:scale-95"
          >
            <span>Scan</span>
          </Link>
          <Link
            href="/"
            className="center text-secondary h-full grow space-x-2 py-4 text-center transition-transform hover:scale-105"
          >
            <span>Transfer</span>
          </Link>
        </div>

        {/* Recent Activities */}
        <section className="mx-4 mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-secondary text-lg font-semibold">Recent Activities</h2>
            <button className="text-blue-500 transition-colors hover:text-blue-700">View Collections</button>
          </div>
          <div className="mt-4 flex transform flex-col items-center justify-center rounded-lg bg-gray-100 p-8 transition-all hover:scale-105">
            <div className="mb-4 rounded-full bg-gray-200 p-4">
              <AiOutlineRobot
                size={40}
                className="animate-bounce text-gray-500"
              />
            </div>
            <p className="text-gray-500">No recent claims.</p>
          </div>
        </section>

        {/* Tokens */}
        <section className="mx-4 mt-6">
          <h2 className="text-secondary text-lg font-semibold">Tokens</h2>
          <div className="mt-4 transform rounded-lg bg-gray-100 p-4 transition-all hover:scale-105">
            <p className="text-gray-500">No tokens available.</p>
          </div>
        </section>

        {/* Bottom Navigation */}
        <nav className="bg-secondary fixed bottom-0 left-0 right-0 py-4">
          <div className="text-primary flex justify-around">
            <button className="flex transform flex-col items-center transition-transform hover:scale-110">
              <FaHome size={24} />
              <span className="text-xs">Home</span>
            </button>
            <button className="flex transform flex-col items-center transition-transform hover:scale-110">
              <FaTrophy size={24} />
              <span className="text-xs">Rewards</span>
            </button>
            <button className="bg-accent flex transform flex-col items-center rounded-full p-2 text-white transition-transform hover:scale-110">
              <FaGift size={24} />
            </button>
            <button className="flex transform flex-col items-center transition-transform hover:scale-110">
              <FaWallet size={24} />
              <span className="text-xs">Wallet</span>
            </button>
            <button className="flex transform flex-col items-center transition-transform hover:scale-110">
              <FaBell size={24} />
              <span className="text-xs">Updates</span>
            </button>
          </div>
        </nav>
      </>
    )
  }

  return (
    <main className="flex h-screen flex-col">
      <div className="bg-primary-base flex grow items-center justify-center">
        <></>
      </div>
      <div className="flex min-h-[40%] flex-col items-center justify-center bg-white p-8">
        <h2 className="mb-4 text-2xl font-bold">Easy payments online</h2>
        <p className="mb-6 text-center text-lg">Make your payment experience better today. No hidden fees</p>
        <style>{`
        #dynamic-widget {
            width: 100%;
            height: 100%;
        }
      `}</style>
        <div className="mx-auto w-fit whitespace-nowrap">
          <DynamicSdk.DynamicWidget />
        </div>
      </div>
    </main>
  )
}

export default HomeView
