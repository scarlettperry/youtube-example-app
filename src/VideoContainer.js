import React from 'react'
import VideoTile from './VideoTile'

const VideoContainer = (props) => {

  const { videos, handleTileClick } = props
  const videoTiles = videos.map((video) => {
    return <VideoTile key={video.id.videoId} video={video} handleTileClick={handleTileClick} />
  })

  return (
    <div className="four wide column">
      <div className="ui relaxed items">
        {videoTiles}
      </div>
    </div>
  )

}

export default VideoContainer
