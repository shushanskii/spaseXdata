export enum HistoryActionTypes {
  FETCH = 'HISTORY_ACTION_UPDATE',
}

export interface HistoryActionFetch {
  type: HistoryActionTypes.FETCH
  payload: {
    page: number
  }
}
