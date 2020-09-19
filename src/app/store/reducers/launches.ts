export type LoadStart<T> = T extends Types.LOAD_START ? { type: T } : never

export type LoadSuccess<T> = T extends Types.LOAD_SUCCESS
  ? { type: T; payload: { data: Launch[] } }
  : never

export type LoadError<T> = T extends Types.LOAD_ERROR
  ? { type: T; payload: { error: string } }
  : never

export type ResetError<T> = T extends Types.RESET_ERROR ? { type: T } : never

export type ResetState<T> = T extends Types.RESET_STATE ? { type: T } : never

export enum Types {
  LOAD_START = 'LAUNCHES_LOAD_START',
  LOAD_SUCCESS = 'LAUNCHES_LOAD_SUCCESS',
  LOAD_ERROR = 'LAUNCHES_LOAD_ERROR',
  RESET_ERROR = 'LAUNCHES_RESET_ERROR',
  RESET_STATE = 'LAUNCHES_RESET_STATE',
}

export interface Launch {
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
  data: Launch[]
}

const initialState: State = {
  loading: false,
  data: [],
}

export const reducer = (
  state = initialState,
  action: {
    type: Types
    payload?: {
      error?: string
      data?: Launch[]
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
    case Types.LOAD_ERROR: {
      const { error } = payload
      return { ...state, error, loading: false }
    }
    case Types.RESET_ERROR: {
      const { error, ...otherState } = state
      return otherState
    }
    case Types.RESET_STATE: {
      return { ...state, data: [] }
    }
    default:
      return state
  }
}
