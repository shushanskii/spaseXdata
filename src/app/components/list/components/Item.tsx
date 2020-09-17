import React from 'react'
import styled from 'styled-components'
import { Launch } from 'store/reducers/launches'
import { colors } from 'app/constants'

interface Props {
  launch: Launch
}

export function Item({
  launch: {
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
        <MissionName>{mission_name}</MissionName>
        <Date>
          {year} {time}
        </Date>
      </Title>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 102px;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

const Description = styled.span`
  width: 100%;
  font-family: Avenir-Roman, sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: ${colors.osloGray};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const SubTitle = styled.span`
  font-weight: bold;
  margin: 0 6px;
  color: ${colors.white};
  &:first-child {
    margin-left: 0;
  }
`

const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`

const MissionName = styled.div`
  font-family: Avenir, sans-serif;
  font-size: 26px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: normal;
  color: ${colors.clementine};
`

const Date = styled.div`
  font-family: Avenir-Roman, sans-serif;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: ${colors.osloGray};
  margin-left: 26px;
  color: ${colors.pigmentIndigo};
`
