import axios from 'axios';
import React, {Component} from 'react';
import MusicLibrary from './components/MusicLibrary';
import Search from './components/Search';



class App extends Component {
  
  state = {
    music: []
  }

  componentDidMount(){
    axios.get('http://www.devcodecampmusiclibrary.com/api/music').then(res => {
      this.setState({music: res.data})
    })
}

  render(){
    return (
      <div>
        <Search/>
        {this.state.music.map(song =>{
          return <MusicLibrary key = {song.id} title = {song.title} artist = {song.artist} genre = {song.genre} releaseDate = {song.releaseDate} />
        })}  
      </div>
    );
  }
}


export default App;
