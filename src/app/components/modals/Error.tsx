import React, { useContext } from 'react'
import styled from 'styled-components'
import { Window } from 'components/modals/components/window/Window'
import { Caption } from 'components/modals/components/window/components/Caption'
import { colors } from 'app/constants'
import { ModalsContext } from 'components/contexts/ModalsContext'

interface Props {
  onClose: (...args: any[]) => void
}

export function Error({ onClose }: Props) {
  const {
    modals: {
      error: { visible, params },
    },
  } = useContext(ModalsContext)
  const message = params && params.error && `${params.error}` // eslint-disable-line

  return (
    <Window visible={visible} onClose={onClose}>
      <Caption>Something goes wrong...</Caption>
      <Content>{message}</Content>
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
