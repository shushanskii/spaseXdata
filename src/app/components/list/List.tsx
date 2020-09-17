import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Item } from 'components/list/components/Item'

interface Props {
  loadData: (page: number) => void
  store: {
    loading: boolean
    error?: string
    data?: any[]
  }
}

export function List({ loadData, store }: Props) {
  const { data, error, loading } = store

  const [page, setPage] = useState(0)

  const spinner = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(handlerObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    })

    if (spinner.current) {
      observer.observe(spinner.current)
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

  return (
    <Wrapper>
      <Container>
        {data?.map((item, index) => (
          <Item launch={item} key={index} />
        ))}
        <Spinner ref={spinner}>SPINNER...</Spinner>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.04);
  padding: 40px;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`

const Spinner = styled.div``
