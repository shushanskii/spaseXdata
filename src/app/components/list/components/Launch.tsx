import React from 'react'
import { Launch } from 'store/reducers/launches'
import {
  Container,
  SubTitle,
  Title,
  Name,
  Date,
  Description,
} from 'components/list/components/components/Elements'

interface Props {
  item: Launch
}

export function Launch({
  item: {
    mission_name,
    launch_date_utc,
    payloads: { nationality, manufacturer, payload_type },
  },
}: Props) {
  const [, year, time] = /(.*)T(.*)\.(?:.*)Z/.exec(launch_date_utc)

  return (
    <Container>
      <Description>
        <SubTitle>Payload types:</SubTitle>
        {payload_type.join(', ')}
        <SubTitle>Manufacturers:</SubTitle>
        {manufacturer.join(', ')}
        <SubTitle>Nationality:</SubTitle>
        {nationality.join(', ')}
      </Description>
      <Title>
        <Name>{mission_name}</Name>
        <Date>
          {year} {time}
        </Date>
      </Title>
    </Container>
  )
}
