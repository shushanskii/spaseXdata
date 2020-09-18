import React, { useEffect } from 'react'
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

export function Launches() {
  const { loading, data, error } = useSelector<State, LaunchesState>(
    (store) => store.launches
  )
  const loadAction = useDispatch<DispatchType<LaunchesActionUpdate>>()
  const resetAction = useDispatch<DispatchType<LaunchesResetError>>()
  const handlerCloseErrorModal = () =>
    resetAction({ type: LaunchesActionTypes.RESET_ERROR })

  useEffect(() => {
    loadAction({ type: LaunchesActionTypes.UPDATE, payload: { page: 0 } })
  }, [])

  return (
    <Page>
      <Error error={error} onClose={handlerCloseErrorModal} />
      <PageContentWrapper>
        <Title>Launches</Title>
        <List
          onScrollEnd={() => console.log('on scroll end')}
          onError={(error) => console.log('on error', error)}
          data={data}
          loading={loading}
          error={error}
          itemsRender={(props) => <Launch {...props} />}
        />
      </PageContentWrapper>
    </Page>
  )
}
