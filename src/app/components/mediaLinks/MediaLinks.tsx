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

export enum MediaLinksTheme {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

interface Props {
  theme?: MediaLinksTheme
  className?: string
  someKey: string
  links: {
    [key in LinksResources]?: string
  }
}

export function MediaLinks({ links, someKey, className, theme }: Props) {
  return (
    <Container className={className}>
      {Object.entries(links)
        .filter(([, link]) => !!link)
        .map(([resources, link]) => (
          <Link
            theme={theme}
            resource={resources as LinksResources}
            link={link}
            key={`${someKey}.${resources}`}
          />
        ))}
    </Container>
  )
}

interface LinkProps {
  theme?: MediaLinksTheme
  resource: LinksResources
  link: string
}

const Icons = {
  [LinksResources.ARTICLE]: faFile,
  [LinksResources.REDDIT]: faRedditAlien,
  [LinksResources.WIKIPEDIA]: faWikipediaW,
}

function Link({ resource, link, theme }: LinkProps) {
  return (
    <LinkElement theme={theme} href={link} target={'_blank'}>
      <Icon icon={Icons[resource]} />
    </LinkElement>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Icon = styled(FontAwesomeIcon)`
  margin: 0 10px;
  font-size: 18px;
`

const LinkElement = styled.a<{ theme?: MediaLinksTheme }>`
    display: inline-block;
    cursor: pointer;
    font-family: Avenir-Roman, sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-decoration: none;
    color: ${({ theme }) =>
      theme === MediaLinksTheme.DARK ? colors.black : colors.osloGray};
    &:visited {
        color: ${({ theme }) =>
          theme === MediaLinksTheme.DARK ? colors.black : colors.osloGray};
        text-decoration: none;
    }

    &:hover,
    &:active {
        color: ${({ theme }) =>
          theme === MediaLinksTheme.DARK ? colors.osloGray : colors.white};
        text-decoration: underline;
`
