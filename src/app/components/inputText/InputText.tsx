import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Select from 'components/inputText/components/Select/Select'
import { colors } from 'app/constants'

interface Props {
  placeholder: string
  value?: string
  onChange?: (value: string) => void
  onClick?: (...args: any[]) => void
  options?: { key: string | number; value: string | number }[] | string[]
  disabled?: boolean
  focused?: boolean
  error?: string
  className?: string
}

interface State {
  focused: boolean
  value?: string
}

const initialState: State = {
  focused: false,
}

export function InputText({
  focused: propsFocused,
  onChange,
  onClick,
  error,
  placeholder,
  disabled,
  options,
  className,
  value: propsValue,
}: Props) {
  if (propsFocused) {
    initialState.focused = true
  }

  const inputRef = React.createRef<HTMLInputElement>()
  const [state, setState] = useState<State>(initialState)
  const { focused, value } = state
  const handlerFocus = () =>
    !disabled && !propsFocused && setState({ ...state, focused: true })

  const handlerBlur = () => {
    if (!propsFocused && !value) {
      setState({ ...state, focused: false })
    }
  }

  const handlerClick = () => {
    if (!disabled && !propsFocused && !focused) {
      inputRef.current.focus()
      setState({ ...state, focused: true })
    }

    if (!disabled && onClick) {
      onClick()
    }
  }

  const handlerInputText = (event: any) => {
    const value = event.target.value
    setState({ ...state, value })
    if (onChange) {
      onChange(value)
    }
  }

  React.useEffect(() => {
    setState({ ...state, focused: propsFocused })
  }, [propsFocused])

  return (
    <div className={className}>
      <Container
        onFocus={handlerFocus}
        onBlur={handlerBlur}
        onClick={handlerClick}
        focused={focused}
        error={!!error}
        disabled={disabled}
        isSelect={!!options}
      >
        <Input
          disabled={disabled}
          onFocus={handlerFocus}
          onChange={handlerInputText}
          value={propsValue || value}
          ref={inputRef}
        />
        <Placeholder focused={focused} disabled={disabled}>
          {placeholder}
        </Placeholder>
        {options && <Select visible={!!focused} options={options} />}
      </Container>
      {!!error && <ErrorElement>{error}</ErrorElement>}
    </div>
  )
}

const textMixin = css`
  font-family: Avenir-Roman, sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`

const Container = styled.div<{
  focused: boolean
  error: boolean
  disabled: boolean
  isSelect?: boolean
}>`
  width: 100%;
  height: 56px;
  border-radius: 6px;
  ${({ isSelect, focused }) =>
    isSelect &&
    focused &&
    css`
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    `}
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all ease-in-out 200ms;
  border: solid 1px
    ${({ focused, error, disabled }) =>
      disabled
        ? colors.blueBayoux
        : error
        ? colors.monza
        : focused
        ? colors.white
        : colors.osloGray};
`

const Placeholder = styled.div<{
  focused: boolean
  disabled: boolean
}>`
  ${textMixin}
  color: ${({ focused, disabled }) =>
    disabled
      ? focused
        ? colors.osloGray
        : colors.blueBayoux
      : colors.osloGray};
  position: absolute;
  left: 16px;
  transition: all ease-in-out 200ms;
  user-select: none;

  ${({ focused }) =>
    focused &&
    css`
      transform: translate(0, -13px);
      font-size: 10px;
    `}
`

const Input = styled.input<{ disabled: boolean }>`
  ${textMixin}
  width: 100%;
  outline: none;
  height: 24px;
  position: relative;
  bottom: -8px;
  border: none;
  background: none;

  color: ${({ disabled }) => (disabled ? colors.blueBayoux : colors.white)};
`

const ErrorElement = styled.div`
  font-family: Avenir-Roman, sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: ${colors.monza};
  margin-top: 8px;
`
