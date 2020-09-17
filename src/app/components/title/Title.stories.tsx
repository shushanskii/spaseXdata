import { Meta } from '@storybook/react/types-6-0'
import React from 'react'
import { Title } from 'components/title/Title'

export default {
  title: 'Title',
  component: Title,
} as Meta

export const Basic = ({ children }: React.PropsWithChildren<any>) => (
  <Title>{children}</Title>
)
Basic.args = {
  children: 'Hello',
}
