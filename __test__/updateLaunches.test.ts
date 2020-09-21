import { fetchLaunches } from 'middleware/saga/fetchLaunches'
import { LaunchesActionTypes } from 'actions/launches'
import * as req from 'api/helpers/request'
import { runSaga } from 'redux-saga'
// @ts-ignore
import dummyLaunches from './assetes/dummyLaunches.json'

const successDispatched = [
  { type: 'LAUNCHES_LOAD_START' },
  {
    payload: {
      data: [
        {
          launch_date_utc: '2013-09-29T16:00:00.000Z',
          mission_name: 'CASSIOPE',
          payloads: {
            manufacturer: ['MDA'],
            nationality: ['Canada'],
            payload_type: ['Satellite'],
          },
        },
      ],
    },
    type: 'LAUNCHES_LOAD_SUCCESS',
  },
]

const errorDispatched = [
  { type: 'LAUNCHES_LOAD_START' },
  {
    payload: { error: 'SOME ERROR' },
    type: 'LAUNCHES_LOAD_ERROR',
  },
]

describe('updateLaunches saga', () => {
  it('should call api and dispatch load start and success action', async () => {
    const request = jest
      .spyOn(req, 'request')
      .mockImplementation(() => Promise.resolve(dummyLaunches))
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchLaunches,
      {
        type: LaunchesActionTypes.FETCH,
        payload: {
          page: 99,
        },
      }
    )

    expect(request).toHaveBeenCalledTimes(1)
    expect(request).toHaveBeenCalledWith(
      'https://api.spacexdata.com/v3/launches?limit=10&offset=990'
    )
    expect(dispatched).toEqual(successDispatched)
    request.mockClear()
  })

  it('should call api and dispatch load start and error action', async () => {
    const request = jest
      .spyOn(req, 'request')
      .mockImplementation(() => Promise.reject('SOME ERROR'))
    const dispatched = []
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchLaunches,
      {
        type: LaunchesActionTypes.FETCH,
        payload: {
          page: 99,
        },
      }
    )

    expect(request).toHaveBeenCalledTimes(1)
    expect(request).toHaveBeenCalledWith(
      'https://api.spacexdata.com/v3/launches?limit=10&offset=990'
    )
    expect(dispatched).toEqual(errorDispatched)
    request.mockClear()
  })
})
