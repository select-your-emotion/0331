import React, { useEffect, useState, useRef }  from 'react'
import PlayListShow2 from './PlayListShow2';
import classes from "./MainPage.module.css"
import Input from './Input'

const BASE_URL = 'http://localhost:8090/api/v1/playlists';
const BASE_URL2 = 'http://localhost:8090/api/v1/playlists/addplaylist';


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

  // const [modal, setModal] = useState(false);

  // const modalOnOff = () => {
  //     setModal(!modal);
  // };

  const nameInputRef = useRef();
  
    // const [modal, setModal] = React.useState(true);

    const [didSubmit, setDidSubmit] = useState(false);

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
        setDidSubmit(true);  
    }
  



  return (
    <>

    <div className="input__total">

      <Input ref={nameInputRef} label="Write playlist name" input={{ id: "name", type: "text" }}></Input>
      <button className="create__button"  onClick={submitHandler}>create</button>
    </div>
       

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