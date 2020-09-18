import React, { useEffect } from 'react'
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
import { Error } from 'components/modals/Error'

export function History() {
  const { loading, data, error } = useSelector<State, HistoryState>(
    (store) => store.history
  )
  const loadAction = useDispatch<DispatchType<HistoryActionUpdate>>()
  const resetAction = useDispatch<DispatchType<HistoryResetError>>()
  const handlerCloseErrorModal = () =>
    resetAction({ type: HistoryActionTypes.RESET_ERROR })

  useEffect(() => {
    loadAction({ type: HistoryActionTypes.UPDATE, payload: { page: 0 } })
  }, [])

  return (
    <Page>
      <Error error={error} onClose={handlerCloseErrorModal} />
      <PageContentWrapper>
        <Title>History</Title>
        <List
          onScrollEnd={() => console.log('on scroll end')}
          onError={(error) => console.log('on error', error)}
          data={data}
          loading={loading}
          error={error}
          itemsRender={(props) => <HistoricalEvent {...props} />}
        />
      </PageContentWrapper>
    </Page>
  )
}
