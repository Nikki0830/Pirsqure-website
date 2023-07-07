import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Aboutus from "../Aboutus/Aboutus";
import Career from "../Career/Career";
import Offering from "../Offering/Offering";
import Contactus from "../Contactus/Contactus";
// import Home from "./Componet/Home/Home";
// import Aboutus from "./Componet/Aboutus/Aboutus";

function Routefile() {
  return (
    <>
      <Switch>
      {/* <Route index element={<Home />} /> */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <Aboutus />
        </Route>

        <Route exact path="/career">
          <Career />
        </Route>

        <Route exact path="/Contact">
          <Contactus />
        </Route>

        <Route exact path="/Offering">
          <Offering />
        </Route>
      </Switch>
    </>
  );
}

export default Routefile;
