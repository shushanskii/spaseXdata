export type LoadStart<T> = T extends Types.LOAD_START ? { type: T } : never

export type LoadSuccess<T> = T extends Types.LOAD_SUCCESS
  ? { type: T; payload: { data: OrbitRocket } }
  : never

export type LoadStop<T> = T extends Types.LOAD_STOP ? { type: T } : never

export enum Types {
  LOAD_START = 'ORBIT_ROCKETS_LOAD_START',
  LOAD_SUCCESS = 'ORBIT_ROCKETS_LOAD_SUCCESS',
  LOAD_STOP = 'ORBIT_ROCKETS_LOAD_STOP',
}

type Rocket = string

export interface OrbitRocket {
  [key: string]: Rocket[]
}

export interface State {
  loading: boolean
  data: OrbitRocket
}

const initialState: State = {
  loading: true,
  data: {},
}

export const reducer = (
  state = initialState,
  action: {
    type: Types
    payload: {
      data: OrbitRocket
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
    default:
      return state
  }
}
