import React, { useContext, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
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
import { MediaLinks, MediaLinksTheme } from 'components/mediaLinks/MediaLinks'
import { fadeIn } from 'react-animations'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'

export function LaunchInfo() {
  const { error } = useSelector<State, ErrorState>((store) => store.error)
  const { flightNumber, showLaunchInfo } = useContext(LaunchInfoContext)
  const { loading, data } = useSelector<State, LaunchState>(
    (store) => store.launch
  )
  const fetchAction = useDispatch<DispatchType<LaunchActionFetch>>()
  const handlerClose = () => showLaunchInfo(undefined)

  const { mission_name, youtube_id, mission_patch_small, details, links } =
    data || {}

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
          <MediaWrapper>
            <MediaWrapperCaption>Media:</MediaWrapperCaption>
            <Media
              theme={MediaLinksTheme.DARK}
              links={links}
              someKey={mission_name}
            />
            <MediaWrapperCaption>Share:</MediaWrapperCaption>
            <ShareIcon icon={faShare} />
          </MediaWrapper>
          <ContentWrapper>
            {mission_patch_small && <MissionPatch src={mission_patch_small} />}
            {details && <Details>{details}</Details>}
          </ContentWrapper>
          {youtube_id && (
            <VideoContainer opts={{ width: '490px' }} videoId={youtube_id} />
          )}
        </Content>
      )}
    </Window>
  )
}

const Content = styled.div`
  animation: 700ms ${keyframes(fadeIn)};
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

const ContentWrapper = styled.div`
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
const MediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

const MediaWrapperCaption = styled.div`
  font-size: 15px;
  font-style: italic;
  font-weight: lighter;
  cursor: default;
`

const Media = styled(MediaLinks)`
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const ShareIcon = styled(FontAwesomeIcon)`
  margin: 0 10px;
  font-size: 18px;
`
