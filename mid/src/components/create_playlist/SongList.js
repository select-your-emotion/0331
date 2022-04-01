import React from 'react'
import classes from './SongList.module.css';

const SongList = (props) => {

  const BASE_URL = 'http://localhost:8090/api/v1/songinfo';

  const submitHandler = async (event) => {
  
      await fetch(BASE_URL,
        {
          method: 'DELETE',
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify({
            songInfoName : props.songInfoName,
          })
        }
      );
  }

  return (
    <>

    <div className={classes.songTotal}>
      <img className={classes.songimage} src={props.songInfoAlbumUrl} alt="" />
      <div className={classes.songName}>{props.songInfoName}</div>
      <div className={classes.songSinger}>{props.songInfoSinger}</div>
      <button className="playlist__delete__button" onClick ={submitHandler}>x</button>
    </div>
    </>

  )
}

export default SongList