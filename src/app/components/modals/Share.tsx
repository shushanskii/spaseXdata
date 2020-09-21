import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Window } from 'components/modals/components/window/Window'
import { Caption } from 'components/modals/components/window/components/Caption'
import { colors } from 'app/constants'
import { InputText } from 'components/inputText/InputText'
import { Spinner } from 'components/spinner/Spinner'
import { ShareActionSend, ShareActionTypes, ShareType } from 'actions/share'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType } from 'app/types'
import { State } from 'store/rootReducer'
import { State as ShareState } from 'store/reducers/share'

interface Props {
  visible: boolean
  onClose: () => void
}

const shareInfo = [
  { key: ShareType.MEDIA, value: 'Media links' },
  { key: ShareType.DETAILS, value: 'Details' },
]

export function Share({ visible, onClose }: Props) {
  const [share, setShare] = useState<ShareType>()
  const { loading, message } = useSelector<State, ShareState>(
    (store) => store.share
  )
  const send = useDispatch<DispatchType<ShareActionSend>>()
  const handlerClose = () => onClose()
  const handlerShareSelect = (value: ShareType) => setShare(value)
  const handlerSendClick = () => {
    send({ type: ShareActionTypes.SEND, payload: { share } })
  }

  return (
    <DarkWindow visible={visible} onClose={handlerClose}>
      {loading && <Spinner color={colors.grenadier} top={'5px'} left={'5px'} />}
      <LightCaption>Share</LightCaption>
      <Content>
        <ShareSelect
          placeholder={'What do you want to share?'}
          onSelect={handlerShareSelect}
          options={shareInfo}
          disabled={loading}
        />
        <Message>
          {message
            ? message
            : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat euismod nulla, vel rutrum felis pulvinar vel.`}
        </Message>
        <ShareButton disabled={!share || loading} onClick={handlerSendClick}>
          Send
        </ShareButton>
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
