export enum ShareType {
  MEDIA = 'MEDIA',
  DETAILS = 'DETAILS',
}

export enum ShareActionTypes {
  SEND = 'SEND',
}

export interface ShareActionSend {
  type: ShareActionTypes.SEND
  payload: {
    share: ShareType
  }
}
