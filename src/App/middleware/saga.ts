import { all, takeEvery, delay, call } from 'redux-saga/effects'
import { HistoryActionTypes, HistoryActionUpdate } from 'actions/history'
import { LaunchesActionTypes, LaunchesActionUpdate } from 'actions/launches'
import updateHistory from 'middleware/saga/updateHistory'
import updateLaunches from 'middleware/saga/updateLaunches'

export default function* saga() {
  yield all([
    yield takeEvery<LaunchesActionUpdate>(
      LaunchesActionTypes.UPDATE,
      updateLaunches
    ),
    yield takeEvery<HistoryActionUpdate>(
      HistoryActionTypes.UPDATE,
      updateHistory
    ),
  ])
}
