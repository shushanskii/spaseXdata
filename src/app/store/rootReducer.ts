import { combineReducers } from 'redux'
import * as History from 'store/reducers/history'
import * as Launches from 'store/reducers/launches'
import * as Launch from 'store/reducers/launch'
import * as Error from 'store/reducers/error'

export interface State {
  history: History.State
  launches: Launches.State
  launch: Launch.State
  error: Error.State
}

export const rootReducer = combineReducers<State>({
  history: History.reducer,
  launches: Launches.reducer,
  launch: Launch.reducer,
  error: Error.reducer,
})
