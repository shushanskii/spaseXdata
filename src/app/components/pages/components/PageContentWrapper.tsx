import React from 'react'
import styled from 'styled-components'
import { MEDIA, WIDTHS } from 'app/constants'

export const PageContentWrapper = styled.div`
  height: 100%;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-grow: 1;

  ${MEDIA.greaterThan('desktop')`
        width: ${WIDTHS.DESKTOP};
    `}

  ${MEDIA.between('tablet', 'desktop')`
        width: ${WIDTHS.TABLET};
    `}
    
    ${MEDIA.lessThan('tablet')`
        width: ${WIDTHS.MOBILE};
    `}
`
