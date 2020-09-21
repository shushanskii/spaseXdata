import { call, put, select } from 'redux-saga/effects'
import { ShareActionSend, ShareType } from 'actions/share'
import { SendStart, SendStop, SendSuccess, Types } from 'store/reducers/share'
import { API } from 'api/API'
import { errorRise } from 'middleware/saga/errorRise'
import { ErrorActionTypes } from 'actions/error'

export function* sendShare({ payload: { share } }: ShareActionSend) {
  yield put<SendStart<Types.SEND_START>>({ type: Types.SEND_START })

  const data = yield select(({ launch: { data } }) => {
    switch (share) {
      case ShareType.DETAILS:
        return data.details
      case ShareType.MEDIA:
        return data.links
    }
  })

  console.log(share, data)

  try {
    const { message } = yield call(API.share, data)

    yield put<SendSuccess<Types.SEND_SUCCESS>>({
      type: Types.SEND_SUCCESS,
      payload: { message },
    })
  } catch (error) {
    yield put<SendStop<Types.SEND_STOP>>({ type: Types.SEND_STOP })

    yield call(errorRise, {
      type: ErrorActionTypes.RISE_ERROR,
      payload: {
        error: `${error.message}` // eslint-disable-line
      },
    })
  }
}
