import React, { useCallback, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import hexToRgba from 'hex-to-rgba'
import { colors } from 'app/constants'
import { InputText } from 'components/inputText/InputText'
import { LaunchFiltersContext } from 'components/pages/Launches'
import { debounce } from 'lodash'
import { DateSelector } from 'components/dateSelector/DateSelector'
import { OnDatesChangeProps } from '@datepicker-react/hooks/lib/useDatepicker/useDatepicker'
import { formatDate } from 'utilities/formatDate'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType } from 'app/types'
import {
  OrbitRocketsActionFetch,
  OrbitRocketsActionTypes,
} from 'actions/orbitRockets'
import { State } from 'store/rootReducer'
import { State as OrbitRocketsState } from 'store/reducers/orbitRockets'

const DEBOUNCE_INTERVAL = 700

export function Filters() {
  const [orbit, setOrbit] = useState<string>()
  const { loading, data } = useSelector<State, OrbitRocketsState>(
    (store) => store.orbitRocket
  )

  const { setFilters } = useContext(LaunchFiltersContext)

  const setManufacturer = useCallback(
    debounce((value) => setFilters({ manufacturer: value }), DEBOUNCE_INTERVAL),
    []
  )
  const loadOrbitRockets = useDispatch<DispatchType<OrbitRocketsActionFetch>>()

  const handlerManufacturerChange = (value) => setManufacturer(value)

  const handlerDatesChange = ({ startDate, endDate }: OnDatesChangeProps) => {
    if (startDate && endDate) {
      setFilters({
        start: formatDate(startDate),
        end: formatDate(endDate),
      })
    }
  }

  const handlerOrbitSelect = (value: string) => setOrbit(value)

  const handlerRocketSelect = (rocket_name: string) =>
    setFilters({ rocket_name })

  useEffect(() => {
    loadOrbitRockets({ type: OrbitRocketsActionTypes.FETCH })
  }, [])

  return (
    <Container>
      <DateSelector onDatesChange={handlerDatesChange} />
      <Input
        placeholder={'Manufacturer'}
        onChange={handlerManufacturerChange}
      />
      <Select
        disabled={loading}
        placeholder={'Possible Orbit'}
        onSelect={handlerOrbitSelect}
        options={Object.keys(data).map((key) => ({ key, value: key }))}
      />
      {orbit && (
        <Select
          placeholder={'Rocket'}
          onSelect={handlerRocketSelect}
          options={data[orbit].map((value) => ({ key: value, value }))}
        />
      )}
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
  width: 100%;
`

const Select = styled(InputText)`
  width: 100%;
`
