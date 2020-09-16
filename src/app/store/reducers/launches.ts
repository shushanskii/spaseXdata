export type LoadStart<T> = T extends Types.LOAD_START ? { type: T } : never

export type LoadSuccess<T> = T extends Types.LOAD_SUCCESS
  ? { type: T; payload: { data: any[] } }
  : never

export type LoadError<T> = T extends Types.LOAD_ERROR
  ? { type: T; payload: { error: string } }
  : never

export enum Types {
  LOAD_START = 'LOAD_START',
  LOAD_SUCCESS = 'LOAD_SUCCESS',
  LOAD_ERROR = 'LOAD_ERROR',
}

export interface State {
  loading: boolean
  error?: string
  data?: any[]
}

const initialState: State = {
  loading: false,
  data: [],
}

export const reducer = (
  state = initialState,
  action: {
    type: Types
    payload: {
      loading: boolean
      error?: string
      data: any[]
    }
  }
): State => {
  if (!action.payload) {
    return state
  }

  const {
    type,
    payload: { data, error },
  } = action
  switch (type) {
    case Types.LOAD_START:
      return { ...state, loading: true }
    case Types.LOAD_SUCCESS:
      return { ...state, data: [...state.data, ...data], loading: false }
    case Types.LOAD_ERROR:
      return { ...state, error, loading: false }
    default:
      return state
  }
}
