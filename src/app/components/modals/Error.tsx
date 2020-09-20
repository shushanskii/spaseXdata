import React from 'react'
import styled from 'styled-components'
import { Window } from 'components/modals/components/window/Window'
import { Caption } from 'components/modals/components/window/components/Caption'
import { colors } from 'app/constants'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'store/rootReducer'
import { State as ErrorState } from 'store/reducers/error'
import { DispatchType } from 'app/types'
import { ErrorActionClear, ErrorActionTypes } from 'actions/error'

export function Error() {
  const { error } = useSelector<State, ErrorState>((store) => store.error)
  const clearError = useDispatch<DispatchType<ErrorActionClear>>()
  const handlerClose = () => clearError({ type: ErrorActionTypes.CLEAR_ERROR })

  return (
    <Window visible={!!error} onClose={handlerClose}>
      <Caption>Something goes wrong...</Caption>
      <Content>{error}</Content>
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
