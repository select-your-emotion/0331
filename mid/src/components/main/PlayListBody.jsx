import React, { useEffect, useState }  from 'react'
import SongList from './SongList';
import classes from "./PlayListBody.module.css"
import PlayListMain from './PlayListMain';

// SHOW PLAYLIST~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SHOW PLAYLIST SHOW PLAYLIST SHOW PLAYLIST SHOW PLAYLIST
const BASE_URL = 'http://localhost:8090/api/v1/playlists/showsonglist';


const PlayListBody = (props) => {

  const [songs, setSong] = useState([]);

  useEffect(() => {
    console.log('useEffect 호출');

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

      // console.log(response.ok);
      const responseData =  await response.json();

      // console.log(responseData);

      const songData = [];
      
      for (const key in responseData) {
        // console.log(responseData[key]);
        songData.push({
          id: key,
          songInfoName: responseData[key].songInfoName, // 노래이름
          songInfoSinger: responseData[key].songInfoSinger,  // 가수
          songInfoAlbumUrl: responseData[key].songInfoAlbumUrl,  // url
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



  // console.log(props.songList[0]);

  // const [songs, setSong] = useState([]);

  // useEffect(() => {
  //   console.log('호출');
  //   const fetchBooks = async () => {
  //     const response = await fetch(BASE_URL,
  //       {
  //         method: 'POST',
  //           headers: {
  //             'Content-Type' : 'application/json',
  //           },
  //           body: JSON.stringify({
  //             playListName: "Second",
  //           })
  //       });

  //     console.log(response.ok);
  //     const responseData =  await response.json();

  //     console.log(responseData);

  //     const songData = [];
      
  //     for (const key in responseData) {
  //       console.log(responseData[key]);

  //       songData.push({
  //         id: key,
  //         songInfoName: responseData[key].songInfoName, // 노래이름
  //         songInfoSinger: responseData[key].songInfoSinger,  // 가수
  //         songInfoAlbumUrl: responseData[key].songInfoAlbumUrl,  // url
  //         playListName : responseData[key].playList[1]
  //       });
  //     }

  //     setSong(songData);
  //   }



  //   fetchBooks().catch(error => {
  //     console.log(error);
  //   })
  // }, []);

  // const songList = songs.map((song) => (
  //   <SongList
  //     key={song.id}
  //     id={song.id}
  //     songInfoName={song.songInfoName}
  //     songInfoSinger={song.songInfoSinger}
  //     songInfoAlbumUrl={song.songInfoAlbumUrl}
  //   />
  // ));


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