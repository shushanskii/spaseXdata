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
import { MediaLinks } from 'components/mediaLinks/MediaLinks'
import styled from 'styled-components'

interface Props {
  item: HistoricalEvent
}

export function HistoricalEvent({
  item: { title, details, event_date_utc, links },
}: Props) {
  const [, year, time] = /(.*)T(.*)Z/.exec(event_date_utc) || []

  return (
    <Container>
      <Description>
        <SubTitle>Details:</SubTitle>
        {details}
      </Description>
      <Title>
        <Name>{title}</Name>
        <AdditionalInfo>
          <Date>
            {year} {time}
          </Date>
          <MediaLinks links={links} someKey={event_date_utc} />
        </AdditionalInfo>
      </Title>
    </Container>
  )
}

const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
