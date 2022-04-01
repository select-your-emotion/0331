import React from 'react'
import classes from './PlayListShow2.module.css';
import Modal from './Modal'

const BASE_URL = 'http://localhost:8090/api/v1/playlists';

const PlayListShow2 = (props) => {

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
  }
  const [modal, setModal] = React.useState(false);

  const modalOnOff = () => {
      setModal(!modal);
  };


  return (
    <>

    <div className={classes.songTotal}>
      <img className={classes.thumbnail} src={props.playListThumbnail} alt="" />
      <div onClick={modalOnOff} className={classes.songName}>{props.playListName}</div>
      {modal && <Modal info={props} />}

      <button className="delete__button" onClick ={submitHandler}>Delete</button>
    </div>
    </>

  )
}



export default PlayListShow2