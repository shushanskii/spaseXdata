import { call, put } from 'redux-saga/effects'
import { request } from 'utilities/request'
import { Methods, requestConstructor } from 'utilities/requestConstructor'
import { LIST_PAGE_LIMIT } from 'app/constants'
import { HistoryActionUpdate } from 'actions/history'
import {
  LoadSuccess,
  LoadError,
  LoadStart,
  Types,
} from 'store/reducers/history'

export default function* updateHistory({
  payload: { page },
}: HistoryActionUpdate) {
  yield put<LoadStart<Types.LOAD_START>>({
    type: Types.LOAD_START,
  })

  try {
    const data = yield call(
      request,
      requestConstructor(Methods.HISTORY, {
        query: {
          limit: LIST_PAGE_LIMIT,
          offset: page * LIST_PAGE_LIMIT,
        },
      })
    )

    yield put<LoadSuccess<Types.LOAD_SUCCESS>>({
      type: Types.LOAD_SUCCESS,
      payload: {
        data: data.map(({ title, event_date_utc, links, details }) => ({
          title,
          event_date_utc,
          links,
          details,
        })),
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
