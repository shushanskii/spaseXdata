export type LoadStart<T> = T extends Types.LOAD_START ? { type: T } : never

export type LoadSuccess<T> = T extends Types.LOAD_SUCCESS
  ? {
      type: T
      payload: {
        data: any[]
      }
    }
  : never

export type LoadStop<T> = T extends Types.LOAD_STOP ? { type: T } : never

export enum Types {
  LOAD_START = 'HISTORY_LOAD_START',
  LOAD_SUCCESS = 'HISTORY_LOAD_SUCCESS',
  LOAD_STOP = 'HISTORY_LOAD_STOP',
}

export interface HistoricalEvent {
  title: string
  event_date_utc: string
  details: string
  links: {
    reddit?: string
    article?: string
    wikipedia?: string
  }
}

export interface State {
  loading: boolean
  data: HistoricalEvent[]
}

const initialState: State = {
  loading: true,
  data: [],
}

export const reducer = (
  state = initialState,
  action: {
    type: Types
    payload?: {
      data?: any[]
    }
  }
): State => {
  const { type, payload } = action
  switch (type) {
    case Types.LOAD_START: {
      return { ...state, loading: true }
    }
    case Types.LOAD_SUCCESS: {
      const { data } = payload
      return { ...state, data: [...state.data, ...data], loading: false }
    }
    case Types.LOAD_STOP: {
      return { ...state, loading: false }
    }
    default:
      return state
  }
}
