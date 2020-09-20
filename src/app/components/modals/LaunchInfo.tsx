import React, { useContext, useEffect } from 'react'
import { Window } from 'components/modals/components/window/Window'
import styled from 'styled-components'
import { colors } from 'app/constants'
import { Caption } from 'components/modals/components/window/components/Caption'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType } from 'app/types'
import { LaunchActionFetch, LaunchActionTypes } from 'actions/launch'
import { State } from 'store/rootReducer'
import { State as LaunchState } from 'store/reducers/launch'

export function LaunchInfo() {
  const { loading, data } = useSelector<State, LaunchState>(
    (store) => store.launch
  )
  const fetchAction = useDispatch<DispatchType<LaunchActionFetch>>()

  // useEffect(() => {
  //     fetchAction({
  //       type: LaunchActionTypes.FETCH,
  //       payload: { flight_number: params.flight_number },
  //     })
  // }, [])

  return (
    <Window visible={false} onClose={() => console.log('LaunchInfo close')}>
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
