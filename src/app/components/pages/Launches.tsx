import React, { useContext, useEffect } from 'react'
import { List } from 'components/list/List'
import { Filters } from 'components/pages/components/Filters'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType } from 'app/types'
import {
  LaunchesActionTypes,
  LaunchesActionUpdate,
  LaunchesFilters,
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

export const LaunchFiltersContext = createFiltersContext<LaunchesFilters>()

function LaunchesPage() {
  const { loading, data } = useSelector<State, LaunchesState>(
    (store) => store.launches
  )
  const { filters, page, setPage } = useContext(LaunchFiltersContext)
  const loadAction = useDispatch<DispatchType<LaunchesActionUpdate>>()
  const handlerScrollEnd = () => setPage(page => page + 1) // eslint-disable-line

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
    <LaunchesPage />
  </FiltersContextProvider>
)
