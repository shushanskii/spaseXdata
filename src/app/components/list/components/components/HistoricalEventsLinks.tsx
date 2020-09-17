import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWikipediaW, faRedditAlien } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { colors } from 'app/constants'

enum LinksResources {
  REDDIT = 'reddit',
  ARTICLE = 'article',
  WIKIPEDIA = 'wikipedia',
}

interface Props {
  links: {
    [key in LinksResources]: string
  }
}

export function HistoricalEventsLinks({ links }: Props) {
  return (
    <Container>
      {Object.entries(links)
        .filter(([, link]) => !!link)
        .map(([resources, link]) => (
          <Link
            resource={resources as LinksResources}
            link={link}
            key={resources}
          />
        ))}
    </Container>
  )
}

interface LinkProps {
  resource: LinksResources
  link: string
}

function Link({ resource, link }: LinkProps) {
  switch (resource) {
    case LinksResources.ARTICLE:
      return (
        <LinkElement href={link} target={'_blank'}>
          <Icon icon={faFile} />
        </LinkElement>
      )
    case LinksResources.REDDIT:
      return (
        <LinkElement href={link} target={'_blank'}>
          <Icon icon={faRedditAlien} />
        </LinkElement>
      )
    case LinksResources.WIKIPEDIA:
      return (
        <LinkElement href={link} target={'_blank'}>
          <Icon icon={faWikipediaW} />
        </LinkElement>
      )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1px;
  margin-left: 26px;
`

const Icon = styled(FontAwesomeIcon)`
  margin: 0 10px;
  font-size: 18px;
`

const LinkElement = styled.a`
    display: inline-block;
    cursor: pointer;
    font-family: Avenir-Roman, sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-decoration: none;
    color: ${colors.clementine};
    color: ${colors.osloGray};
    &:visited {
        color: ${colors.osloGray};
        text-decoration: none;
    }

    &:hover,
    &:active {
        color: ${colors.white};
        text-decoration: underline;
`
