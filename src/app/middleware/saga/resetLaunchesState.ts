import { put } from 'redux-saga/effects'
import { ResetState, Types } from 'store/reducers/launches'

export function* resetLaunchesState() {
  yield put<ResetState<Types.RESET_STATE>>({ type: Types.RESET_STATE })
}
