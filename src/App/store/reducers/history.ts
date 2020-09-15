import { Reducer } from 'app/types'

export type LoadStart<T> = T extends Types.LOAD_START
  ? { type: T; payload: { loading: boolean } }
  : never

export type LoadSuccess<T> = T extends Types.LOAD_SUCCESS
  ? {
      type: T
      payload: {
        loading: boolean
        data: any[]
      }
    }
  : never

export type LoadError<T> = T extends Types.LOAD_ERROR
  ? { type: T; payload: { loading: boolean; error: string } }
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
}

const update: Reducer<
  State,
  | LoadStart<Types.LOAD_START>
  | LoadSuccess<Types.LOAD_SUCCESS>
  | LoadError<Types.LOAD_ERROR>
> = (state, { payload }) => ({ ...state, ...payload })

export const reducer = (
  state = initialState,
  action: {
    type: Types
    payload: {
      loading: boolean
      error?: string
      data?: any[]
    }
  }
): State => {
  if (!action.payload) {
    return state
  }

  const {
    type,
    payload: { loading, data, error },
  } = action
  switch (type) {
    case Types.LOAD_START:
      return update(state, { type, payload: { loading } })
    case Types.LOAD_SUCCESS:
      return update(state, { type, payload: { loading, data } })
    case Types.LOAD_ERROR:
      return update(state, { type, payload: { loading, error } })
    default:
      return state
  }
}
