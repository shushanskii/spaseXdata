import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from 'app/constants'

interface Props {
  key: string | number
}

export function Option(props: React.PropsWithChildren<Props>) {
  const { children } = props

  return <Component>{children}</Component>
}

const Component = styled.div`
  width: 100%;
  min-height: 54px;
  border: 1px solid ${colors.osloGray};
  border-top: none;
  padding: 15px;

  &:last-child {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  font-family: Avenir-Roman, sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
`
