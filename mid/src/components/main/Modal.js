import React, {useRef} from 'react'
import Modal from 'react-modal'
import Input2 from './Input2'
import classes from './Modal.module.css'

const BASE_URL = 'http://localhost:8090/api/v1/playlists';


const Modalpage = (props) => {

  console.log(props.info)

  const nameInputRef = useRef();
  
    const [modal, setModal] = React.useState(true);

    const submitHandler = async (event) => {
    
      const enteredName = nameInputRef.current.value;

        await fetch(`${BASE_URL}?currentName=${props.info.playListName}&toChangeName=${enteredName}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type' : 'application/json',
            }
          }
        );
        
        submitHandler().catch(error => {
          console.log(error);
        })
        
    }
  

    const modalOff = () => {
        setModal(false);
    };
    
  return (
    <Modal 
        className={classes.modaldesign}
        isOpen={modal}
        ariaHideApp={false}
        onRequestClose={modalOff}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.3)'
        }}}
      >
    <div className={classes.modalTotal}>
      <img 
      className={classes.thumbnail}
      src={props.info.playListThumbnail}
      alt=""/>
        <div className={classes.modalinfo}>
              
          <h2>Enter New Playlist Name</h2>
          <div className={classes.modaltext}>
            <Input2 ref={nameInputRef} label="New name :" input={{ id: "name", type: "text" }}></Input2>
            <button className={classes.modalbutton} onClick ={submitHandler} type="submit" >Click</button>
          </div>
        </div>

    </div>

      </Modal>
  )
}

export default Modalpage