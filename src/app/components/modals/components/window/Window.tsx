import React, { useContext, useEffect } from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'
import { colors, MEDIA } from 'app/constants'
import { ModalContext } from 'components/contexts/ModalContext'
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
  onClose,
  visible: propsVisible,
}: React.PropsWithChildren<Props>) {
  const { visible, toggleVisible } = useContext(ModalContext)

  const handlerModalClose = () => {
    toggleVisible(false)
    if (onClose) {
      onClose()
    }
  }

  useEffect(() => {
    toggleVisible(propsVisible)
  }, [propsVisible])

  return (
    <Container
      isOpen={visible}
      style={style}
      onRequestClose={handlerModalClose}
    >
      <Close onClick={handlerModalClose} />
      {children}
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
  padding: 32px 50px;
  transition: max-height 500ms ease-out;
`
