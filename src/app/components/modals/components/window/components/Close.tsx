import React from 'react'
import styled from 'styled-components'
import hexToRgba from 'hex-to-rgba'
import { colors } from 'app/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export function Close(props) {
  return (
    <Container {...props}>
      <Icon icon={faTimes} />
    </Container>
  )
}

const Container = styled.div`
  transition: background-color ease-in-out 200ms;
  width: 36px;
  height: 36px;
  background-color: ${hexToRgba(colors.black, 0.08)};
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${hexToRgba(colors.black, 0.16)};

    svg {
      color: ${colors.black};
    }
  }
`

const Icon = styled(FontAwesomeIcon)`
  transition: color ease-in-out 200ms;
  color: ${colors.osloGray};
  font-size: 22px;
`
