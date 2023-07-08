import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Pier from "../image/Pier.png";
import Library from "../Reactlibraries/Library";
import { Icon } from "@iconify/react";
// // import leaf from "../image/leaf.png";
import program from "../image/program3.jpg";

function Navbar() {
  return (
    <>
      {/* <div style={{ backgroundImage:`url(${wallpaper})`,backgroundRepeat:"no-repeat" }}> */}
      <div
        style={{
          // backgroundImage: `url("https://th.bing.com/th/id/OIP.s6jeaYzX0LGfYJAsWSekPgHaEo?w=265&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7")`,
          // backgroundRepeat: "no-repeat",
          backgroundImage:`url(${program})`,
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
        {/* <div
        style={{
          // backgroundImage: `url(${Program})`,
          backgroundImage: `url("https://via.placeholder.com/500")`,
          backgroundRepeat: "no-repeat",
        // width:100
        }}
      > */}
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
        {/* <img src={leaf} className="img-circle p-2 pb-2" alt="Cinque Terre" /> */}
      </div>
    </>
  );
}

export default Navbar;
