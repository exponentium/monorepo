"use client"

import { ReactNode, useState } from "react"
import { baseSepolia } from "viem/chains"
import { State, WagmiProvider } from "wagmi"
import { OnchainKitProvider } from "@coinbase/onchainkit"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { getConfig } from "./wagmi"

export function Providers(props: { children: ReactNode; initialState?: State }) {
  const [config] = useState(() => getConfig())
  const [queryClient] = useState(() => new QueryClient())
  return (
    <WagmiProvider
      config={config}
      initialState={props.initialState}
    >
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          apiKey="5XWSQ9a9m1RWedWAMXwinIMEafSJWOZO"
          chain={baseSepolia}
        >
          {props.children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
