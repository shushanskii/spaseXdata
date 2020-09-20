import React, { useContext, useEffect, useState } from 'react'
import { Window } from 'components/modals/components/window/Window'
import styled from 'styled-components'
import { colors } from 'app/constants'
import { Caption } from 'components/modals/components/window/components/Caption'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType } from 'app/types'
import { LaunchActionFetch, LaunchActionTypes } from 'actions/launch'
import { State } from 'store/rootReducer'
import { State as LaunchState } from 'store/reducers/launch'
import { LaunchInfoContext } from 'components/contexts/LaunchInfoContext'
import { Spinner } from 'components/spinner/Spinner'
import { State as ErrorState } from 'store/reducers/error'

export function LaunchInfo() {
  const { error } = useSelector<State, ErrorState>((store) => store.error)
  const { flightNumber, showLaunchInfo } = useContext(LaunchInfoContext)
  const { loading, data } = useSelector<State, LaunchState>(
    (store) => store.launch
  )
  const fetchAction = useDispatch<DispatchType<LaunchActionFetch>>()
  const handlerClose = () => showLaunchInfo(undefined)

  useEffect(() => {
    if (!isNaN(flightNumber)) {
      fetchAction({
        type: LaunchActionTypes.FETCH,
        payload: { flight_number: flightNumber },
      })
    }
  }, [flightNumber])

  return (
    <Window visible={!isNaN(flightNumber) && !error} onClose={handlerClose}>
      {loading && (
        <Spinner color={colors.clementine} top={'5px'} left={'5px'} />
      )}
      <Caption>Launch Info</Caption>
      <Content>{data && JSON.stringify(data)}</Content>
    </Window>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: ${colors.grenadier};
  padding: 20px;
  font-weight: bold;
  font-size: 32px;
`
