import React, { useContext, useEffect } from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'
import { colors, MEDIA } from 'app/constants'
import { Close } from 'components/modals/components/window/components/Close'
import hexToRgba from 'hex-to-rgba'

interface Props {
  visible: boolean
  onClose?: (...args: any[]) => void
}

const style = {
  overlay: {
    backgroundColor: `${hexToRgba(colors.black, 0.4)}`,
  },
}

Modal.setAppElement('#root')

export function Window({
  children,
  visible,
  onClose,
}: React.PropsWithChildren<Props>) {
  const handlerClickWrapper = (e: React.MouseEvent<HTMLDivElement>) =>
    e.stopPropagation()

  const handlerModalClose = () => {
    console.log('handlerModalClose')
    if (onClose) {
      onClose()
    }
  }

  return (
    <Container
      isOpen={visible}
      style={style}
      onRequestClose={handlerModalClose}
    >
      <Wrapper onClick={handlerClickWrapper}>{children}</Wrapper>
      <Close onClick={handlerModalClose} />
    </Container>
  )
}

const Container = styled(Modal)`
  ${MEDIA.greaterThan('desktop')`
        width: 544px;
    `}

  ${MEDIA.between('tablet', 'desktop')`
        width: 640px;
    `}

    ${MEDIA.lessThan('tablet')`
        width: 100%;
    `}
  overflow: hidden;
  border-radius: 6px;
  background-color: ${colors.white};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  outline: none;
  transition: max-height 500ms ease-out;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  padding: 32px 50px;
`
