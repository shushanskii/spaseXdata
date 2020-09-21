import React from 'react'
import styled from 'styled-components'
import { Window } from 'components/modals/components/window/Window'
import { Caption } from 'components/modals/components/window/components/Caption'
import { colors } from 'app/constants'

interface Props {
  visible: boolean
  onClose: () => void
}

export function Share({ visible, onClose }: Props) {
  const handlerClose = () => {
    onClose()
  }

  return (
    <DarkWindow visible={visible} onClose={handlerClose}>
      <LightCaption>Share</LightCaption>
      <Content>Share</Content>
    </DarkWindow>
  )
}

const DarkWindow = styled(Window)`
  background: ${colors.woodsmoke};
`

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

const LightCaption = styled(Caption)`
  color: ${colors.white};
`
