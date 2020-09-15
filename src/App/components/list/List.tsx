import React from 'react'
import styled from 'styled-components'
import { Item } from 'components/list/components/Item'

interface Props {
  store: 'launches' | 'history'
}

export function List({ store }: Props) {
  return (
    <Container>
      <Item />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`
