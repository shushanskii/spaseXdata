export type SaveRequest<T> = T extends Types.SAVE_REQUEST
  ? { type: T; payload: { type: string; payload?: unknown } }
  : never

export enum Types {
  SAVE_REQUEST = 'SAVE_REQUEST',
}

export interface State {
  request?: { type: string; payload?: unknown }
}

export const reducer = (
  state = {},
  action: {
    type: Types
    payload?: { type: string; payload?: unknown }
  }
): State => {
  const { type, payload } = action
  switch (type) {
    case Types.SAVE_REQUEST: {
      return { request: payload }
    }
    default:
      return state
  }
}
