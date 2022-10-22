import React from "react";
import { Link } from "react-router-dom";
import profile_picture from "../../assets/images/profile_picture.png";
import "./topnav.scss";

function TopNav() {
  return (
    <div className="top__nav">
      <div className="top__wrapper">
        <div className="top__nav-right">
          <span className="notification">
            <i class="ri-notification-4-line"></i>
            <span className="badge">1</span>
          </span>
          <div className="profile">
            <Link to="">
              <img src={profile_picture} alt="Profile" />
            </Link>
          </div>
          <h5 className="user__title">Rushikesh Kasture</h5>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
