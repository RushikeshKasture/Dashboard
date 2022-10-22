import React from "react";
import "./sidebar.scss";
import { NavLink } from "react-router-dom";
import navLinks from "../../assets/navLinks";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2>CRM Dash</h2>
      </div>

      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__link nav__active" : "nav__link"
                  }
                >
                  <i className={item.icon}></i>
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
