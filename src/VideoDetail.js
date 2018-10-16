import React from 'react';



const VideoDetail = ({ currentVideo }) => {

  if(currentVideo !== null){
    const embedUrl = `https://www.youtube.com/embed/${currentVideo.id.videoId}`


    return (
      <div className="twelve wide column">
        <div className="ui raised segments">
          <div className="ui segment">
            <div className="ui embed">
            {/* Change the iframe source */}
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
    );
  } else {
    return (<div>SEARCH YOU DUMMY</div>)
  }
};

export default VideoDetail;
