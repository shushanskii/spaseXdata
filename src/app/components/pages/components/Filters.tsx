import React, { useCallback, useContext, useEffect } from 'react'
import styled from 'styled-components'
import hexToRgba from 'hex-to-rgba'
import { colors } from 'app/constants'
import { InputText } from 'components/inputText/InputText'
import { LaunchFiltersContext } from 'components/pages/Launches'
import { debounce } from 'lodash'
import { DateSelector } from 'components/dateSelector/DateSelector'
import { OnDatesChangeProps } from '@datepicker-react/hooks/lib/useDatepicker/useDatepicker'
import { formatDate } from 'utilities/formatDate'

export function Filters() {
  const { setFilters } = useContext(LaunchFiltersContext)

  const setManufacturer = useCallback(
    debounce((value) => setFilters({ manufacturer: value }), 700),
    []
  )
  const handlerManufacturerChange = (value) => setManufacturer(value)

  const handlerDatesChange = ({ startDate, endDate }: OnDatesChangeProps) => {
    if (startDate && endDate) {
      setFilters({
        start: formatDate(startDate),
        end: formatDate(endDate),
      })
    }
  }

  const handlerOrbitChange = (value) => {
    console.log('handlerOrbitChange', value)
  }

  return (
    <Container>
      <DateSelector onDatesChange={handlerDatesChange} />
      <Wrapper>
        <Input
          placeholder={'Manufacturer'}
          onChange={handlerManufacturerChange}
        />
        <Select
          placeholder={'Orbit'}
          onSelect={handlerOrbitChange}
          options={[
            { key: 'A', value: 'A' },
            { key: 'B', value: 'B' },
          ]}
        />
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 250px;
  border-radius: 6px;
  background-color: ${hexToRgba(colors.white, 0.04)};
  padding: 50px 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Input = styled(InputText)`
  width: 45%;
  margin-left: 10px;
`

const Select = styled(InputText)`
  width: 45%;
  margin-right: 10px;
`
