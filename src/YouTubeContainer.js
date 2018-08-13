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
  // }c

  state = {
    videos: [],
    currentVideo: {},
    term: ''
  }


  componentDidMount () {
    this.fetchVideos()
  }

  onSearchChange = (e) => {
    this.setState({
      term: e.target.value
    }, this.fetchVideos )
  }

  fetchVideos = () => {
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keys.API_KEY}&q=${this.state.term}&type=video`
     fetch(searchUrl)
     .then(resp => resp.json())
     .then(json => {
       this.setState({
           videos: json.items,
           currentVideo: json.items[0]
         })
     })
  }

  // onSearchClick = (term) => {
  //   const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keys.API_KEY}&q=${term}&type=video`
  //   fetch(searchUrl)
  //   .then(resp => resp.json())
  //   .then(json => {
  //     this.setState({
  //         videos: json.items,
  //         currentVideo: json.items[0]
  //       })
  //   })
  // }




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
        <SearchBar value={this.state.term} handleChange={this.onSearchChange} />
        <VideoDisplay currentVideo={currentVideo} />
        <VideoContainer videos={videos} handleTileClick={this.onTileClick}/>
      </div>
    );
  }

}


export default YouTubeContainer;
