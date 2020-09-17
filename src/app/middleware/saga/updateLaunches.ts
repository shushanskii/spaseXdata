import { call, put } from 'redux-saga/effects'
import {
  LoadError,
  LoadStart,
  LoadSuccess,
  Types,
} from 'store/reducers/launches'
import { LaunchesActionUpdate } from 'actions/launches'
import { request } from 'utilities/request'
import { Methods, requestConstructor } from 'utilities/requestConstructor'

const PAGE_LIMIT = 20

export default function* updateLaunches({
  payload: { page },
}: LaunchesActionUpdate) {
  yield put<LoadStart<Types.LOAD_START>>({ type: Types.LOAD_START })

  try {
    const data = yield call(
      request,
      requestConstructor(Methods.LAUNCHES, {
        query: {
          limit: PAGE_LIMIT,
          offset: page * PAGE_LIMIT,
        },
      })
    )

    yield put<LoadSuccess<Types.LOAD_SUCCESS>>({
      type: Types.LOAD_SUCCESS,
      payload: {
        data: data.map(
          ({
            mission_name,
            launch_date_utc,
            rocket: {
              second_stage: { payloads },
            },
          }) => ({
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
    yield put<LoadError<Types.LOAD_ERROR>>({
      type: Types.LOAD_ERROR,
      payload: {
        error,
      },
    })
  }
}
