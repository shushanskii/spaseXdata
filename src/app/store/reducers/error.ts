export type SetError<T> = T extends Types.SET_ERROR
  ? { type: T; payload: { error: string } }
  : never

export type ResetError<T> = T extends Types.RESET_ERROR ? { type: T } : never

export enum Types {
  SET_ERROR = 'SET_ERROR',
  RESET_ERROR = 'RESET_ERROR',
}

export interface State {
  error?: string
}

export const reducer = (
  state = {},
  action: {
    type: Types
    payload?: {
      error?: string
      data?: any[]
    }
  }
): State => {
  const { type, payload } = action
  switch (type) {
    case Types.SET_ERROR: {
      const { error } = payload
      return { error }
    }
    case Types.RESET_ERROR: {
      return {}
    }
    default:
      return state
  }
}
