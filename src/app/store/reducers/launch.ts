export type LoadStart<T> = T extends Types.LOAD_START ? { type: T } : never

export type LoadSuccess<T> = T extends Types.LOAD_SUCCESS
  ? { type: T; payload: { data: Launch } }
  : never

export type LoadStop<T> = T extends Types.LOAD_STOP ? { type: T } : never

export type ResetState<T> = T extends Types.RESET_STATE ? { type: T } : never

export enum Types {
  LOAD_START = 'LAUNCH_LOAD_START',
  LOAD_SUCCESS = 'LAUNCH_LOAD_SUCCESS',
  LOAD_STOP = 'LAUNCH_LOAD_STOP',
  RESET_STATE = 'LAUNCH_RESET_STATE',
}

export interface Launch {
  flight_number: number
  mission_name: string
  rocket_name: string
  details: string
  mission_patch_small: string
  video_link: string
  youtube_id: string
}

export interface State {
  loading: boolean
  data?: Launch
}

const initialState: State = {
  loading: false,
}

export const reducer = (
  state = initialState,
  action: {
    type: Types
    payload?: {
      error?: string
      data?: Launch
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
      return { ...state, data, loading: false }
    }
    case Types.LOAD_STOP: {
      return { ...state, loading: false }
    }
    case Types.RESET_STATE: {
      const { data, ...otherState } = state
      return { ...otherState }
    }
    default:
      return state
  }
}
