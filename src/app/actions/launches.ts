export enum LaunchesActionTypes {
  UPDATE = 'LAUNCHES_ACTION_UPDATE',
  RESET_ERROR = 'LAUNCHES_ACTION_RESET_ERROR',
}

export interface LaunchesActionUpdate {
  type: LaunchesActionTypes.UPDATE
  payload: {
    page: number
  }
}
export interface LaunchesResetError {
  type: LaunchesActionTypes.RESET_ERROR
}
