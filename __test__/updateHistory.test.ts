import { fetchHistory } from 'middleware/saga/fetchHistory'
import { HistoryActionTypes } from 'actions/history'
import * as req from 'api/helpers/request'
import { runSaga } from 'redux-saga'
import dummyHistory from './assetes/dummyHistory.json'

const successDispatched = [
  { type: 'HISTORY_LOAD_START' },
  {
    payload: {
      data: [
        {
          details:
            'Falcon 1 becomes the first privately developed liquid fuel rocket to reach Earth orbit.',
          event_date_utc: '2008-09-28T23:15:00Z',
          links: {
            article:
              'http://www.spacex.com/news/2013/02/11/flight-4-launch-update-0',
            reddit: null,
            wikipedia: 'https://en.wikipedia.org/wiki/Falcon_1',
          },
          title: 'Falcon 1 Makes History',
        },
      ],
    },
    type: 'HISTORY_LOAD_SUCCESS',
  },
]

const errorDispatched = [
  { type: 'HISTORY_LOAD_START' },
  {
    payload: { error: 'SOME ERROR' },
    type: 'HISTORY_LOAD_ERROR',
  },
]

describe('updateHistory saga', () => {
  it('should call api and dispatch load start and success action', async () => {
    const request = jest
      .spyOn(req, 'request')
      .mockImplementation(() => Promise.resolve(dummyHistory))
    const dispatched = []
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchHistory,
      {
        type: HistoryActionTypes.UPDATE,
        payload: {
          page: 99,
        },
      }
    )

    expect(request).toHaveBeenCalledTimes(1)
    expect(request).toHaveBeenCalledWith(
      'https://api.spacexdata.com/v3/history?limit=10&offset=990'
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
      fetchHistory,
      {
        type: HistoryActionTypes.UPDATE,
        payload: {
          page: 99,
        },
      }
    )

    expect(request).toHaveBeenCalledTimes(1)
    expect(request).toHaveBeenCalledWith(
      'https://api.spacexdata.com/v3/history?limit=10&offset=990'
    )
    expect(dispatched).toEqual(errorDispatched)
    request.mockClear()
  })
})
