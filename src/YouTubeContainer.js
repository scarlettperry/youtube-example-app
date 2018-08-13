import React, { Component } from 'react';

import VideoDisplay from './VideoDisplay';
import VideoContainer from './VideoContainer';
import SearchBar from './SearchBar';

import keys from './keys';
// import videos from './data.js'

class YouTubeContainer extends Component {

  // constructor () {
  //   super()
  //
  //   this.state = {
  //     videos: data
  //   }
  // }

  state = {
    videos: [],
    currentVideo: {}
  }


  componentDidMount () {
    this.onSearchClick('')
  }


  onSearchClick = (term) => {
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keys.API_KEY}&q=${term}&type=video`
    fetch(searchUrl)
    .then(resp => resp.json())
    .then(json => {
      this.setState({
          videos: json.items,
          currentVideo: json.items[0]
        })
    })
  }


  onTileClick = (video) => {
    console.log(video)
    this.setState({
      currentVideo: video
    })
  }


  render() {
    const { currentVideo, videos } = this.state
    return (
      <div className="ui grid container">
        <SearchBar handleSearch={this.onSearchClick} />
        <VideoDisplay currentVideo={currentVideo} />
        <VideoContainer videos={videos} handleTileClick={this.onTileClick}/>
      </div>
    );
  }

}


export default YouTubeContainer;
