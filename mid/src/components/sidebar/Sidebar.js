import React, { useEffect, useState } from 'react'
import SidebarButton from './SidebarButton'
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from '../../spotify';

export default function Sidebar(props) {
  const [image, setImage] = useState("https://cdn.pixabay.com/photo/2017/06/05/07/58/butterfly-2373175_960_720.png");

  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, [])

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
