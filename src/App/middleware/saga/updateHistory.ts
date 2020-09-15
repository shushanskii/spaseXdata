import { call, put } from 'redux-saga/effects'
import { LoadStart, Types } from 'store/reducers/history'

export default function* updateHistory() {
  yield put<LoadStart<Types.LOAD_START>>({
    type: Types.LOAD_START,
    payload: {
      loading: true,
    },
  })
}
