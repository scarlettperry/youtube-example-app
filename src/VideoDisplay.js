import React from 'react';

const VideoDisplay = ({ currentVideo }) => {

  //GOOD
  console.log(currentVideo)
  // const { videoId } = currentVideo.id
  if (currentVideo.id) {
    const embedUrl = `https://www.youtube.com/embed/${currentVideo.id.videoId}`;

    return (
      // BAD console.log('hello')
      <div className="twelve wide column">
        <div className="ui raised segments">
          <div className="ui segment">
            <div className="ui embed">
              <iframe src={embedUrl} frameBorder="0" />
            </div>
          </div>
          <div className="ui segment">
            <h4>{currentVideo.snippet.title}</h4>
          </div>
          <div className="ui secondary segment">
            <p>{currentVideo.snippet.description}</p>
          </div>
        </div>
      </div>
    )
  } else {
    return <div> LOADING!!!! </div>
  }
};

export default VideoDisplay;
