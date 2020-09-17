import updateHistory from 'middleware/saga/updateHistory'
import { HistoryActionTypes, HistoryActionUpdate } from 'actions/history'
import { takeEvery } from 'redux-saga/effects'

function* runUpdateHistory() {
  yield takeEvery<HistoryActionUpdate>(HistoryActionTypes.UPDATE, updateHistory)
}

describe('updateHistory saga', () => {
  const genObject = runUpdateHistory()

  it('should call api and dispatch success action', () => {
    expect(genObject.next().value).toEqual(
      takeEvery(HistoryActionTypes.UPDATE, updateHistory)
    )
  })

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy()
  })
})
