import React from "react"
import { ConnectWallet, Wallet } from "@spheroid/coinbase"
import { DynamicSdk } from "@spheroid/dynamic"

const HomePage = () => {
  return (
    <main className="align-center relative flex min-h-screen flex-col justify-end">
      <div className="z-10 mx-auto mb-20">
        <DynamicSdk.DynamicWidget />
        <Wallet>
          <ConnectWallet
            className={`bg-lightgreen text-darkgreen rounded-[10px] px-6 py-2.5 text-sm font-medium md:px-8`}
          >
            {/* <Avatar className="h-6 w-6" /> */}
            {/* <Name /> */}
          </ConnectWallet>
          {/* <WalletDropdown> */}
          {/* <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick >
              <Avatar />
              <Name />
              <Address className={color.foregroundMuted} />
            </Identity> */}
          {/* <WalletDropdownDisconnect /> */}
          {/* </WalletDropdown> */}
        </Wallet>
      </div>
    </main>
  )
}

export default HomePage
