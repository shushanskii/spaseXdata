import React, { useContext, useEffect } from 'react'
import { List } from 'components/list/List'
import { Filters } from 'components/pages/components/Filters'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType } from 'app/types'
import {
  LaunchesActionTypes,
  LaunchesActionUpdate,
  LaunchesFilters,
  LaunchesResetState,
} from 'actions/launches'
import { State } from 'src/app/store/rootReducer'
import { State as LaunchesState } from 'store/reducers/launches'
import { Title } from 'components/title/Title'
import { Launch } from 'components/list/components/Launch'
import { LaunchListItem } from 'store/reducers/launches'
import {
  createFiltersContext,
  FiltersContextProvider,
} from 'components/contexts/FiltersContext'
import { Page, PageContentWrapper } from 'components/pages/components/Elements'
import { LaunchInfo } from 'components/modals/LaunchInfo'
import { LaunchInfoContextProvider } from 'components/contexts/LaunchInfoContext'

export const LaunchFiltersContext = createFiltersContext<LaunchesFilters>()

function LaunchesPage() {
  const { loading, data } = useSelector<State, LaunchesState>(
    (store) => store.launches
  )
  const { filters, page, setPage } = useContext(LaunchFiltersContext)
  const loadAction = useDispatch<DispatchType<LaunchesActionUpdate>>()
  const resetAction = useDispatch<DispatchType<LaunchesResetState>>()
  const handlerScrollEnd = () => setPage(page => page + 1); // eslint-disable-line

  useEffect(() => {
    loadAction({
      type: LaunchesActionTypes.FETCH,
      payload: { filters, page: 0 },
    })
  }, [])

  useEffect(() => {
    if (page > 0) {
      loadAction({
        type: LaunchesActionTypes.FETCH,
        payload: { filters, page },
      })
    }
  }, [page])

  useEffect(() => {
    if (filters) {
      resetAction({ type: LaunchesActionTypes.RESET_STATE })
      setPage(0)
      loadAction({
        type: LaunchesActionTypes.FETCH,
        payload: { filters, page },
      })
    }
  }, [filters])

  return (
    <Page>
      <LaunchInfo />
      <PageContentWrapper>
        <Title>Launches</Title>
        <Filters />
        <List<LaunchListItem>
          onScrollEnd={handlerScrollEnd}
          data={data}
          loading={loading}
          itemsRender={(props) => <Launch {...props} />}
        />
      </PageContentWrapper>
    </Page>
  )
}

export const Launches = () => (
  <FiltersContextProvider<LaunchesFilters> context={LaunchFiltersContext}>
    <LaunchInfoContextProvider>
      <LaunchesPage />
    </LaunchInfoContextProvider>
  </FiltersContextProvider>
)
