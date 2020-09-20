import React from 'react'
import { LaunchListItem } from 'store/reducers/launches'
import {
  Container,
  SubTitle,
  Title,
  Name,
  Date,
  Description,
} from 'components/list/components/components/Elements'

interface Props {
  item: LaunchListItem
}

export function Launch({
  item: {
    flight_number,
    mission_name,
    launch_date_utc,
    payloads: { nationality, manufacturer, payload_type },
  },
}: Props) {
  const [, year, time] = /(.*)T(.*)\.(?:.*)Z/.exec(launch_date_utc)

  const handlerClick = () => {
    console.log('flight_number', flight_number)
  }

  return (
    <Container onClick={handlerClick}>
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
