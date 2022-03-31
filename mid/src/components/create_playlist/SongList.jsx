import React, {useState} from 'react'
import classes from './SongList.module.css';

// DELETE SONG~~~~~~~~~~~~~~~~~~~~~~ DELETE SONG DELETE SONG DELETE SONG DELETE SONG
const SongList = (props) => {

  // console.log(props.playListName);
  // console.log(props.songInfoName);
  const [didSubmit, setDidSubmit] = useState(false);

  

  // const removeSong = () => {
  //   const selectedSong = cartState.items.findIndex(
  //     (item) => item.id === id
  //   );
  //   console.log(selectedCartItemIndex);

  //   const selectedCartItem = cartState.items[selectedCartItemIndex];
  
  //   const updatedTotalAmount = cartState.totalAmount - selectedCartItem.amount * selectedCartItem.price;
  //   // console.log(updatedTotalAmount);

  //   // 배열에서 해당 객체만 제거 후 다시 업데이트
  //   const updatedItems = cartState.items.filter(item => item.id !== id);

  //   setCartState({items: updatedItems, totalAmount: updatedTotalAmount});
  // };
  
  const BASE_URL = 'http://localhost:8090/api/v1/songinfo';

  const submitHandler = async (event) => {
  
      await fetch(BASE_URL,
        {
          method: 'DELETE',
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify({
            songInfoName : props.songInfoName,
          })
        }
      );
      setDidSubmit(true);  
  }

  return (
    <>

    <div className={classes.songTotal}>
      <img className={classes.songimage} src={props.songInfoAlbumUrl} alt="" />
      <div className={classes.songName}>{props.songInfoName}</div>
      <div className={classes.songSinger}>{props.songInfoSinger}</div>
      <button className="playlist__delete__button" onClick ={submitHandler}>x</button>
    </div>
    </>

  )
}

export default SongList