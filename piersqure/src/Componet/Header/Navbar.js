import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <>
      {/* <h1>h</h1> */}
      <div className="-flex flex-row-reverse">
        <Link className="col-sm-3 p-2 bg-info" to="/">HOME</Link>
        <Link className="col-sm-3 p-2 bg-info" to="/about">ABOUT US</Link>
        <Link className="col-sm-3 p-2 bg-info" to="/career">CAREERS</Link>
        <Link className="col-sm-3 p-2 bg-info" to="/Offering">OFFERING</Link>
        <Link className="col-sm-3 p-2 bg-info" to="/Contact">CONTACT US</Link>
      </div>
    </>
  );
}

export default Navbar;
