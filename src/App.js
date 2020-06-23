import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const YT_API = 'AIzaSyDpcSjSyVSO3rMvvJt3lEQ7Jk8tMHeqcOQ';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.searchYoutube('');
  }

  videoSearch = _.debounce((term) => { this.searchYoutube(term) }, 300);

  searchYoutube(term) {
    YTSearch({ key: YT_API, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
        <div className="App">
          <NavBar siteTitle='Logo de la librairie YT' />
          <div className="container">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <SearchBar onChange={(searchTerm) => {this.videoSearch(searchTerm)}} />
            </div>
            <hr/>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                <VideoPlayer video={this.state.selectedVideo} />
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <h2>Related Videos</h2>
                <hr/>
                <VideoList
                    onVideoSelect={(selectedVideo) => {this.setState({selectedVideo})}}
                    videos={this.state.videos}
                />
              </div>
            </div>
            <hr/>
            <Footer/>
          </div>

        </div>
    );
  }

}

export default App;
