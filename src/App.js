import React, { Component } from 'react'
import './App.css';
import {Grid} from "@material-ui/core"
import SearchBar from "./Components/SearchBar"
import VideoDetail from "./Components/VideoDetail"
import VideoList from "./Components/VideoList"

import youtube from "./api/youtube"

export class App extends Component {

  state={
    videos: [],
    selectedVideo: null,
  }

  onVideoSelect=(video)=>{
   this.setState({selectedVideo: video})
  }

  componentDidMount(){
    this.handleSubmit("Money Heist")
  }

  handleSubmit= async (searchTerm)=>{
    const response = await youtube.get("search",{
      params:{
        part: "snippet",
        maxResults: 10,
        key: "AIzaSyAxdvdRGGW8YOxSNmY1qL228I8uadZZG8U",
        q: searchTerm,
      }
    })
    
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[5]
    })
} 

  render() {
    const {selectedVideo, videos} = this.state
    return (
      <Grid justify="center" container spacing={0} >
        <Grid item xs={11}>
          <Grid container spacing={6} style={{padding: "10px"}}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit}/>
            </Grid>
            <div className="col-sm-8">
              <VideoDetail video={selectedVideo}/>
            </div>
            <div className="col-sm-4">
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App
