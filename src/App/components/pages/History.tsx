import React from 'react'
import { Page } from 'components/pages/components/Page'
import { List } from 'components/list/List'

export function History() {
  return (
    <Page>
      <List store={'history'} />
    </Page>
  )
}
