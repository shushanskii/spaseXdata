import React from 'react'
import { Page } from 'components/pages/components/Page'
import { PageContentWrapper } from 'components/pages/components/PageContentWrapper'
import { Title } from 'components/title/Title'
import styled from 'styled-components'
import { Link as RouterLink, LinkProps } from 'react-router-dom'
import { colors } from 'app/constants'

export function Home() {
  return (
    <Page>
      <PageContentWrapper>
        <Title>SpaceXData</Title>
        <Content>
          <Button to={'/history'} tabIndex={1}>
            History
          </Button>
          <Button to={'/launches'} tabIndex={2}>
            Launches
          </Button>
        </Content>
      </PageContentWrapper>
    </Page>
  )
}

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const Button = styled(RouterLink)<LinkProps<null>>`
  width: 40%;
  height: 176px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.04);

  cursor: pointer;
  font-family: Avenir-Roman, sans-serif;
  font-size: 34px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${colors.clementine};

  &:visited {
    color: ${colors.clementine};
    text-decoration: none;
  }

  &:hover,
  &:active {
    color: ${colors.grenadier};
    text-decoration: underline;
  }
`
