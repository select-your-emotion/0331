import React, {useState, useRef} from 'react'
import Modal from 'react-modal'
import Input2 from './Input2'
import classes from './Modal.module.css'

const BASE_URL = 'http://localhost:8090/api/v1/playlists';


const Modalpage = (props) => {

  console.log(props.info)

  const nameInputRef = useRef();
  
    const [modal, setModal] = React.useState(true);
    const [didSubmit, setDidSubmit] = useState(false);

    const submitHandler = async (event) => {
    
      const enteredName = nameInputRef.current.value;

        await fetch(BASE_URL,
          {
            method: 'PUT',
            headers: {
              'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
              currentName : props.info.playListName,
              toChangeName : enteredName,
            })
          }
        );
        setDidSubmit(true);  

        submitHandler().catch(error => {
          console.log(error);
        })
        
    }
  

    const modalOff = () => {
        setModal(false);
    };

  return (
    <>
     <Modal
        className={classes.modaldesign}
        isOpen={modal}
        ariaHideApp={false}
        onRequestClose={modalOff}
      >
          <form >
            <img 
            className={classes.thumbnail}
            src={props.info.playListThumbnail}/>
            <h2>Enter New Playlist Name</h2>
            <Input2 ref={nameInputRef} label="New name :" input={{ id: "name", type: "text" }}></Input2>
            <button onClick ={submitHandler} type="submit" >update</button>
          </form>

      </Modal>
    </>
  )
}

export default Modalpage