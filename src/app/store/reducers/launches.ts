export type LoadStart<T> = T extends Types.LOAD_START ? { type: T } : never

export type LoadSuccess<T> = T extends Types.LOAD_SUCCESS
  ? { type: T; payload: { data: LaunchListItem[] } }
  : never

export type LoadStop<T> = T extends Types.LOAD_STOP ? { type: T } : never

export type ResetState<T> = T extends Types.RESET_STATE ? { type: T } : never

export enum Types {
  LOAD_START = 'LAUNCHES_LOAD_START',
  LOAD_SUCCESS = 'LAUNCHES_LOAD_SUCCESS',
  LOAD_STOP = 'LAUNCHES_LOAD_STOP',
  RESET_STATE = 'LAUNCHES_RESET_STATE',
}

export interface LaunchListItem {
  flight_number: number
  mission_name: string
  launch_date_utc: string
  payloads: {
    nationality: string[]
    manufacturer: string[]
    payload_type: string[]
  }
}

export interface State {
  loading: boolean
  error?: string
  data: LaunchListItem[]
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
      error?: string
      data?: LaunchListItem[]
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
    case Types.RESET_STATE: {
      return { ...state, data: [] }
    }
    default:
      return state
  }
}
