import React from 'react'
import styled from 'styled-components'
import { colors } from 'app/constants'

export function Item({ id }: { id: any }) {
  return <Container>{id}</Container>
}

const Container = styled.div`
  width: 100%;
  height: 40px;
  background: ${colors.osloGray};
  margin: 4px 0;
  color: red;
`
