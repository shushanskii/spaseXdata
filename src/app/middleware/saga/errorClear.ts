import { put } from 'redux-saga/effects'
import { ResetError, Types } from 'store/reducers/error'

export function* errorClear() {
  yield put<ResetError<Types.RESET_ERROR>>({ type: Types.RESET_ERROR })
}
