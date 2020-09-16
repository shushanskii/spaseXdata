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
    <Container>
      {data?.map((item, index) => (
        <Item id={index} key={index} />
      ))}
      <Spinner ref={spinner}>SPINNER...</Spinner>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid red;
  overflow: auto;
`

const Spinner = styled.div``
