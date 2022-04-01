import React, { useEffect, useState, useRef }  from 'react'
import PlayListShow2 from './PlayListShow2';
import classes from "./MainPage.module.css"
import Input from './Input'

const BASE_URL = 'http://localhost:8090/api/v1/playlists';
const BASE_URL2 = 'http://localhost:8090/api/v1/playlists/addplaylist';


const MainPage = () => {
  const [playlists, setPlayLists] = useState([]);

  useEffect(() => {

    const fetchBooks = async () => {
      const response = await fetch(BASE_URL)
      const responseData =  await response.json();
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

  const nameInputRef = useRef();

  const submitHandler = async (event) => {
    
      const enteredName = nameInputRef.current.value;

        await fetch(BASE_URL2,
          {
            method: 'POST',
            headers: {
              'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
              playListName : enteredName,
            })
          }
        );
    }
  



  return (
    <>
    <div className="input__total">

      <Input ref={nameInputRef} label="Write playlist name" input={{ id: "name", type: "text" }}></Input>
      <button className="create__button"  onClick={submitHandler}
      >create</button>
    </div>
    <div className={classes.playlists}>{PlayLists}</div>
  </>
    )
}

export default MainPage