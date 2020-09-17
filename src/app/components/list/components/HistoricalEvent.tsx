import React from 'react'
import styled from 'styled-components'
import { colors } from 'app/constants'
import { HistoricalEvent } from 'store/reducers/history'

interface Props {
  item: HistoricalEvent
}

export function HistoricalEvent({
  item: {
    title,
    details,
    event_date_utc,
    links: { reddit, article, wikipedia },
  },
}: Props) {
  const [, year, time] = /(.*)T(.*)Z/.exec(event_date_utc)

  return (
    <Container>
      <Details>
        <SubTitle>Details:</SubTitle>
        {details}
      </Details>
      <Title>
        <Name>{title}</Name>
        <Date>
          {year} {time}
        </Date>
      </Title>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 102px;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

const Details = styled.div`
  width: 100%;
  font-family: Avenir-Roman, sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: ${colors.osloGray};
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

const Name = styled.div`
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
  margin-left: 26px;
  color: ${colors.pigmentIndigo};
`
