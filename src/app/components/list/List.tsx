import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import hexToRgba from 'hex-to-rgba'
import { Error } from 'components/modals/Error.tsx'
import { colors } from 'app/constants'

export interface Props {
  loadData: (page: number) => void
  resetError: () => void
  store: {
    loading: boolean
    error?: string
    data?: any[]
  }
  render: (props: { item: any; key: string | number }) => void
}

export function List({ loadData, resetError, store, render }: Props) {
  const { data, error, loading } = store

  const [page, setPage] = useState(0)

  const marker = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(handlerObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    })

    if (marker.current) {
      observer.observe(marker.current)
    }
  }, [])

  const handlerObserver = ([target]) => {
    if (target.isIntersecting) {
      setPage((page) => page + 1)
    }
  }

  useEffect(() => {
    loadData(page)
  }, [page])

  const handlerReset = () => {
    resetError()
    loadData(page)
  }

  return (
    <Wrapper>
      {loading && <LoadingIndicator />}
      <Error error={error} onClose={handlerReset} />
      <Container>
        {data?.map((item, index) => render({ item, key: index }))}
        <div ref={marker}>&nbsp;</div>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 6px;
  background-color: ${hexToRgba(colors.white, 0.04)};
  padding: 50px 40px;
  position: relative;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`

const LoadingIndicator = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 5px;
  left: 5px;
  display: inline-block;

  &:after {
    content: ' ';
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 3px solid;
    border-color: ${colors.osloGray} transparent ${colors.osloGray} transparent;
    animation: ring 1.2s linear infinite;
  }
  @keyframes ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
