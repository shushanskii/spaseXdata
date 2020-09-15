export type Reducer<S, A> = (state: S, action: A) => S
export type DispatchType<T> = (params: T) => void
export type CurrencyRequest<T, P> = (method: T, params: P) => string
