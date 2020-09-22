export type DispatchType<T> = (params: T) => void
export type ApiRequestString<T, P> = (method: T, params: P) => string
