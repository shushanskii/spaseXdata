import React, { createContext, useState } from 'react'

interface State {
  flightNumber?: number
  showLaunchInfo: (number) => void
}

export const LaunchInfoContext = createContext<State>({} as State)

export function LaunchInfoContextProvider({
  children,
}: React.PropsWithChildren<unknown>) {
  const [state, setState] = useState<State>({
    showLaunchInfo: (flightNumber?: number) =>
      setState({ ...state, flightNumber }),
  })

  return (
    <LaunchInfoContext.Provider value={state}>
      {children}
    </LaunchInfoContext.Provider>
  )
}
