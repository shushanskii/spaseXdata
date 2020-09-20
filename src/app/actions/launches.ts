export interface LaunchesFilters {
  manufacturer?: string
  start?: string
  end?: string
}

export enum LaunchesActionTypes {
  UPDATE = 'LAUNCHES_ACTION_UPDATE',
  RESET_ERROR = 'LAUNCHES_ACTION_RESET_ERROR',
  RESET_STATE = 'LAUNCHES_ACTION_RESET_STATE',
}

export interface LaunchesActionUpdate {
  type: LaunchesActionTypes.UPDATE
  payload: {
    page: number
    filters?: LaunchesFilters
  }
}

export interface LaunchesResetState {
  type: LaunchesActionTypes.RESET_STATE
}
