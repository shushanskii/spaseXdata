export interface LaunchesFilters {
  manufacturer?: string
  start_date?: string
  end_date?: string
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

export interface LaunchesResetError {
  type: LaunchesActionTypes.RESET_ERROR
}

export interface LaunchesResetState {
  type: LaunchesActionTypes.RESET_STATE
}
