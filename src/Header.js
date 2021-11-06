import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import HeaderOption from "./HeaderOption";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1636044116~hmac=050bbf66506c7a48a5b31fb095b3ffdc"
          alt=""
        ></img>
        <div className="header__search">
          <SearchIcon />
          <input type="text"></input>
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
