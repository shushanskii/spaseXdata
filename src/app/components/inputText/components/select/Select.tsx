import React from 'react'
import styled, { css } from 'styled-components'
import { Option } from 'components/inputText/components/select/components/Option'
import { colors } from 'app/constants'

interface Props {
  visible: boolean
  options: { key: string | number; value: string | number }[]
  onSelect: (value: string | number) => void
}

export function Select({ visible, options, onSelect }: Props) {
  return (
    <Container visible={visible}>
      <Option onSelect={onSelect} value={''}>
        <Reset>Reset</Reset>
      </Option>
      {options.map(({ key, value }, index) => (
        <Option onSelect={onSelect} value={key} key={`${index}-${key}`}>
          {value}
        </Option>
      ))}
    </Container>
  )
}

const Container = styled.div<{ visible: boolean }>`
  width: calc(100% + 2px);
  position: absolute;
  top: 54px;
  left: -1px;
  z-index: 1;
  filter: alpha(opacity=0);
  transition: 200ms ease;
  visibility: hidden;
  opacity: 0;
  ${({ visible }) =>
    visible &&
    css`
      visibility: visible;
      opacity: 1;
      filter: alpha(opacity=100);
    `}
`

const Reset = styled.span`
  color: ${colors.osloGray};
`
