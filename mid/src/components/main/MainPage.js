import React, { useEffect, useState }  from 'react'
import PlayListShow2 from './PlayListShow2';
import classes from "./MainPage.module.css"
import SongList from './SongList';
import Modalpage from './Modal';

const BASE_URL = 'http://localhost:8090/api/v1/playlists';

const BASE_URL2 = 'http://localhost:8090/api/v1/playlists/showsonglist';


const MainPage = () => {
  const [playlists, setPlayLists] = useState([]);

  // PlayList Picture 출력
  useEffect(() => {
    console.log('호출');

    const fetchBooks = async () => {
      const response = await fetch(BASE_URL)

      const responseData =  await response.json();

      ///console.log(responseData);

      const songData = [];
      
      for (const key in responseData) {
        songData.push({
          id: key,
          playListName : responseData[key].playListName,
          playListThumbnail :  responseData[key].playListThumbnail
        });
      }
      setPlayLists(songData);
      
    }

    fetchBooks().catch(error => {
      console.log(error);
    })

  }, []);


  const PlayLists = playlists.map((playlist) => (
    <PlayListShow2
      key={playlist.id}
      id={playlist.playListNumber}
      playListName={playlist.playListName}
      playListThumbnail={playlist.playListThumbnail}
    />
  )
  );

  const [modal, setModal] = useState(false);

  const modalOnOff = () => {
      setModal(!modal);
  };



  return (
    <>
    <button onClick={modalOnOff}>create</button>
        { modal && <Modalpage />}
        
    <div className={classes.playlists}>{PlayLists}</div>

    
    {/* <div className={classes.total}>

      <div className={classes.info}>
        < div className={classes.albumname}>앨범 이름 </div>
        <div className={classes.singer}>가수</div>
      </div>

      <div className={classes.songList}>{songList}</div>
    </div> */}
  </>
    )
}

export default MainPage