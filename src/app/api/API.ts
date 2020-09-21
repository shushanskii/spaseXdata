import { request } from 'api/helpers/request'
import { Methods, requestConstructor } from 'api/helpers/requestConstructor'
import { LIST_PAGE_LIMIT } from 'app/constants'
import { LaunchesFilters } from 'actions/launches'

interface FetchLaunchesParams {
  page: number
  filters?: LaunchesFilters
}

const fetchHistory = (page: number) =>
  request(
    requestConstructor(Methods.HISTORY, {
      query: {
        limit: LIST_PAGE_LIMIT,
        offset: page * LIST_PAGE_LIMIT,
      },
    })
  )

const fetchLaunches = ({ page, filters }: FetchLaunchesParams) =>
  request(
    requestConstructor(Methods.LAUNCHES, {
      query: {
        ...filters,
        limit: LIST_PAGE_LIMIT,
        offset: page * LIST_PAGE_LIMIT,
      },
    })
  )

const fetchLaunch = (flight_number: number) =>
  request(
    requestConstructor(Methods.LAUNCHES, {
      url: {
        flight_number,
      },
    })
  )

const fetchRockets = () => request(requestConstructor(Methods.ROCKETS, {}))

const share = (data: any) =>
  request('http://dummy.restapiexample.com/api/v1/create', 'POST', data)

export const API = {
  fetchHistory,
  fetchLaunches,
  fetchLaunch,
  fetchRockets,
  share,
}
