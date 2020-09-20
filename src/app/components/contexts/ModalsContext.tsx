import React, { createContext, useEffect, useState } from 'react'

interface Modals {
  [key: string]: {
    visible: boolean
    params?: any
  }
}

interface State {
  modals: Modals
  toggleVisible: (params: {
    name: string
    visible: boolean
    params?: unknown
  }) => void
}

export const ModalsContext = createContext<State>({} as State)

export function ModalsContextProvider({
  children,
  modals,
}: React.PropsWithChildren<{
  modals: Modals
}>) {
  const [state, setState] = useState<State>({
    modals,
    toggleVisible: ({ name, visible, params }) =>
      setState({
        ...state,
        modals: {
          ...state.modals,
          [name]: {
            visible,
            params,
          },
        },
      }),
  })

  return (
    <ModalsContext.Provider value={state}>{children}</ModalsContext.Provider>
  )
}
