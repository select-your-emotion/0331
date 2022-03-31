import React, { useContext, useRef, useState } from 'react'
import _uniqueId from 'lodash/uniqueId'
import AddsongForm from './AddsongForm';

const BASE_URL = 'http://localhost:8090/api/v1/songinfo';


// ADD SONG TO PLAYLIST~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ADD ADD ADD ADD ADD ADD ADD ADD ADD
const Song = (props) => { 

  // console.log(props.Albums.name);
  // console.log(props.Albums.id);
  // console.log(props.Albums.album.images[0].url);
  // console.log(props.Albums.artists[0].name);

  const [id] = useState(_uniqueId('prefix-'));
  const [didSubmit, setDidSubmit] = useState(false);
  
  const submitHandler = async (event) => {
    // event.preventDefault();

    console.log(props.Albums);
    
      console.log('submitHandler called');
  
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
            // songInfoNumber : props.Albums.id,
            songInfoName : props.Albums.name,
            songInfoSinger : props.Albums.artists[0].name,
            songInfoAlbumUrl :props.Albums.album.images[0].url,
            songInfoAlbum: "앨범이름",
            playListName: "Second",
          })
        }
      );
      setDidSubmit(true);  
    
  }


  // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


  return (
    <AddsongForm onOrder={submitHandler}/>
  )
}

export default Song