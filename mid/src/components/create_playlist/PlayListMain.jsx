import React  from 'react'
import classes from "./PlayListMain.module.css"


const PlatListMain = (props) => {

  return (

    <div className={classes.main}>
      <img className={classes.mainimage} src={props.src} alt="" />
      <div className={classes.myplaylist}>내 플레이 리스트 #2</div>
  
    </div>

  )
}

export default PlatListMain;