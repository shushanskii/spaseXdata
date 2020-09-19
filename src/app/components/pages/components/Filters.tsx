import React, { useCallback, useContext, useEffect } from 'react'
import styled from 'styled-components'
import hexToRgba from 'hex-to-rgba'
import { colors } from 'app/constants'
import { InputText } from 'components/inputText/InputText'
import { LaunchFiltersContext } from 'components/pages/Launches'
import { useDispatch } from 'react-redux'
import { DispatchType } from 'app/types'
import {
  LaunchesActionTypes,
  LaunchesActionUpdate,
  LaunchesResetState,
} from 'actions/launches'
import { debounce } from 'lodash'

export function Filters() {
  const { filters, setFilters } = useContext(LaunchFiltersContext)
  const resetAction = useDispatch<DispatchType<LaunchesResetState>>()
  const loadAction = useDispatch<DispatchType<LaunchesActionUpdate>>()

  const debounceApply = useCallback(
    debounce((value) => setFilters({ manufacturer: value }), 1000),
    []
  )
  const handlerManufacturerChange = (value) => debounceApply(value)

  useEffect(() => {
    if (filters) {
      resetAction({ type: LaunchesActionTypes.RESET_STATE })
      loadAction({
        type: LaunchesActionTypes.UPDATE,
        payload: { filters, page: 0 },
      })
    }
  }, [filters])

  return (
    <Wrapper>
      <Input
        placeholder={'Manufacturer'}
        onChange={handlerManufacturerChange}
      />
      <Input placeholder={'Launch Date UTC'} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  border-radius: 6px;
  background-color: ${hexToRgba(colors.white, 0.04)};
  padding: 50px 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Input = styled(InputText)`
  width: 45%;
`
