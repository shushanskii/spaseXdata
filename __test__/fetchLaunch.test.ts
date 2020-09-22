import { API } from 'api/API'
// @ts-ignore
import dummyLaunch from './assetes/dummyLaunch.json'
import { runSaga, stdChannel } from 'redux-saga'
import { fetchLaunch } from 'middleware/saga/fetchLaunch'
import { LaunchActionTypes } from 'actions/launch'

const successDispatched = [
  { type: 'LAUNCH_RESET_STATE' },
  { type: 'LAUNCH_LOAD_START' },
  {
    type: 'LAUNCH_LOAD_SUCCESS',
    payload: {
      data: {
        details: 'Engine failure at 33 seconds and loss of vehicle',
        flight_number: 1,
        links: {
          reddit: null,
          article:
            'https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html',
          wikipedia: 'https://en.wikipedia.org/wiki/DemoSat',
        },
        mission_name: 'FalconSat',
        mission_patch_small: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
        rocket_name: 'Falcon 1',
        video_link: 'https://www.youtube.com/watch?v=0a_00nJ_Y88',
        youtube_id: '0a_00nJ_Y88',
      },
    },
  },
]

const errorDispatched = [
  { type: 'LAUNCH_RESET_STATE' },
  { type: 'LAUNCH_LOAD_START' },
  { type: 'LAUNCH_LOAD_STOP' },
  {
    type: 'SET_ERROR',
    payload: { error: 'undefined' },
  },
]

describe('fetchLaunch saga', () => {
  it('should call api and dispatch load start and success action', async () => {
    const request = jest
      .spyOn(API, 'fetchLaunch')
      .mockImplementation(() => Promise.resolve(dummyLaunch))
    const dispatched = []
    const task = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => ({ launch: { data: { flight_number: undefined } } }),
      },
      fetchLaunch,
      {
        type: LaunchActionTypes.FETCH,
        payload: {
          flight_number: 99,
        },
      }
    )
    await task.toPromise()

    expect(request).toHaveBeenCalledTimes(1)
    expect(request).toHaveBeenCalledWith(99)
    expect(dispatched).toEqual(successDispatched)
    request.mockClear()
  })

  it('should call api and dispatch load start and error action', async () => {
    const request = jest
      .spyOn(API, 'fetchLaunch')
      .mockImplementation(() => Promise.reject('SOME ERROR'))
    const dispatched = []
    const task = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => ({ launch: { data: { flight_number: undefined } } }),
      },
      fetchLaunch,
      {
        type: LaunchActionTypes.FETCH,
        payload: {
          flight_number: 99,
        },
      }
    )
    await task.toPromise()

    expect(request).toHaveBeenCalledTimes(1)
    expect(request).toHaveBeenCalledWith(99)
    expect(dispatched).toEqual(errorDispatched)
    request.mockClear()
  })
})
