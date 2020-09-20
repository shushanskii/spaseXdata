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
import updateHistory from 'middleware/saga/updateHistory'
import updateLaunches from 'middleware/saga/updateLaunches'
import resetLaunchesState from 'middleware/saga/resetLaunchesState'
import fetchLaunch from 'middleware/saga/fetchLaunch'
import riseError from 'middleware/saga/riseError'
import clearError from 'middleware/saga/clearError'

export default function* saga() {
  yield all([
    yield takeEvery<HistoryActionUpdate>(
      HistoryActionTypes.UPDATE,
      updateHistory
    ),
    // launches sagas
    yield takeEvery<LaunchesActionUpdate>(
      LaunchesActionTypes.UPDATE,
      updateLaunches
    ),
    yield takeEvery<LaunchesResetState>(
      LaunchesActionTypes.RESET_STATE,
      resetLaunchesState
    ),
    // launch info
    yield takeEvery<LaunchActionFetch>(LaunchActionTypes.FETCH, fetchLaunch),
    // errors
    yield takeEvery<ErrorActionRise>(ErrorActionTypes.RISE_ERROR, riseError),
    yield takeEvery<ErrorActionClear>(ErrorActionTypes.CLEAR_ERROR, clearError),
  ])
}
