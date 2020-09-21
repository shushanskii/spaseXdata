import { all, takeEvery } from 'redux-saga/effects'
import { HistoryActionTypes, HistoryActionFetch } from 'actions/history'
import {
  LaunchesActionTypes,
  LaunchesActionFetch,
  LaunchesResetState,
} from 'actions/launches'
import { LaunchActionFetch, LaunchActionTypes } from 'actions/launch'
import {
  ErrorActionClear,
  ErrorActionRise,
  ErrorActionTypes,
} from 'actions/error'
import {
  OrbitRocketsActionFetch,
  OrbitRocketsActionTypes,
} from 'actions/orbitRockets'
import { RepeatActionsType } from 'actions/repeat'
import { fetchHistory } from 'middleware/saga/fetchHistory'
import { fetchLaunches } from 'middleware/saga/fetchLaunches'
import { resetLaunchesState } from 'middleware/saga/resetLaunchesState'
import { fetchLaunch } from 'middleware/saga/fetchLaunch'
import { errorRise } from 'middleware/saga/errorRise'
import { errorClear } from 'middleware/saga/errorClear'
import { requestLog } from 'middleware/saga/requestLog'
import { requestRepeat } from 'middleware/saga/requestRepeat'
import { fetchOrbitRockets } from 'middleware/saga/fetchOrbitRockets'

export function* saga() {
  yield all([
    // log/repeat
    yield takeEvery(
      [HistoryActionTypes.FETCH, LaunchesActionTypes.FETCH],
      requestLog
    ),
    yield takeEvery(RepeatActionsType.REPEAT, requestRepeat),
    // history
    yield takeEvery<HistoryActionFetch>(HistoryActionTypes.FETCH, fetchHistory),
    // launches sagas
    yield takeEvery<LaunchesActionFetch>(
      LaunchesActionTypes.FETCH,
      fetchLaunches
    ),
    yield takeEvery<LaunchesResetState>(
      LaunchesActionTypes.RESET_STATE,
      resetLaunchesState
    ),
    // launch info
    yield takeEvery<LaunchActionFetch>(LaunchActionTypes.FETCH, fetchLaunch),
    // orbit rockets
    yield takeEvery<OrbitRocketsActionFetch>(
      OrbitRocketsActionTypes.FETCH,
      fetchOrbitRockets
    ),
    // errors
    yield takeEvery<ErrorActionRise>(ErrorActionTypes.RISE_ERROR, errorRise),
    yield takeEvery<ErrorActionClear>(ErrorActionTypes.CLEAR_ERROR, errorClear),
  ])
}
