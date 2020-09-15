import React from 'react'
import styled from 'styled-components'
import { colors } from 'app/constants'

export function Item() {
  return <Container />
}

const Container = styled.div`
  width: 100%;
  height: 40px;
  background: ${colors.osloGray};
`
