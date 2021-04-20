import React from 'react';

function MusicLibrary({music}) {
    return (
        music.map(song => 
        <div className="container">
            <h1>Title: {song.title}</h1>
            <p> Artist: {song.artist}</p>
            <p> Album: {song.album}</p>
            <p>Genre: {song.genre}</p>
            <p> Release Date: {song.releaseDate}</p>
        </div>
    ));
}




export default MusicLibrary;