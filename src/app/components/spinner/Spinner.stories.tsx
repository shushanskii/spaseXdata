import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Spinner } from 'components/spinner/Spinner'
import { colors } from 'src/app/constants'

export default {
  title: 'Spinner',
  component: Spinner,
} as Meta

export const Basic = (props) => <Spinner {...props} />
Basic.args = {
  color: `${colors.grenadier}`,
  top: '50%',
  left: '50%',
}
