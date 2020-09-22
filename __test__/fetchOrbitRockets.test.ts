import { API } from 'api/API'
// @ts-ignore
import dummyRockets from './assetes/dummyRockets.json'
import { runSaga } from 'redux-saga'
import { fetchOrbitRockets } from 'middleware/saga/fetchOrbitRockets'

const successDispatched = [
  { type: 'ORBIT_ROCKETS_LOAD_START' },
  {
    type: 'ORBIT_ROCKETS_LOAD_SUCCESS',
    payload: {
      data: {
        'Geosynchronous Transfer Orbit': ['Falcon 9', 'Falcon Heavy'],
        'Low Earth Orbit': ['Falcon 1', 'Falcon 9', 'Falcon Heavy', 'Starship'],
        'Mars Orbit': ['Falcon 9', 'Falcon Heavy', 'Starship'],
        'Moon Orbit': ['Starship'],
        'Pluto Orbit': ['Falcon Heavy'],
      },
    },
  },
]

const errorDispatched = [
  { type: 'ORBIT_ROCKETS_LOAD_START' },
  { type: 'ORBIT_ROCKETS_LOAD_STOP' },
  {
    type: 'SET_ERROR',
    payload: { error: 'undefined' },
  },
]

describe('fetchOrbitRockets saga', () => {
  it('should call api and dispatch load start and success action', async () => {
    const request = jest
      .spyOn(API, 'fetchRockets')
      .mockImplementation(() => Promise.resolve(dummyRockets))
    const dispatched = []
    const task = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchOrbitRockets
    )
    await task.toPromise()

    expect(request).toHaveBeenCalledTimes(1)
    expect(request).toHaveBeenCalledWith()
    expect(dispatched).toEqual(successDispatched)
    request.mockClear()
  })

  it('should call api and dispatch load start and error action', async () => {
    const request = jest
      .spyOn(API, 'fetchRockets')
      .mockImplementation(() => Promise.reject('SOME ERROR'))
    const dispatched = []
    const task = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => ({ launch: { data: { flight_number: undefined } } }),
      },
      fetchOrbitRockets
    )
    await task.toPromise()

    expect(request).toHaveBeenCalledTimes(1)
    expect(request).toHaveBeenCalledWith()
    expect(dispatched).toEqual(errorDispatched)
    request.mockClear()
  })
})
