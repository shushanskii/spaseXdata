import { ApiRequestString } from 'app/types'

const domain = 'https://api.spacexdata.com/v3'

interface CommonQueryParams {
  id?: boolean
  limit?: number
  offset?: number
  sort?: string
  order?: 'asc' | 'desc'
}

export enum Methods {
  HISTORY = 'history',
  LAUNCHES = 'launches',
  ROCKETS = 'rockets',
}

export type History<T> = T extends Methods.HISTORY
  ? {
      url: {
        id: number
      }
      query: CommonQueryParams
    }
  : never

export type Launches<T> = T extends Methods.LAUNCHES
  ? {
      url?: {
        [key: string]: string
      }
      query?: CommonQueryParams & {
        start?: string
        end?: string
        rocket_id?: string
      }
    }
  : never

export const requestConstructor: ApiRequestString<
  Methods.HISTORY | Methods.LAUNCHES | Methods.ROCKETS,
  History<Methods.HISTORY> | Launches<Methods.LAUNCHES>
> = (method: Methods, params) => {
  const { url, query } = params

  return `${domain}/${method.concat(
    Object.values(url || {})
      .map((value) => value)
      .join('/')
  )}?${Object.entries(query || {})
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value.toString())}`
    )
    .join('&')}`
}
