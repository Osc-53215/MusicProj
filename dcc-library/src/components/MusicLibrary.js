import React from 'react';

function MusicLibrary(props) {
    return (

        <div className="container">
            <h1>Title: {props.title}</h1>
            <p>Artist: {props.artist}</p>
            <p>Genre: {props.genre}</p>
            <p> Release Date: {props.releaseDate}</p>
        </div>
    );
}




export default MusicLibrary;