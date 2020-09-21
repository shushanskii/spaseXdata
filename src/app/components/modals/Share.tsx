import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Window } from 'components/modals/components/window/Window'
import { Caption } from 'components/modals/components/window/components/Caption'
import { colors } from 'app/constants'
import { InputText } from 'components/inputText/InputText'
import { Spinner } from 'components/spinner/Spinner'

interface Props {
  visible: boolean
  onClose: () => void
}

const shareInfo = [
  { key: 'Media links', value: 'Media links' },
  { key: 'Details', value: 'Details' },
]

export function Share({ visible, onClose }: Props) {
  const [info, setInfo] = useState<string>()
  const handlerClose = () => onClose()
  const handlerShareSelect = (value: string) => setInfo(value)

  return (
    <DarkWindow visible={visible} onClose={handlerClose}>
      <Spinner color={colors.grenadier} top={'5px'} left={'5px'} />
      <LightCaption>Share</LightCaption>
      <Content>
        <ShareSelect
          placeholder={'What do you want to share?'}
          onSelect={handlerShareSelect}
          options={shareInfo}
        />
        <Message>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          volutpat euismod nulla, vel rutrum felis pulvinar vel.
        </Message>
        <ShareButton disabled={!info}>Send</ShareButton>
      </Content>
    </DarkWindow>
  )
}

const DarkWindow = styled(Window)`
  background: ${colors.woodsmoke};
  height: 400px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`

const LightCaption = styled(Caption)`
  color: ${colors.white};
`
const ShareSelect = styled(InputText)`
  width: 100%;
`

const ShareButton = styled.div<{ disabled?: boolean }>`
  font-size: 32px;
  color: ${colors.clementine};
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      cursor: default;
      color: ${colors.osloGray};
    `}

  &:hover {
    color: ${colors.grenadier};
  }
`

const Message = styled.div`
  color: ${colors.osloGray};
  font-style: italic;
  font-weight: lighter;
  font-size: 20px;
`
