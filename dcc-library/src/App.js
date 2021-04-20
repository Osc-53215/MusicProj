import axios from 'axios';
import React, {Component} from 'react';
import MusicLibrary from './components/MusicLibrary';
import Search from './components/Search';



class App extends Component {
  
  state = {
    music: [],
    searchFields: ''
  }

  componentDidMount(){
    axios.get('http://www.devcodecampmusiclibrary.com/api/music').then(res => {
      this.setState({music: res.data})
    })
}

  render(){
    const filteredSongs = this.state.music.filter(song => {
      return song.artist.toLowerCase().includes(this.state.searchFields.toLowerCase()) || 
              song.title.toLowerCase().includes(this.state.searchFields.toLowerCase()) ||
              song.album.toLowerCase().includes(this.state.searchFields.toLowerCase()) ||
              song.genre.toLowerCase().includes(this.state.searchFields.toLowerCase()) ||
              song.releaseDate.toLowerCase().includes(this.state.searchFields.toLowerCase()) 
      
    });


    return (
      <div>
        <Search placeholder = 'Begin your search here...' handleChange={(event) => this.setState({searchFields:event.target.value})}/>

        <MusicLibrary music ={filteredSongs} />
  
      </div>
    );
  }
}


export default App;
