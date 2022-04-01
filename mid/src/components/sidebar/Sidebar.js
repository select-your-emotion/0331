import React from 'react'
import SidebarButton from './SidebarButton'
import { FaGripfire} from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";

export default function Sidebar() {
  const image= "https://cdn.pixabay.com/photo/2017/06/05/07/58/butterfly-2373175_960_720.png";


  return (
    <div className="sidebar-container">
        <img src={image} className="profile-img" alt="profile" />
        <div>

        <SidebarButton title="MainPage" to="/main" icon={<IoLibrary />} />
        <SidebarButton title="Playlist" to="/myPlayList" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Search" to="/dashboard" icon={<FaGripfire />} />
        </div>
    </div>
  )
}
