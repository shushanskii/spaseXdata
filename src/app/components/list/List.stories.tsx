import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { List } from 'components/list/List'
import { HistoricalEvent } from 'components/list/components/HistoricalEvent'
import { Launch } from 'components/list/components/Launch'
import { Provider } from 'react-redux'
import { configureStore } from 'store/configureStore'

export default {
  title: 'List',
  component: List,
} as Meta

export const History = (props) => (
  <Provider store={configureStore()}>
    <List {...props} />
  </Provider>
)
History.args = {
  onScrollEnd: console.log('onScrollEnd'),
  loading: false,
  itemsRender: (props) => <HistoricalEvent {...props} />, // eslint-disable-line
  data: [
    {
      title: 'Falcon 1 Makes History',
      event_date_utc: '2008-09-28T23:15:00Z',
      details:
        'Falcon 1 becomes the first privately developed liquid fuel rocket to reach Earth orbit.',
      links: {
        reddit: null,
        article:
          'http://www.spacex.com/news/2013/02/11/flight-4-launch-update-0',
        wikipedia: 'https://en.wikipedia.org/wiki/Falcon_1',
      },
    },
    {
      title: 'SpaceX Wins $1.6B CRS Contract',
      event_date_utc: '2008-12-23T01:00:00Z',
      details:
        'NASA awards SpaceX $1.6B Commercial Resupply Services (CRS) contract.',
      links: {
        reddit: null,
        article:
          'https://www.nasaspaceflight.com/2008/12/spacex-and-orbital-win-huge-crs-contract-from-nasa/',
        wikipedia: 'https://en.wikipedia.org/wiki/Commercial_Resupply_Services',
      },
    },
  ],
}

export const Launches = (props) => (
  <Provider store={configureStore()}>
    <List {...props} />
  </Provider>
)
Launches.args = {
  onScrollEnd: console.log('onScrollEnd'),
  loading: false,
  itemsRender: (props) => <Launch {...props} />, // eslint-disable-line
  data: [
    {
      launch_date_utc: '2013-09-29T16:00:00.000Z',
      mission_name: 'CASSIOPE',
      payloads: {
        manufacturer: ['MDA'],
        nationality: ['Canada'],
        payload_type: ['Satellite'],
      },
    },
  ],
}
