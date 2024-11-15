import React from "react"

import ServerContext from "./context"

const useServer = () => {
  const context = React.useContext(ServerContext)

  if (!context) {
    throw new Error("useServer must be used within a ServerProvider")
  }

  return context
}

export default useServer
