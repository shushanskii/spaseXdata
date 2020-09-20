import React, { useState } from 'react'
import { DateRangeInput } from '@datepicker-react/styled'
import { ThemeProvider } from 'styled-components'
import { DateSelectorTheme } from 'components/dateSelector/DateSelectorTheme'
import {
  FocusedInput,
  OnDatesChangeProps,
} from '@datepicker-react/hooks/lib/useDatepicker/useDatepicker'

interface State {
  startDate: Date | null
  endDate: Date | null
  focusedInput: FocusedInput | null
}

interface Props {
  onDatesChange?: (data: OnDatesChangeProps) => void
}

const initialState: State = {
  startDate: null,
  endDate: null,
  focusedInput: null,
}

export function DateSelector({ onDatesChange }: Props) {
  const [state, setState] = useState<State>(initialState)

  const handlerDatesChange = (data: OnDatesChangeProps) => {
    setState(data)
    if (onDatesChange) {
      onDatesChange(data)
    }
  }

  const handlerFocusChange = (focusedInput: FocusedInput) => {
    setState((state) => ({ ...state, focusedInput }))
  }

  return (
    <ThemeProvider theme={DateSelectorTheme}>
      <DateRangeInput
        displayFormat={'yyyy-MM-dd'}
        numberOfMonths={1}
        showClose={false}
        showResetDates={false}
        showSelectedDates={false}
        showStartDateCalendarIcon={false}
        showEndDateCalendarIcon={false}
        onDatesChange={handlerDatesChange}
        onFocusChange={handlerFocusChange}
        startDate={state.startDate}
        endDate={state.endDate}
        focusedInput={state.focusedInput}
      />
    </ThemeProvider>
  )
}
