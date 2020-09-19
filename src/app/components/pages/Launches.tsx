import React, { useContext, useEffect, useState } from 'react'
import { Page } from 'components/pages/components/Page'
import { List } from 'components/list/List'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType } from 'app/types'
import {
  LaunchesActionTypes,
  LaunchesActionUpdate,
  LaunchesResetError,
} from 'actions/launches'
import { State } from 'src/app/store/rootReducer'
import { State as LaunchesState } from 'store/reducers/launches'
import { PageContentWrapper } from 'components/pages/components/PageContentWrapper'
import { Title } from 'components/title/Title'
import { Launch } from 'components/list/components/Launch'
import { Error } from 'components/modals/Error.tsx'
import { Launch as LaunchItem } from 'store/reducers/launches'
import {
  createFiltersContext,
  FiltersContextProvider,
} from 'components/contexts/FiltersContext'

interface Filters {
  date: Date
}

const context = createFiltersContext<Filters>()

function LaunchesPage() {
  const [page, setPage] = useState<number>(0)
  const { loading, data, error } = useSelector<State, LaunchesState>(
    (store) => store.launches
  )
  const { filters, setFilters } = useContext(context)
  const loadAction = useDispatch<DispatchType<LaunchesActionUpdate>>()
  const resetAction = useDispatch<DispatchType<LaunchesResetError>>()
  const handlerCloseErrorModal = () =>
    resetAction({ type: LaunchesActionTypes.RESET_ERROR })
  const handlerScrollEnd = () => {
    setPage((page) => page + 1)
  }

  useEffect(() => {
    loadAction({ type: LaunchesActionTypes.UPDATE, payload: { page } })
  }, [])

  useEffect(() => {
    if (page) {
      loadAction({ type: LaunchesActionTypes.UPDATE, payload: { page } })
    }
  }, [page])

  return (
    <Page>
      <Error error={error} onClose={handlerCloseErrorModal} />
      <PageContentWrapper>
        <Title>Launches</Title>
        <List<LaunchItem>
          onScrollEnd={handlerScrollEnd}
          data={data}
          loading={loading}
          error={error}
          itemsRender={(props) => <Launch {...props} />}
        />
      </PageContentWrapper>
    </Page>
  )
}

export const Launches = () => (
  <FiltersContextProvider<Filters>
    context={context}
    initialFilters={{ date: new Date() }}
  >
    <LaunchesPage />
  </FiltersContextProvider>
)
