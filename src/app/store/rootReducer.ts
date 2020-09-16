import { combineReducers } from 'redux'
import * as History from 'store/reducers/history'
import * as Launches from 'store/reducers/launches'

export interface State {
  history?: History.State
  launches?: Launches.State
}

export const rootReducer = combineReducers<State>({
  history: History.reducer,
  launches: Launches.reducer,
})
