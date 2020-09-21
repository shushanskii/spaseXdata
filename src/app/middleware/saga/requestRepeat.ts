import { call, select } from 'redux-saga/effects'
import { LaunchesActionTypes } from 'actions/launches'
import { HistoryActionTypes } from 'actions/history'
import { fetchLaunches } from 'middleware/saga/fetchLaunches'
import { fetchHistory } from 'middleware/saga/fetchHistory'

export function* requestRepeat() {
  const request = yield select(({ requestLog: { request } }) =>
    request ? request : undefined
  )

  switch (request.type) {
    case LaunchesActionTypes.FETCH:
      yield call(fetchLaunches, {
        type: LaunchesActionTypes.FETCH,
        payload: request.payload,
      })
      break
    case HistoryActionTypes.FETCH:
      yield call(fetchHistory, {
        type: HistoryActionTypes.FETCH,
        payload: request.payload,
      })
      break
  }
}
