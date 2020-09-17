import React from 'react'
import { Page } from 'components/pages/components/Page'
import { List } from 'components/list/List'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType } from 'app/types'
import { LaunchesActionTypes, LaunchesActionUpdate } from 'actions/launches'
import { State } from 'store/rootReducer'
import { State as HistoryState } from 'store/reducers/history'
import { PageContentWrapper } from 'components/pages/components/PageContentWrapper'
import { Title } from 'components/title/Title'

export function History() {
  const dispatch = useDispatch<DispatchType<LaunchesActionUpdate>>()

  const loadData = (page: number) =>
    dispatch({ type: LaunchesActionTypes.UPDATE, payload: { page } })

  const store = useSelector<State, HistoryState>((store) => store.history)

  return (
    <Page>
      <PageContentWrapper>
        <Title title={'History'} />
        <List loadData={loadData} store={store} />
      </PageContentWrapper>
    </Page>
  )
}
