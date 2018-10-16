import React from 'react'

const VideoListItem = (props) => {

  return (
    <div className="item"  onClick={(event) => {props.handleClick(event, props.video) }}>
      <div className="ui small image">
        {/* Change the image source */}
        <img src={props.video.snippet.thumbnails.default.url} />
      </div>
      <div className="content">
        {props.video.snippet.description}
      </div>
    </div>
  )
}

export default VideoListItem


// const imageUrl = video.snippet.thumbnails.default.url
