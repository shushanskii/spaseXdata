import React, { useContext, useEffect } from 'react'
import { Window } from 'components/modals/components/window/Window'
import styled from 'styled-components'
import { colors } from 'app/constants'
import { ModalsContext } from 'components/contexts/ModalsContext'
import { Caption } from 'components/modals/components/window/components/Caption'

export function LaunchInfo() {
  const {
    modals: {
      launchInfo: { visible, params },
    },
    toggleVisible,
  } = useContext(ModalsContext)
  const handlerClose = () => {
    console.log('handlerClose')
  }

  useEffect(() => {
    console.log('LaunchInfo params', params)
  }, [params])

  return (
    <Window visible={visible} onClose={handlerClose}>
      <Caption>Launch Info</Caption>
      <Content>Here should be info</Content>
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
