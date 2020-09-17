import React from 'react'
import styled from 'styled-components'
import { colors } from 'app/constants'

interface Props {
  title: string
}

export function Title({ title }: Props) {
  return <Container>{title}</Container>
}

const Container = styled.div`
  width: 100%;
  height: 52px;
  margin-bottom: 34px;
  font-family: Avenir, sans-serif;
  font-size: 32px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: ${colors.white};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
