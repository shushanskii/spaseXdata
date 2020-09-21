import { put } from 'redux-saga/effects'
import { SaveRequest, Types } from 'store/reducers/requestLog'

export function* requestLog(args: { type: string; payload?: unknown }) {
  yield put<SaveRequest<Types.SAVE_REQUEST>>({
    type: Types.SAVE_REQUEST,
    payload: args,
  })
}
