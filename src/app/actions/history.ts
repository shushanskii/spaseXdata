export enum HistoryActionTypes {
  UPDATE = 'HISTORY_ACTION_UPDATE',
}

export interface HistoryActionUpdate {
  type: HistoryActionTypes.UPDATE
  payload: {
    page: number
  }
}
