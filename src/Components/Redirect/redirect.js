import React from "react";
import "../Redirect/redirect.scss";
import { NavLink } from "react-router-dom";


function Redirect() {
  return (
    <>
      <div className="head__card">
        <div className="message">
          <h3>Data has been not added</h3>
          <p>Please Navigate to Dashboard through below Link</p>
          <NavLink to={"/"} style={{color:'aqua', fontWeight:'bold', fontSize:'1.3rem', textDecoration:'underline'}}>Click Here</NavLink>
        </div>
      </div>
    </>
  );
}

export default Redirect;
