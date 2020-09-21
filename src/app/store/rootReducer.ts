import { combineReducers } from 'redux'
import * as History from 'store/reducers/history'
import * as Launches from 'store/reducers/launches'
import * as Launch from 'store/reducers/launch'
import * as Error from 'store/reducers/error'
import * as RequestLog from 'store/reducers/requestLog'
import * as OrbitRocket from 'store/reducers/orbitRockets'
import * as Share from 'store/reducers/share'

export interface State {
  history: History.State
  launches: Launches.State
  launch: Launch.State
  error: Error.State
  requestLog: RequestLog.State
  orbitRocket: OrbitRocket.State
  share: Share.State
}

export const rootReducer = combineReducers<State>({
  history: History.reducer,
  launches: Launches.reducer,
  launch: Launch.reducer,
  error: Error.reducer,
  requestLog: RequestLog.reducer,
  orbitRocket: OrbitRocket.reducer,
  share: Share.reducer,
})
