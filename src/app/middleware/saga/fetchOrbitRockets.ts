import { call, put } from 'redux-saga/effects'
import {
  LoadStart,
  LoadStop,
  LoadSuccess,
  Types,
} from 'store/reducers/orbitRockets'
import { errorRise } from 'middleware/saga/errorRise'
import { ErrorActionTypes } from 'actions/error'
import { API } from 'api/API'

const groupBy = (xs, key) =>
  xs.reduce((rv, x) => {
    ;(rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})

export function* fetchOrbitRockets() {
  yield put<LoadStart<Types.LOAD_START>>({
    type: Types.LOAD_START,
  })

  try {
    const response = yield call(API.fetchRockets)

    // map each rocket_name to orbit name
    let _data = response.map(({ rocket_name, payload_weights }) =>
      payload_weights.map(({ name }) => ({ name, rocket_name }))
    )

    // flatten data
    _data = _data.flat()

    // grouping rocket_name in arrays by orbit name
    const data = _data.reduce((acc, current) => {
      ;(acc[current.name] = acc[current.name] || []).push(current.rocket_name)
      return acc
    }, {})

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
        error: `${error.message}` // eslint-disable-line
      },
    })
  }
}
