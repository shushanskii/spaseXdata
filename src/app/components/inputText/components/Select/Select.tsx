import React from 'react'
import styled, { css } from 'styled-components'
import { Option } from 'components/inputText/components/Select/Option'

interface Props {
  visible: boolean
  options: Array<{ key: string | number; value: string | number }> | string[]
}

function Select(props: Props) {
  const { visible, options } = props
  return (
    <Container visible={visible}>
      {(options as any).map((option) => {
        return <Option key={option}>{option}</Option>
      })}
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
export default Select
