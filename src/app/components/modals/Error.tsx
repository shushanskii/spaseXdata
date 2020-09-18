import React from 'react'
import styled from 'styled-components'
import { Window } from 'components/modals/components/window/Window'
import { Caption } from 'components/modals/components/window/components/Caption'
import { colors } from 'app/constants'

interface Props {
  error: string | number
  onClose: (...args: any[]) => void
}

export function Error({ error, onClose }: Props) {
  return (
    <Window visible={!!error} onClose={onClose}>
      <Caption>Something goes wrong...</Caption>
      <Content>{`${error}`}</Content>
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
