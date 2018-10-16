import React from 'react'

import VideoListItem from './VideoListItem.js'

// What type of component is this?
// What can it do?
// What can't it do?
const VideoList = (props) => {
  console.log(props)

  const videos = props.videos.map(video => <VideoListItem handleClick={props.handleClick} video={video} key={video.id.videoId} />)
  return (
    <div className="four wide column">
      <div className="ui relaxed items">
      {videos}
      </div>
    </div>
  )
}

export default VideoList
