import React from 'react'
import { Page } from 'components/pages/components/Page'
import { List } from 'components/list/List'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType } from 'app/types'
import { State } from 'store/rootReducer'
import { State as HistoryState } from 'store/reducers/history'
import { PageContentWrapper } from 'components/pages/components/PageContentWrapper'
import { Title } from 'components/title/Title'
import { HistoricalEvent } from 'components/list/components/HistoricalEvent'
import { HistoryActionTypes, HistoryActionUpdate } from 'actions/history'

export function History() {
  const dispatch = useDispatch<DispatchType<HistoryActionUpdate>>()

  const loadData = (page: number) =>
    dispatch({ type: HistoryActionTypes.UPDATE, payload: { page } })

  const store = useSelector<State, HistoryState>((store) => store.history)

  return (
    <Page>
      <PageContentWrapper>
        <Title title={'History'} />
        <List
          loadData={loadData}
          store={store}
          render={(props) => <HistoricalEvent {...props} />}
        />
      </PageContentWrapper>
    </Page>
  )
}
