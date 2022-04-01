import React, { useEffect, useState }  from 'react'
import SongList from './SongList';
import classes from "./PlayListBody.module.css"

const BASE_URL = 'http://localhost:8090/api/v1/playlists/showsonglist';


const PlayListBody = (props) => {

  const [songs, setSong] = useState([]);

  useEffect(() => {

    const fetchBooks = async () => {
      const response = await fetch(BASE_URL,
        {
          method: 'POST',
            headers: {
              'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
              playListName: "Second",
            })
        });

      const responseData =  await response.json();
      const songData = [];
      
      for (const key in responseData) {
        songData.push({
          id: key,
          songInfoName: responseData[key].songInfoName, 
          songInfoSinger: responseData[key].songInfoSinger,  
          songInfoAlbumUrl: responseData[key].songInfoAlbumUrl,  
          playListName : responseData[key].playList.playListName
        });
      }
        setSong(songData);
      
    }

    fetchBooks().catch(error => {
      console.log(error);
    })

  }, []);

  const songList = songs.map((song) => (
    <SongList
      key={song.id}
      id={song.id}
      songInfoName={song.songInfoName}
      songInfoSinger={song.songInfoSinger}
      songInfoAlbumUrl={song.songInfoAlbumUrl}
      playListName = {song.playListName}
    />
  )
  
  );

  return (
    <>
      <div className={classes.total}>

        <div className={classes.info}>
          < div className={classes.albumname}>앨범 이름 </div>
          <div className={classes.singer}>가수</div>
        </div>

        <div className={classes.songList}>{songList}</div>
      </div>
    </>
    )
}

export default PlayListBody