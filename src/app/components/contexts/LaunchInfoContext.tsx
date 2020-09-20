import React, { createContext, useEffect, useState } from 'react'

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

  useEffect(() => {
    document.body.style.overflow = state.flightNumber ? 'hidden' : 'unset'
  }, [state])

  return (
    <LaunchInfoContext.Provider value={state}>
      {children}
    </LaunchInfoContext.Provider>
  )
}
