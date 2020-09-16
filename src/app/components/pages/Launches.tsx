import React from 'react'
import { Page } from 'components/pages/components/Page'
import { List } from 'components/list/List'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType } from 'app/types'
import { LaunchesActionTypes, LaunchesActionUpdate } from 'actions/launches'
import { State } from 'src/app/store/rootReducer'
import { State as LaunchesState } from 'store/reducers/launches'

export function Launches() {
  const dispatch = useDispatch<DispatchType<LaunchesActionUpdate>>()

  const loadData = (page: number) => {
    dispatch({ type: LaunchesActionTypes.UPDATE, payload: { page } })
  }

  const store = useSelector<State, LaunchesState>((store) => store.launches)

  return (
    <Page>
      <List loadData={loadData} store={store} />
    </Page>
  )
}
