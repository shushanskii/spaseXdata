import React, { useEffect, useState } from 'react'
import { Page } from 'components/pages/components/Page'
import { List } from 'components/list/List'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType } from 'app/types'
import { State } from 'store/rootReducer'
import { State as HistoryState } from 'store/reducers/history'
import { PageContentWrapper } from 'components/pages/components/PageContentWrapper'
import { Title } from 'components/title/Title'
import { HistoricalEvent } from 'components/list/components/HistoricalEvent'
import { HistoricalEvent as HistoricalEventItem } from 'store/reducers/history'

import {
  HistoryActionTypes,
  HistoryActionUpdate,
  HistoryResetError,
} from 'actions/history'
import { Error } from 'components/modals/Error'

export function History() {
  const [page, setPage] = useState<number>(0)

  const { loading, data, error } = useSelector<State, HistoryState>(
    (store) => store.history
  )
  const loadAction = useDispatch<DispatchType<HistoryActionUpdate>>()
  const resetErrorAction = useDispatch<DispatchType<HistoryResetError>>()
  const handlerCloseErrorModal = () =>
    resetErrorAction({ type: HistoryActionTypes.RESET_ERROR })
  const handlerScrollEnd = () => setPage((page) => page + 1)

  useEffect(() => {
    loadAction({ type: HistoryActionTypes.UPDATE, payload: { page: 0 } })
  }, [])

  useEffect(() => {
    if (page > 0) {
      loadAction({ type: HistoryActionTypes.UPDATE, payload: { page } })
    }
  }, [page])

  return (
    <Page>
      <Error error={error} onClose={handlerCloseErrorModal} />
      <PageContentWrapper>
        <Title>History</Title>
        <List<HistoricalEventItem>
          onScrollEnd={handlerScrollEnd}
          data={data}
          loading={loading}
          error={error}
          itemsRender={(props) => <HistoricalEvent {...props} />}
        />
      </PageContentWrapper>
    </Page>
  )
}
