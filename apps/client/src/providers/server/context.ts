"use client"

import React from "react"

type IServer = {}

const initialServerContext = {} as IServer

const ServerContext = React.createContext<IServer>(initialServerContext)

export default ServerContext
