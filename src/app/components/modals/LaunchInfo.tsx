import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'
import { colors } from 'app/constants'
import { Window } from 'components/modals/components/window/Window'
import { Caption } from 'components/modals/components/window/components/Caption'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType } from 'app/types'
import { LaunchActionFetch, LaunchActionTypes } from 'actions/launch'
import { State } from 'store/rootReducer'
import { State as LaunchState } from 'store/reducers/launch'
import { LaunchInfoContext } from 'components/contexts/LaunchInfoContext'
import { Spinner } from 'components/spinner/Spinner'
import { State as ErrorState } from 'store/reducers/error'

export function LaunchInfo() {
  const { error } = useSelector<State, ErrorState>((store) => store.error)
  const { flightNumber, showLaunchInfo } = useContext(LaunchInfoContext)
  const { loading, data } = useSelector<State, LaunchState>(
    (store) => store.launch
  )
  const fetchAction = useDispatch<DispatchType<LaunchActionFetch>>()
  const handlerClose = () => showLaunchInfo(undefined)

  const { mission_name, youtube_id, mission_patch_small, details } = data || {}

  useEffect(() => {
    if (!isNaN(flightNumber)) {
      fetchAction({
        type: LaunchActionTypes.FETCH,
        payload: { flight_number: flightNumber },
      })
    }
  }, [flightNumber])

  return (
    <Window visible={!isNaN(flightNumber) && !error} onClose={handlerClose}>
      {loading && (
        <Spinner color={colors.clementine} top={'5px'} left={'5px'} />
      )}
      <Caption>
        {mission_name ? mission_name : 'Loading launch info...'}
      </Caption>
      {data && (
        <Content>
          <Wrapper>
            {mission_patch_small && <MissionPatch src={mission_patch_small} />}
            {details && <Details>{details}</Details>}
          </Wrapper>
          {youtube_id && (
            <VideoContainer opts={{ width: '490px' }} videoId={youtube_id} />
          )}
        </Content>
      )}
    </Window>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  font-weight: bold;
  font-size: 32px;
  height: 300px;
  max-height: 300px;
  overflow: auto;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

const Details = styled.div`
  font-size: 20px;
  font-weight: lighter;
  text-align: justify;
`

const MissionPatch = styled.img`
  min-width: 140px;
  width: 140px;
  margin-right: 20px;
`

const VideoContainer = styled(YouTube)`
  margin-top: 50px;
  width: 490px;
`
