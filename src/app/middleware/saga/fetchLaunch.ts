import { call, put, delay, select } from 'redux-saga/effects'
import {
  LoadStart,
  LoadStop,
  LoadSuccess,
  ResetState,
  Types,
} from 'store/reducers/launch'
import { LaunchActionFetch } from 'actions/launch'
import { errorRise } from 'middleware/saga/errorRise'
import { ErrorActionTypes } from 'actions/error'
import { API } from 'api/API'

export function* fetchLaunch({
  payload: { flight_number },
}: LaunchActionFetch) {
  const storedFlightNumber = yield select(({ launch: { data } }) =>
    data ? data.flight_number : undefined
  )

  if (storedFlightNumber && storedFlightNumber === flight_number) {
    return
  }

  yield put<ResetState<Types.RESET_STATE>>({ type: Types.RESET_STATE })

  yield put<LoadStart<Types.LOAD_START>>({ type: Types.LOAD_START })

  try {
    const data = yield call(API.fetchLaunch, flight_number)

    // to prevent blink of loading indicator
    yield delay(1000)

    yield put<LoadSuccess<Types.LOAD_SUCCESS>>({
      type: Types.LOAD_SUCCESS,
      payload: {
        data: {
          flight_number: data.flight_number,
          mission_name: data.mission_name,
          rocket_name: data.rocket.rocket_name,
          details: data.details,
          video_link: data.links.video_link,
          youtube_id: data.links.youtube_id,
          mission_patch_small: data.links.mission_patch_small,
          links: {
            reddit: data.links.reddit_media,
            article: data.links.article_link,
            wikipedia: data.links.wikipedia,
          },
        },
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
