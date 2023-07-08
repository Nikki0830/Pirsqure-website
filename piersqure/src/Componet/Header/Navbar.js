import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Pier from "../image/Pier.png";
import Library from "../Reactlibraries/Library";
import { Icon } from "@iconify/react";

import program from "../image/program3.jpg";

function Navbar() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${program})`,
          height: "200px",
        }}
      >
        <div className="d-flex flex-row-reverse" id="icon-container">
          <Icon
            icon="skill-icons:twitter"
            width="30"
            height="30"
            className="m-2"
          />
          <Icon
            icon="openmoji:youtube"
            width="30"
            height="30"
            className="m-2"
          />
          <Icon icon="logos:facebook" width="30" height="30" className="m-2" />
          <Icon
            icon="skill-icons:instagram"
            width="30"
            height="30"
            className="m-2"
          />
        </div>

        <img src={Pier} className="navbar-image" alt="Cinque Terre" />
        <div className="align-self-center">
          <Link className="col-sm-3 p-2 " to="/">
            HOME
          </Link>
          <Link className="col-sm-3 p-2 " to="/about">
            ABOUT US
          </Link>
          <Link className="col-sm-3 p-2 " to="/career">
            CAREERS
          </Link>
          <Link className="col-sm-3 p-2 " to="/Offering">
            OFFERING
          </Link>
          <Link className="col-sm-3 p-2 " to="/Contact">
            CONTACT US
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
