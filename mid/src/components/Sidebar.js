import React, {useState} from 'react'
import {RiMenuLine, RiLayoutGridFill, RiChat4Fill, RiTeamFill, RiTaskFill, RiPieChart2Fill} from 'react-icons/ri'
// import './Sidebar.module.css'


function Sidebar() {

  const sidebarCollpased = localStorage.getItem('sidebar-collapsed');
  const [isExpanded, setIsExpanded] = useState(sidebarCollpased ? false : true);

  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem('sidebar-collapsed', true);
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem('sidebar-collapsed');
  };

  // const handler = () => {
  //   if(isExpanded) {
  //     setIsExpanded(false);
  //     document.getElementsByClassName("sidebar-icon").style.width = "250px";
  //     document.getElementsById("main").style.width = "250px";
  //     return;
  //   }
  //   setIsExpanded(true);
  //   document.getElementsByClassName("sidebar-icon").style.width = "0px";
  //   document.getElementsById("main").style.width = "0px";
  // };

  return (
    <div className={isExpanded ? "Sidebar" : "Sidebar collapsed"}>
      
      <div className="sidebar-header" id="main">
        <RiMenuLine className="sidebar-icon" onClick={handleToggler} />
        <h1 className="sidebar-logo">SYE</h1>
      </div>
      <div className="sidebar-items">
        <div className="item">
          <RiChat4Fill className="sidebar-icon" />
          <span className="sidebar-text">리스트 생성</span>
        </div>
        <div className="item">
          <RiTeamFill className="sidebar-icon" />
          <span className="sidebar-text">즐겨찾기</span>
        </div>
        <div className="item">
          <RiTaskFill className="sidebar-icon" />
          <span className="sidebar-text">좋아요</span>
        </div>
        <div className="item">
          <RiPieChart2Fill className="sidebar-icon" />
          <span className="sidebar-text">추천</span>
        </div>
          <br />
          <div className="item">
          <span className="sidebar-text1">PLAYLISTS</span>
      </div>
          <hr />
        <div className="item">
          <RiLayoutGridFill className="sidebar-icon" />
          <span className="sidebar-text">Playlists</span>
          {/* 이 밑으로 플레이리스트 출력 */}
        </div>
        </div>
   </div>
  )
}

export default Sidebar