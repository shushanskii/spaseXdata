import React from 'react'
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

export function Launches() {
  const loadAction = useDispatch<DispatchType<LaunchesActionUpdate>>()
  const loadData = (page: number) =>
    loadAction({ type: LaunchesActionTypes.UPDATE, payload: { page } })
  const resetAction = useDispatch<DispatchType<LaunchesResetError>>()
  const resetError = () =>
    resetAction({ type: LaunchesActionTypes.RESET_ERROR })

  const store = useSelector<State, LaunchesState>((store) => store.launches)

  return (
    <Page>
      <PageContentWrapper>
        <Title>Launches</Title>
        <List
          loadData={loadData}
          resetError={resetError}
          store={store}
          render={(props) => <Launch {...props} />}
        />
      </PageContentWrapper>
    </Page>
  )
}
