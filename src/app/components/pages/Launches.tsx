import React, { useContext, useEffect } from 'react'
import { List } from 'components/list/List'
import { Filters } from 'components/pages/components/Filters'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType } from 'app/types'
import {
  LaunchesActionTypes,
  LaunchesActionUpdate,
  LaunchesFilters,
  LaunchesResetError,
} from 'actions/launches'
import { State } from 'src/app/store/rootReducer'
import { State as LaunchesState } from 'store/reducers/launches'
import { Title } from 'components/title/Title'
import { Launch } from 'components/list/components/Launch'
import { Error } from 'components/modals/Error.tsx'
import { Launch as LaunchItem } from 'store/reducers/launches'
import {
  createFiltersContext,
  FiltersContextProvider,
} from 'components/contexts/FiltersContext'
import { Page, PageContentWrapper } from 'components/pages/components/Elements'
import { ModalsContext } from 'components/contexts/ModalsContext'
import { LaunchInfo } from 'components/modals/LaunchInfo'

export const LaunchFiltersContext = createFiltersContext<LaunchesFilters>()

function LaunchesPage() {
  const { loading, data, error } = useSelector<State, LaunchesState>(
    (store) => store.launches
  )
  const { filters, page, setPage } = useContext(LaunchFiltersContext)
  const { toggleVisible } = useContext(ModalsContext)
  const loadAction = useDispatch<DispatchType<LaunchesActionUpdate>>()
  const resetErrorAction = useDispatch<DispatchType<LaunchesResetError>>()
  const handlerCloseErrorModal = () =>
    resetErrorAction({ type: LaunchesActionTypes.RESET_ERROR })
  const handlerScrollEnd = () => {
    setPage(page => page + 1) // eslint-disable-line
  }

  useEffect(() => {
    loadAction({
      type: LaunchesActionTypes.UPDATE,
      payload: { filters, page: 0 },
    })
  }, [])

  useEffect(() => {
    if (page > -1) {
      loadAction({
        type: LaunchesActionTypes.UPDATE,
        payload: { filters, page },
      })
    }
  }, [page])

  useEffect(() => {
    toggleVisible({ name: 'error', visible: !!error, params: { error } })
  }, [error])

  return (
    <Page>
      <LaunchInfo />
      <Error onClose={handlerCloseErrorModal} />
      <PageContentWrapper>
        <Title>Launches</Title>
        <Filters />
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
  <FiltersContextProvider<LaunchesFilters> context={LaunchFiltersContext}>
    <LaunchesPage />
  </FiltersContextProvider>
)
