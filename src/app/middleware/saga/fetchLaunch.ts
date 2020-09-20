import { call, put } from 'redux-saga/effects'
import { LoadStart, LoadStop, LoadSuccess, Types } from 'store/reducers/launch'
import { request } from 'utilities/request'
import { Methods, requestConstructor } from 'utilities/requestConstructor'
import { LaunchActionFetch } from 'actions/launch'
import riseError from 'middleware/saga/riseError'
import { ErrorActionTypes } from 'actions/error'

export default function* fetchLaunch({
  payload: { flight_number },
}: LaunchActionFetch) {
  yield put<LoadStart<Types.LOAD_START>>({ type: Types.LOAD_START })

  try {
    const data = yield call(
      request,
      requestConstructor(Methods.LAUNCHES, {
        url: {
          flight_number,
        },
      })
    )

    yield put<LoadSuccess<Types.LOAD_SUCCESS>>({
      type: Types.LOAD_SUCCESS,
      payload: {
        data,
      },
    })
  } catch (error) {
    yield put<LoadStop<Types.LOAD_STOP>>({ type: Types.LOAD_STOP })

    yield call(riseError, {
      type: ErrorActionTypes.RISE_ERROR,
      payload: {
        error: `${error}` // eslint-disable-line
      },
    })
  }
}
