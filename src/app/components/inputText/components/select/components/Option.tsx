import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from 'app/constants'

interface Props {
  value: string | number
  onSelect: (value: string | number) => void
}

export function Option({
  children,
  value,
  onSelect,
}: React.PropsWithChildren<Props>) {
  const handlerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    onSelect(value)
  }

  return <Container onClick={handlerClick}>{children}</Container>
}

const Container = styled.div`
  width: 100%;
  min-height: 54px;
  border: 1px solid ${colors.osloGray};
  border-top: none;
  padding: 15px;
  font-family: Avenir-Roman, sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${colors.white};
  cursor: default;
  background: ${colors.woodsmoke};

  &:first-child {
    border-top: 1px solid ${colors.osloGray};
  }

  &:last-child {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
`
