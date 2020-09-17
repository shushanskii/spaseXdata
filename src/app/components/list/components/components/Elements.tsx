import styled from 'styled-components'
import { colors } from 'app/constants'

export const Container = styled.div`
  width: 100%;
  min-height: 102px;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

export const Description = styled.div`
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

export const SubTitle = styled.span`
  font-weight: bold;
  margin: 0 6px;
  color: ${colors.white};
  &:first-child {
    margin-left: 0;
  }
`

export const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`

export const Name = styled.div`
  font-family: Avenir, sans-serif;
  font-size: 26px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: normal;
  color: ${colors.clementine};
`

export const Date = styled.div`
  font-family: Avenir-Roman, sans-serif;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  margin-left: 26px;
  color: ${colors.white};
`
