import { Middleware } from 'redux'

export const logger: Middleware = (store) => (next) => (action) => {
  if (process.env.NODE_ENV !== 'production') {
    // console.log('store', store, 'action', action)
  }

  return next(action)
}
