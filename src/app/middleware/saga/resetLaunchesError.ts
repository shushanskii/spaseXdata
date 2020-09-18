import { put } from 'redux-saga/effects'
import { ResetError, Types } from 'store/reducers/launches'

export default function* resetLaunchesError() {
  yield put<ResetError<Types.RESET_ERROR>>({
    type: Types.RESET_ERROR,
  })
}
