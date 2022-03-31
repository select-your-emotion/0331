import React, { useEffect, useState }  from 'react'
import classes from "./PlayListMain.module.css"
import SongList from './SongList';


const PlatListMain = (props) => {


  // async function getList() {
  //   const BASE_URL = 'http://localhost:8090/api/v1/playlists/showsonglist';
  //   const response = await fetch(BASE_URL,
  //     {
  //       method: 'POST',
  //         headers: {
  //           'Content-Type' : 'application/json',
  //         },
  //         body: JSON.stringify({
  //           playListName: "First",
  //         })
  //     });

  //   if(!response.ok) {
  //     throw new Error("erorr");
  //   }

  //   const responseData = response.json();
  //   console.log(responseData);
  //   const playlist = responseData;
  //   console.log(playlist);
  // }

  // getList();


  return (

    <div className={classes.main}>
      <img className={classes.mainimage} src={props.src} alt="" />
      <div className={classes.myplaylist}>내 플레이 리스트 #2</div>
  
    </div>



  )
}

export default PlatListMain;