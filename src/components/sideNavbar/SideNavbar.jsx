import React from "react";
import "./sideNavbar.css";
import {  Row, Col } from "react-bootstrap";
import ProfileIcon from "../../assets/profile.png"
import ShareIcon from "../../assets/share-2.png"
import GlobeIcon from "../../assets/globe.png"
import AlignLeft from "../../assets/align-left.png"
import user from "../../assets/user.png"
import upload from "../../assets/upload.png"


const SideNavbar = () => {
  return (
    <div className="SideBar">
    <div className="iconsWrapper ">
    <img src={ProfileIcon} className="profile"   />
    <img src={ShareIcon} className="icon"   />
    <img src={GlobeIcon} className="icon"  />
    <img src={AlignLeft} className="icon"  />
    <img src={user} className="icon"  />
    </div>
    <div className="logoutIconWrapper">
    <img src={upload} className=" mb-2 icon"  />

    </div>
    </div>
  );
};

export default SideNavbar;
