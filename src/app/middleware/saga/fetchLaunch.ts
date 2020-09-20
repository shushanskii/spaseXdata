import { call, put, delay } from 'redux-saga/effects'
import { LoadStart, LoadStop, LoadSuccess, Types } from 'store/reducers/launch'
import { LaunchActionFetch } from 'actions/launch'
import { errorRise } from 'middleware/saga/errorRise'
import { ErrorActionTypes } from 'actions/error'
import { API } from 'api/API'

export function* fetchLaunch({
  payload: { flight_number },
}: LaunchActionFetch) {
  yield put<LoadStart<Types.LOAD_START>>({ type: Types.LOAD_START })

  try {
    const data = yield call(API.fetchLaunch, flight_number)

    // to prevent blink of loading indicator
    yield delay(1000)

    yield put<LoadSuccess<Types.LOAD_SUCCESS>>({
      type: Types.LOAD_SUCCESS,
      payload: {
        data,
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
