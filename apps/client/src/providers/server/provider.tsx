"use client"

import React from "react"

import ServerContext from "./context"

const ServerProvider: IProvider = ({ children }: IProvider) => {
  return <ServerContext.Provider value={{}}>{children}</ServerContext.Provider>
}

export default ServerProvider
