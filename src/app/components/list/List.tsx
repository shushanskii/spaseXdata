import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import hexToRgba from 'hex-to-rgba'
import { colors } from 'app/constants'
import { usePrevious } from 'utilities/usePrevious'

export interface Props<T> {
  onScrollEnd: () => void
  onError?: (error: string) => void
  loading: boolean
  error?: string
  data?: any[]
  itemsRender: (props: { item: T; key: string | number }) => void
}

export function List<T>({
  onError,
  onScrollEnd,
  error,
  data,
  loading,
  itemsRender,
}: Props<T>) {
  const prevData = usePrevious(data)
  const marker = useRef(null)
  const handlerObserver = ([target]) => {
    if (target.isIntersecting) {
      onScrollEnd()
    }
  }
  const observer = new IntersectionObserver(handlerObserver, {
    root: null,
    rootMargin: '20px',
    threshold: 1.0,
  })

  useEffect(() => {
    if ((prevData || []).length === 0 && data.length > 0 && marker.current) {
      observer.observe(marker.current)
    }
  }, [data])

  useEffect(() => {
    if (onError && error) {
      onError(error)
    }
  }, [error])

  return (
    <Wrapper>
      {loading && <LoadingIndicator />}
      <Container>
        {data?.map((item, index) => itemsRender({ item, key: index }))}
        {data.length ? <div ref={marker}>&nbsp;</div> : null}
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
