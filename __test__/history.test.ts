import * as history from 'store/reducers/history'

describe('history reducer', () => {
  it('should return initial state', () => {
    expect(history.reducer(undefined, {} as any)).toEqual({
      loading: false,
      data: [],
    })
  })

  it('should return loading state', () => {
    expect(
      history.reducer(undefined, {
        type: history.Types.LOAD_START,
      })
    ).toEqual({
      loading: true,
      data: [],
    })
  })

  it('should return state with fake data', () => {
    expect(
      history.reducer(undefined, {
        type: history.Types.LOAD_SUCCESS,
        payload: {
          data: [
            {
              title: 'Some Title',
              event_date_utc: 'some-date-utc',
              details: 'some details',
              links: {
                reddit: 'some reddit link',
                article: 'some other link',
                wikipedia: 'some wikipedia link',
              },
            },
          ],
        },
      })
    ).toEqual({
      loading: false,
      data: [
        {
          title: 'Some Title',
          event_date_utc: 'some-date-utc',
          details: 'some details',
          links: {
            reddit: 'some reddit link',
            article: 'some other link',
            wikipedia: 'some wikipedia link',
          },
        },
      ],
    })
  })

  it('should return state with error', () => {
    expect(
      history.reducer(undefined, {
        type: history.Types.LOAD_ERROR,
        payload: {
          error: 'some ERROR',
        },
      })
    ).toEqual({
      loading: false,
      data: [],
      error: 'some ERROR',
    })
  })
})
