export enum LaunchesActionTypes {
  UPDATE = 'LAUNCH_ACTION_UPDATE',
}

export interface LaunchesActionUpdate {
  type: LaunchesActionTypes.UPDATE
  payload: {
    page: number
  }
}
