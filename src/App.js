import React, { Component } from 'react';

import keys from './keys';

import SearchBar from './SearchBar.js'
import VideoList from './VideoList.js'
import VideoDetail from './VideoDetail.js'


class App extends Component {
  /*state = {
    videos: []
  }*/

  constructor(){
    super()
    this.state = {
      videos: [],
      currentVideo: null
    }
  }

  fetchSomeVids = (foundTerm) => {
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keys.API_KEY}&q=${foundTerm}&type=video`
    fetch(searchUrl)
    .then(res => res.json())
    .then(json => {
      this.setState({
        videos: json.items,
        currentVideo: json.items[0]
      }, () => console.log('This is the state', this.state))
    })
  }

  // We use this is to tell our app what to do when it is mounted
  componentDidMount() {
    this.fetchSomeVids('corgi')
  }

  handleClick = (event, video) => {
    const newVideo = {...video}
    this.setState({
      currentVideo: newVideo
    })
  }


  render() {
    return (
      <div className="ui grid container">
        <SearchBar fetchSomeVids={this.fetchSomeVids}/>
        <VideoDetail currentVideo={this.state.currentVideo}/>
        <VideoList handleClick={this.handleClick} videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
