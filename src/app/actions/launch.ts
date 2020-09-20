export enum LaunchActionTypes {
  FETCH = 'LAUNCH_ACTION_FETCH',
}

export interface LaunchActionFetch {
  type: LaunchActionTypes.FETCH
  payload: {
    flight_number: number
  }
}
