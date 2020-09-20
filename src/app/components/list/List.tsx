import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import hexToRgba from 'hex-to-rgba'
import { colors } from 'app/constants'
import { usePrevious } from 'utilities/usePrevious'
import { Spinner } from 'components/spinner/Spinner'

export interface Props<T> {
  onScrollEnd: () => void
  loading: boolean
  data?: any[]
  itemsRender: (props: { item: T; key: string | number }) => void
}

export function List<T>({ onScrollEnd, data, loading, itemsRender }: Props<T>) {
  const prevData = usePrevious(data)
  const marker = useRef(null)
  const handlerObserver = ([target]) => {
    if (
      target.isIntersecting &&
      wrapper.current.clientHeight < container.current.scrollHeight
    ) {
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

  const wrapper = useRef(null)
  const container = useRef(null)

  return (
    <Wrapper ref={wrapper}>
      {loading && <Spinner color={colors.osloGray} top={'5px'} left={'5px'} />}
      <Container ref={container}>
        {data?.map((item, index) => itemsRender({ item, key: index }))}
        {data.length ? <div ref={marker}>&nbsp;</div> : null}
        {!data.length && !loading && (
          <Message>Oops... We found nothing</Message>
        )}
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

const Message = styled.div`
  position: absolute;
  color: ${colors.clementine};
  font-size: 32px;
  cursor: default;
`
