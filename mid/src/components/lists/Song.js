import React from 'react'
import AddsongForm from './AddsongForm';

const BASE_URL = 'http://localhost:8090/api/v1/songinfo';

const Song = (props) => { 

  const submitHandler = async (event) => {

    console.log(props.Albums);
    
      console.log(JSON.stringify({
        songInfoNumber : props.Albums.id,
        songInfoName : props.Albums.name,
        songInfoSinger : props.Albums.artists[0].name,
        songInfoAlbum :props.Albums.album.images[0].url,
      }));
  
  
      await fetch(BASE_URL,
        {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify({
            songInfoName : props.Albums.name,
            songInfoSinger : props.Albums.artists[0].name,
            songInfoAlbumUrl :props.Albums.album.images[0].url,
            songInfoAlbum: props.Albums.album.name,
            playListName: "Second",
          })
        }
      );
  }

  return (
    <AddsongForm onOrder={submitHandler}/>
  )
}

export default Song