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
import {
  HistoryActionTypes,
  HistoryActionUpdate,
  HistoryResetError,
} from 'actions/history'

export function History() {
  const load = useDispatch<DispatchType<HistoryActionUpdate>>()
  const loadData = (page: number) =>
    load({ type: HistoryActionTypes.UPDATE, payload: { page } })
  const reset = useDispatch<DispatchType<HistoryResetError>>()
  const resetError = () => reset({ type: HistoryActionTypes.RESET_ERROR })
  const store = useSelector<State, HistoryState>((store) => store.history)

  return (
    <Page>
      <PageContentWrapper>
        <Title>History</Title>
        <List
          loadData={loadData}
          resetError={resetError}
          store={store}
          render={(props) => <HistoricalEvent {...props} />}
        />
      </PageContentWrapper>
    </Page>
  )
}
