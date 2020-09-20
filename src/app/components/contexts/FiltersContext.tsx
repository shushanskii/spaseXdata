import React, { createContext, useEffect, useState } from 'react'

interface State<T> {
  filters?: T
  page: number
  setFilters: (filters: T) => void
  setPage: (number) => void
}

export const createFiltersContext = <T extends any>() =>
  createContext<State<T>>({} as State<T>)

export function FiltersContextProvider<T>({
  children,
  context: Context,
}: React.PropsWithChildren<{
  context: React.Context<State<T>>
}>) {
  const [page, setPage] = useState<number>(0)
  const [state, setState] = useState<State<T>>({
    page,
    setPage,
    setFilters: (filters) => {
      setState((state) => ({
        ...state,
        filters: { ...state.filters, ...filters },
      }))
    },
  })

  useEffect(() => {
    setState((state) => ({ ...state, page }))
  }, [page])

  return <Context.Provider value={state}>{children}</Context.Provider>
}
