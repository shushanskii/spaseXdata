export type SendStart<T> = T extends Types.SEND_START ? { type: T } : never

export type SendSuccess<T> = T extends Types.SEND_SUCCESS
  ? { type: T; payload: { message: string } }
  : never

export type SendStop<T> = T extends Types.SEND_STOP ? { type: T } : never

export enum Types {
  SEND_START = 'SHARE_SEND_START',
  SEND_SUCCESS = 'SHARE_SEND_SUCCESS',
  SEND_STOP = 'SHARE_SEND_STOP',
}

export interface State {
  loading: boolean
  message?: string
}

const initialState: State = {
  loading: false,
}

export const reducer = (
  state = initialState,
  action: {
    type: Types
    payload: {
      message: string
    }
  }
): State => {
  const { type, payload } = action
  switch (type) {
    case Types.SEND_START: {
      return { ...state, loading: true }
    }
    case Types.SEND_SUCCESS: {
      const { message } = payload
      return { ...state, message, loading: false }
    }
    case Types.SEND_STOP: {
      return { ...state, loading: false }
    }
    default:
      return state
  }
}
