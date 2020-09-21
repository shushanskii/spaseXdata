export enum HistoryActionTypes {
  FETCH = 'HISTORY_ACTION_UPDATE',
  RESET_ERROR = 'HISTORY_ACTION_RESET_ERROR',
}

export interface HistoryActionUpdate {
  type: HistoryActionTypes.FETCH
  payload: {
    page: number
  }
}
