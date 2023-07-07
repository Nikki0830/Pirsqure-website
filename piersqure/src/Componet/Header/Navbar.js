import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Pier from "../image/Pier.png";

function Navbar() {
  return (
    <>
      {/* <h1>h</h1> */}

      <div className="flex flex-row-reverse pb-2">
      <img src={Pier} className="img-thumbnail" alt="Cinque Terre"/>
        <Link className="col-sm-3 p-2" to="/">
          HOME
        </Link>
        <Link className="col-sm-3 p-2" to="/about">
          ABOUT US
        </Link>
        <Link className="col-sm-3 p-2" to="/career">
          CAREERS
        </Link>
        <Link className="col-sm-3 p-2" to="/Offering">
          OFFERING
        </Link>
        <Link className="col-sm-3 p-2" to="/Contact">
          CONTACT US
        </Link>
      </div>
    </>
  );
}

export default Navbar;
