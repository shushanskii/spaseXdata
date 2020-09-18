import { Meta } from '@storybook/react/types-6-0'
import React from 'react'
import { List, Props } from 'components/list/List'
import { HistoricalEvent } from 'components/list/components/HistoricalEvent'
import { Launch } from 'components/list/components/Launch'

export default {
  title: 'List',
  component: List,
} as Meta

export const Basic = (props: Props) => <List {...props} />
Basic.args = {
  loadData: () => void 0,
  render: () => (<div>Some Title</div>), // eslint-disable-line
  store: {
    loading: false,
    data: [{}, {}],
  },
}

export const History = (props: Props) => <List {...props} />
History.args = {
  loadData: () => void 0,
  render: (props) => <HistoricalEvent {...props} />, // eslint-disable-line
  store: {
    loading: false,
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
          wikipedia:
            'https://en.wikipedia.org/wiki/Commercial_Resupply_Services',
        },
      },
    ],
  },
}

export const Launches = (props: Props) => <List {...props} />
Launches.args = {
  loadData: () => void 0,
  render: (props) => <Launch {...props} />, // eslint-disable-line
  store: {
    loading: false,
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
  },
}
