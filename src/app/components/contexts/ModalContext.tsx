import React, { createContext, useEffect, useState } from 'react'

interface State {
  visible: boolean
  toggleVisible: (visible: boolean) => void
}

export const ModalContext = createContext<State>({
  visible: false,
  toggleVisible: () => void 0,
})

export function ModalContextProvider({
  children,
}: React.PropsWithChildren<any>) {
  const [state, setState] = useState<State>({
    visible: false,
    toggleVisible: (visible) => setState({ ...state, visible }),
  })

  const { visible } = state

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : 'unset'
  }, [visible])

  return <ModalContext.Provider value={state}>{children}</ModalContext.Provider>
}
