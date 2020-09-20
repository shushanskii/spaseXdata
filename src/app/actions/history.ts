export enum HistoryActionTypes {
  UPDATE = 'HISTORY_ACTION_UPDATE',
  RESET_ERROR = 'HISTORY_ACTION_RESET_ERROR',
}

export interface HistoryActionUpdate {
  type: HistoryActionTypes.UPDATE
  payload: {
    page: number
  }
}
