import * as launches from 'store/reducers/launches'

describe('launches reducer', () => {
  it('should return initial state', () => {
    expect(launches.reducer(undefined, {} as any)).toEqual({
      loading: true,
      data: [],
    })
  })

  it('should return loading state', () => {
    expect(
      launches.reducer(undefined, {
        type: launches.Types.LOAD_START,
      })
    ).toEqual({
      loading: true,
      data: [],
    })
  })

  it('should return state with fake data', () => {
    expect(
      launches.reducer(undefined, {
        type: launches.Types.LOAD_SUCCESS,
        payload: {
          data: [
            {
              flight_number: 9,
              mission_name: 'Some Name',
              launch_date_utc: 'some-utc-date',
              payloads: {
                nationality: ['one', 'two', 'three'],
                manufacturer: ['one', 'two', 'three'],
                payload_type: ['one', 'two', 'three'],
              },
            },
          ],
        },
      })
    ).toEqual({
      loading: false,
      data: [
        {
          flight_number: 9,
          mission_name: 'Some Name',
          launch_date_utc: 'some-utc-date',
          payloads: {
            nationality: ['one', 'two', 'three'],
            manufacturer: ['one', 'two', 'three'],
            payload_type: ['one', 'two', 'three'],
          },
        },
      ],
    })
  })
})
