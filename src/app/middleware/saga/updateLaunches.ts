import { call, put } from 'redux-saga/effects'
import {
  LoadStart,
  LoadStop,
  LoadSuccess,
  Types,
} from 'store/reducers/launches'
import { LaunchesActionUpdate } from 'actions/launches'
import { request } from 'utilities/request'
import { Methods, requestConstructor } from 'utilities/requestConstructor'
import { LIST_PAGE_LIMIT } from 'app/constants'
import riseError from 'middleware/saga/riseError'
import { ErrorActionTypes } from 'actions/error'

export default function* updateLaunches({
  payload: { page, filters },
}: LaunchesActionUpdate) {
  yield put<LoadStart<Types.LOAD_START>>({ type: Types.LOAD_START })

  try {
    const data = yield call(
      request,
      requestConstructor(Methods.LAUNCHES, {
        query: {
          ...filters,
          limit: LIST_PAGE_LIMIT,
          offset: page * LIST_PAGE_LIMIT,
        },
      })
    )

    yield put<LoadSuccess<Types.LOAD_SUCCESS>>({
      type: Types.LOAD_SUCCESS,
      payload: {
        data: data.map(
          ({
            flight_number,
            mission_name,
            launch_date_utc,
            rocket: {
              second_stage: { payloads },
            },
          }) => ({
            flight_number,
            mission_name,
            launch_date_utc,
            payloads: {
              nationality: payloads.map(({ nationality }) => nationality),
              manufacturer: payloads.map(({ manufacturer }) => manufacturer),
              payload_type: payloads.map(({ payload_type }) => payload_type),
            },
          })
        ),
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
