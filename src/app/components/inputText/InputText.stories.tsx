import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { InputText } from 'components/inputText/InputText'

export default {
  title: 'InputText',
  component: InputText,
} as Meta

export const Input = (props) => <InputText {...props} />
Input.args = {
  error: 'Some error',
  placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
}

export const Select = (props) => <InputText {...props} />
Select.args = {
  error: 'Some error',
  placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  options: [
    { key: 'One', value: 'Vivamus ullamcorper eros' },
    { key: 'Two', value: 'Etiam et turpis eget elit feugiat lobortis.' },
    { key: 'Three', value: 'Aenean purus eros, mattis ac justo at.' },
  ],
}
