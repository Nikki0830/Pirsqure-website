import React from "react";
import "./Home.css";
import { Icon } from "@iconify/react";
import process from "../image/process.png";
function Home() {
  return (
    <>
      <p className="align-self-centert mt-4">Our Services</p>
      <div className="container" style={{ marginLeft: "4rem" }}>
        <div className="row">
          <div className="card" style={{ width: "19rem", marginRight: "1rem" }}>
            <Icon
              className="col-sm-12 mt-2"
              icon="fa6-brands:dev"
              color="#26606e"
              width="50"
              height="50"
            />
            <div className="card-body">
              <h5 className="card-title">Software development</h5>
              <p className="card-text">JAVA | .Net | Node.js</p>
              <p href="#" className="btn btn-primary">
                Comming soon
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "19rem", marginRight: "1rem" }}>
            <Icon
              className="col-sm-12 mt-2"
              icon="bi:laptop"
              color="#26606e"
              width="50"
              height="50"
            />
            <div className="card-body">
              <h5 className="card-title">Website development</h5>
              <p className="card-text">HTML/CSS | JavaScript | React.js</p>
              <p href="#" className="btn btn-primary">
                Comming soon
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "19rem", marginRight: "1rem" }}>
            <Icon
              className="col-sm-12 mt-2"
              icon="fa:mobile"
              color="#26606e"
              width="50"
              height="50"
            />
            <div className="card-body">
              <h5 className="card-title">Mobile development</h5>
              <p className="card-text">ANDROID | React Native | IOS</p>
              <p href="#" className="btn btn-primary">
                Comming soon
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "19rem", marginRight: "1rem" }}>
            <Icon
              className="col-sm-12 mt-2"
              icon="icon-park-solid:api"
              color="#26606e"
              width="50"
              height="50"
            />
            <div className="card-body">
              <h5 className="card-title">API Integration</h5>
              <p className="card-text">Payment getway | SMS getway</p>
              <p href="#" className="btn btn-primary">
                Comming soon
              </p>
            </div>
          </div>
          <div
            className="card"
            style={{ width: "19rem", marginRight: "1rem", marginTop: "1rem" }}
          >
            <Icon
              className="col-sm-12 mt-2"
              icon="fluent:design-ideas-16-filled"
              color="#26606e"
              width="50"
              height="50"
            />
            <div className="card-body">
              <h5 className="card-title">UI & UX design</h5>
              <p className="card-text">Angular.js | Bootstrap | Photoshop</p>
              <p href="#" className="btn btn-primary">
                Comming soon
              </p>
            </div>
          </div>
          <div
            className="card"
            style={{ width: "19rem", marginRight: "1rem", marginTop: "1rem" }}
          >
            <Icon
              className="col-sm-12 mt-2"
              icon="mdi:google-classroom"
              color="#26606e"
              width="50"
              height="50"
            />
            <div className="card-body">
              <h5 className="card-title">Corporate Training</h5>
              <p className="card-text">Online | Classroom Online| Offline </p>
              <p href="#" className="btn btn-primary">
                Comming soon
              </p>
            </div>
          </div>
          <div
            className="card"
            style={{ width: "19rem", marginRight: "1rem", marginTop: "1rem" }}
          >
            <Icon
              className="col-sm-12 mt-2"
              icon="mdi:wrench-cog"
              color="#26606e"
              width="50"
              height="50"
            />
            <div className="card-body">
              <h5 className="card-title">Maintenance</h5>
              <p className="card-text">Website | Application | Server</p>
              <p href="#" className="btn btn-primary">
                Comming soon
              </p>
            </div>
          </div>
          <div
            className="card"
            style={{ width: "19rem", marginRight: "1rem", marginTop: "1rem" }}
          >
            <Icon
              className="col-sm-12 mt-2"
              icon="ri:cloud-fill"
              color="#26606e"
              width="50"
              height="50"
            />
            <div className="card-body">
              <h5 className="card-title">IT Consulting</h5>
              <p className="card-text">Requirement | Proposal</p>
              <p href="#" className="btn btn-primary">
                Comming soon
              </p>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div
              style={{
                backgroundImage: `url("https://cdn.dribbble.com/users/1138853/screenshots/4834993/06_08_gif.gif")`,
                backgroundRepeat: "no-repeat",
                height: "25rem",
                width: "100%",
                maxWidth: "35rem",
                marginTop: "3rem",
              }}
            ></div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center mt-4">
            {/* <Icon
              icon="ph:dev-to-logo"
              color="#26606e"
              width="100"
              height="100"
            
            /> */}
            <p className="animate-charcter">
              Software development is the art of turning ideas into functional
              and reliable computer programs. <br />
              <br />
              The software development lifecycle involves iterative processes,
              feedback loops, and agile methodologies to ensure efficient
              development, quick iterations, and continuous improvement of
              software products.
              <br />
              <br />
              Software development encompasses a wide range of domains,
              including web development, mobile app development, artificial
              intelligence, data analysis, and more.
              <br />
              <br />
              It involves analyzing requirements, designing system architecture,
              coding, testing, and deploying.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
