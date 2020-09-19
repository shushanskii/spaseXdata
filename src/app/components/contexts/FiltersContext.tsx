import React, { createContext, useState } from 'react'

interface State<T> {
  filters?: T
  setFilters: (filters: T) => void
}

export const createFiltersContext = <T extends any>() =>
  createContext<State<T>>({
    setFilters: () => void 0,
  })

export function FiltersContextProvider<T>({
  children,
  initialFilters,
  context: Context,
}: React.PropsWithChildren<{
  context: React.Context<State<T>>
  initialFilters: T
}>) {
  const [state, setState] = useState<State<T>>({
    filters: initialFilters,
    setFilters: (filters) => setState({ ...state, filters: { ...filters } }),
  })

  return <Context.Provider value={state}>{children}</Context.Provider>
}
