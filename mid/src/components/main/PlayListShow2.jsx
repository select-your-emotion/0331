import React, {useState} from 'react'
import classes from './PlayListShow2.module.css';

const BASE_URL = 'http://localhost:8090/api/v1/playlists';

const PlayListShow2 = (props) => {

  const [didSubmit, setDidSubmit] = useState(false);

  const submitHandler = async (event) => {
  
      await fetch(BASE_URL,
        {
          method: 'DELETE',
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify({
            playListName : props.playListName,
          })
        }
      );
      setDidSubmit(true);  
  }

  return (
    <>

    <div className={classes.songTotal}>
      <img className={classes.thumbnail} src={props.playListThumbnail} alt="" />

{/* ~>~!~!?~!??~!!?~?   ... ?? . . . . >>??*/}
      <div className={classes.songName}>{props.playListName}</div>
      
      <button onClick ={submitHandler}>Delete</button>
    </div>
    </>

  )`
}



export default PlayListShow2