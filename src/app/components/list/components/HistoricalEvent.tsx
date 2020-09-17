import React from 'react'
import { HistoricalEvent } from 'store/reducers/history'
import {
  Container,
  SubTitle,
  Title,
  Name,
  Date,
  Description,
} from 'components/list/components/components/Elements'
import { HistoricalEventsLinks } from 'components/list/components/components/HistoricalEventsLinks'

interface Props {
  item: HistoricalEvent
}

export function HistoricalEvent({
  item: { title, details, event_date_utc, links },
}: Props) {
  const [, year, time] = /(.*)T(.*)Z/.exec(event_date_utc)

  return (
    <Container>
      <Description>
        <SubTitle>Details:</SubTitle>
        {details}
      </Description>
      <Title>
        <Name>{title}</Name>
        <Date>
          {year} {time}
        </Date>
        <HistoricalEventsLinks links={links} />
      </Title>
    </Container>
  )
}
