import React from 'react'

const VideoTile = ({ video, handleTileClick }) => {

  return (
    <div className="item" onClick={() => handleTileClick(video)} >
      <div className="ui small image">
        <img alt={video.id.videoId} src={video.snippet.thumbnails.default.url} />
      </div>
      <div className="content">
        {video.snippet.title}
      </div>
    </div>
  )
}

export default VideoTile
