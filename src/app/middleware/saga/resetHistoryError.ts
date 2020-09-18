import { put } from 'redux-saga/effects'
import { ResetError, Types } from 'store/reducers/history'

export default function* resetHistoryError() {
  yield put<ResetError<Types.RESET_ERROR>>({
    type: Types.RESET_ERROR,
  })
}
