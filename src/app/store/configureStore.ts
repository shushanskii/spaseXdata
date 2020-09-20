import { applyMiddleware, createStore, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer, State } from './rootReducer'
import { logger } from 'middleware/logger'
import saga from 'middleware/saga'

type ConfigureStore<T> = (initialState?: T) => Store<T>

export const configureStore: ConfigureStore<State> = function (initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger, sagaMiddleware)
  ) as Store<State>

  sagaMiddleware.run(saga)

  return store
}
