import { put } from 'redux-saga/effects'
import { SetError, Types } from 'store/reducers/error'
import { ErrorActionRise } from 'actions/error'

export default function* errorRise({ payload: { error } }: ErrorActionRise) {
  yield put<SetError<Types.SET_ERROR>>({
    type: Types.SET_ERROR,
    payload: { error },
  })
}
