export enum ErrorActionTypes {
  RISE_ERROR = 'RISE_ERROR',
  CLEAR_ERROR = 'CLEAR_ERROR',
}

export interface ErrorActionRise {
  type: ErrorActionTypes.RISE_ERROR
  payload: {
    error: string
  }
}

export interface ErrorActionClear {
  type: ErrorActionTypes.CLEAR_ERROR
}
