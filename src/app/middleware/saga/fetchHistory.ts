import { call, put } from 'redux-saga/effects'
import { HistoryActionUpdate } from 'actions/history'
import { LoadStart, LoadStop, LoadSuccess, Types } from 'store/reducers/history'
import errorRise from 'middleware/saga/errorRise'
import { ErrorActionTypes } from 'actions/error'
import { API } from 'api/API'

export default function* fetchHistory({
  payload: { page },
}: HistoryActionUpdate) {
  yield put<LoadStart<Types.LOAD_START>>({
    type: Types.LOAD_START,
  })

  try {
    const data = yield call(API.fetchHistory, page)

    yield put<LoadSuccess<Types.LOAD_SUCCESS>>({
      type: Types.LOAD_SUCCESS,
      payload: {
        data: data.map(({ title, event_date_utc, links, details }) => ({
          title,
          event_date_utc,
          links,
          details,
        })),
      },
    })
  } catch (error) {
    yield put<LoadStop<Types.LOAD_STOP>>({ type: Types.LOAD_STOP })

    yield call(errorRise, {
      type: ErrorActionTypes.RISE_ERROR,
      payload: {
        error: `${error}` // eslint-disable-line
      },
    })
  }
}
