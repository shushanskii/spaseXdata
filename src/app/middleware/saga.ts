import { all, takeEvery } from 'redux-saga/effects'
import {
  HistoryActionTypes,
  HistoryActionUpdate,
  HistoryResetError,
} from 'actions/history'
import {
  LaunchesActionTypes,
  LaunchesActionUpdate,
  LaunchesResetError,
  LaunchesResetState,
} from 'actions/launches'
import updateHistory from 'middleware/saga/updateHistory'
import updateLaunches from 'middleware/saga/updateLaunches'
import resetHistoryError from 'middleware/saga/resetHistoryError'
import resetLaunchesError from 'middleware/saga/resetLaunchesError'
import resetLaunchesState from 'middleware/saga/resetLaunchesState'

export default function* saga() {
  yield all([
    yield takeEvery<HistoryActionUpdate>(
      HistoryActionTypes.UPDATE,
      updateHistory
    ),
    yield takeEvery<HistoryResetError>(
      HistoryActionTypes.RESET_ERROR,
      resetHistoryError
    ),
    // launches sagas
    yield takeEvery<LaunchesActionUpdate>(
      LaunchesActionTypes.UPDATE,
      updateLaunches
    ),
    yield takeEvery<LaunchesResetError>(
      LaunchesActionTypes.RESET_ERROR,
      resetLaunchesError
    ),
    yield takeEvery<LaunchesResetState>(
      LaunchesActionTypes.RESET_STATE,
      resetLaunchesState
    ),
  ])
}
