import { all, takeEvery } from 'redux-saga/effects'
import { HistoryActionTypes, HistoryActionUpdate } from 'actions/history'
import {
  LaunchesActionTypes,
  LaunchesActionUpdate,
  LaunchesResetState,
} from 'actions/launches'
import { LaunchActionFetch, LaunchActionTypes } from 'actions/launch'
import {
  ErrorActionClear,
  ErrorActionRise,
  ErrorActionTypes,
} from 'actions/error'
import { RepeatActionsType } from 'actions/repeat'
import { fetchHistory } from 'middleware/saga/fetchHistory'
import { fetchLaunches } from 'middleware/saga/fetchLaunches'
import { resetLaunchesState } from 'middleware/saga/resetLaunchesState'
import { fetchLaunch } from 'middleware/saga/fetchLaunch'
import { errorRise } from 'middleware/saga/errorRise'
import { errorClear } from 'middleware/saga/errorClear'
import { requestLog } from 'middleware/saga/requestLog'
import { requestRepeat } from 'middleware/saga/requestRepeat'

export function* saga() {
  yield all([
    // log/repeat
    yield takeEvery(
      [HistoryActionTypes.FETCH, LaunchesActionTypes.FETCH],
      requestLog
    ),
    yield takeEvery(RepeatActionsType.REPEAT, requestRepeat),
    // history
    yield takeEvery<HistoryActionUpdate>(
      HistoryActionTypes.FETCH,
      fetchHistory
    ),
    // launches sagas
    yield takeEvery<LaunchesActionUpdate>(
      LaunchesActionTypes.FETCH,
      fetchLaunches
    ),
    yield takeEvery<LaunchesResetState>(
      LaunchesActionTypes.RESET_STATE,
      resetLaunchesState
    ),
    // launch info
    yield takeEvery<LaunchActionFetch>(LaunchActionTypes.FETCH, fetchLaunch),
    // errors
    yield takeEvery<ErrorActionRise>(ErrorActionTypes.RISE_ERROR, errorRise),
    yield takeEvery<ErrorActionClear>(ErrorActionTypes.CLEAR_ERROR, errorClear),
  ])
}
