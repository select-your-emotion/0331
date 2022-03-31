import React, {useState, useRef} from 'react'
import Modal from 'react-modal'
import Input from './Input'

const BASE_URL = 'http://localhost:8090/api/v1/playlists/addplaylist';


const Modalpage = (props) => {

  const nameInputRef = useRef();
  
    const [modal, setModal] = React.useState(true);

    const [didSubmit, setDidSubmit] = useState(false);

    const submitHandler = async (event) => {
    
      const enteredName = nameInputRef.current.value;

        await fetch(BASE_URL,
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
  

    const modalOff = () => {
        setModal(false);
    };

  return (
    <>
     <Modal
        isOpen={modal}
        ariaHideApp={false}
        onRequestClose={modalOff}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(15, 15, 15, 0.79)",
          },
          content: {
            position: "absolute",
            top: "60px",
            left: "35%",
            width: "30%",
            height: "30%",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
        },
        }}
      >
          <form >
            <h2>create playlist</h2>
            <Input ref={nameInputRef} label="Write playlist name" input={{ id: "name", type: "text" }}></Input>
          </form>
            <button onClick ={submitHandler} type="submit" >create</button>

      </Modal>
    </>
  )
}

export default Modalpage