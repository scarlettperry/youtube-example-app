import React from 'react'

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className="twelve wide column">
      <div className="ui raised segments">
        <div className="ui segment">
          <div className="ui embed">
            <iframe src={url} frameBorder="0"></iframe>
          </div>
        </div>
        <div className="ui segment">
          <h4>{video.snippet.title}</h4>
        </div>
        <div className="ui secondary segment">
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoDetail
