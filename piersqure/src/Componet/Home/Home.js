import React from "react";
import "./Home.css";
import { Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import {
  BlinkingCursorTextBuilder,

} from "react-animated-text-builders";
// import devIcon from '@iconify-icons/fa-brands/dev';
// import process from "../image/process.png";
function Home() {
  return (
    <>
      <p className="align-self-centert mt-4">Our Services</p>
      <div className="container">
        {/* style={{ marginLeft: "4rem" }} */}
        <div className="row">
          {/* <Col xs={12} sm={4} lg={4} xl={3} className="mb-4">
            <div
              className="card"
              style={{ width: "100%", marginRight: "1rem" }}
            >
              <Icon
                className="col-sm-12 mt-2"
                icon="material-symbols:logo-dev-outline"
                color="#26606e"
                width="50"
                height="50"
              />
              <div className="card-body">
                <h5 className="card-title">Software development</h5>
                <p className="card-text">JAVA | .Net | Node.js</p>
                <a href="#" className="btn btn-primary">
                  Coming soon
                </a>
              </div>
            </div>
          </Col> */}
          <Col xs={12} sm={4} lg={4} xl={3} className="mb-4">
            <div
              className="card"
              style={{ width: "100%", marginRight: "1rem" }}
            >
              <Icon
                className="col-sm-12 mt-2"
                icon="material-symbols:logo-dev-outline"
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
          </Col>
          <Col xs={12} sm={4} lg={4} xl={3} className="mb-4">
            <div
              className="card"
              style={{ width: "100%", marginRight: "1rem" }}
            >
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
          </Col>
          <Col xs={12} sm={4} lg={4} xl={3} className="mb-4">
            <div
              className="card"
              style={{ width: "100%", marginRight: "1rem" }}
            >
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
          </Col>
          <Col xs={12} sm={4} lg={4} xl={3} className="mb-4">
            <div
              className="card"
              style={{ width: "100%", marginRight: "1rem" }}
            >
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
          </Col>
          <Col xs={12} sm={4} lg={4} xl={3} className="mb-4">
            <div
              className="card"
              style={{ width: "100%", marginRight: "1rem" }}
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
          </Col>
          <Col xs={12} sm={4} lg={4} xl={3} className="mb-4">
            <div
              className="card"
              style={{ width: "100%", marginRight: "1rem" }}
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
          </Col>
          <Col xs={12} sm={4} lg={4} xl={3} className="mb-4">
            <div
              className="card"
              style={{ width: "100%", marginRight: "1rem" }}
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
          </Col>
          <Col xs={12} sm={4} lg={4} xl={3} className="mb-4">
            <div
              className="card"
              style={{ width: "100%", marginRight: "1rem" }}
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
          </Col>
          {/* <div className="card" style={{ width: "19rem", marginRight: "1rem" }}>
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
          </div> */}
          {/* <div
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
          </div> */}
          <div className="col-md-6 mt-4">
            <div
              style={{
                backgroundImage: `url("https://cdn.dribbble.com/users/1138853/screenshots/4834993/06_08_gif.gif")`,
                backgroundRepeat: "no-repeat",
                height: "25rem",
                width: "100%",
                maxWidth: "35rem",
                marginTop: "1rem",
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
            <div
              style={{
                backgroundImage: `url("https://th.bing.com/th/id/OIP.tJ3Sy8wzuodXuqe5MXjELgHaFP?pid=ImgDet&rs=1")`,
                // backgroundRepeat: "no-repeat",
                height: "20rem",
                width: "100%",
                // maxWidth: "35rem",
                // marginTop: "1rem",
              }}
            >
              <div className="animate-charcter">
              <BlinkingCursorTextBuilder
                  textStyle={{
                    fontWeight: "bold",
                    font: "Times New Roman",
                    fontSize: "23px",
                  }}
                  style={{
                    transform: "rotate(-6deg)",
                    // marginTop: "10px",
                    marginBottom: "20px",
                  }}
                  cursorComponent={
                    <div style={{ color: "green" }}> Java Java Java</div>
                  }
                  blinkTimeAfterFinish={-1}
                >
                  Development!{" "}
                </BlinkingCursorTextBuilder>
                <p
                  className="Devpara-1"
                  width="100%"
                  direction="up"
                  height="100px"
                >
                  Software development is the art of turning ideas into
                  functional and reliable computer programs.
                </p>
                {/* <FloatingLettersTextBuilder
        floatingSpeed={500}
        lettersAppearanceDelay={250}
      > Floating Letters 
</FloatingLettersTextBuilder> */}
            

                {/* <FloatingLettersTextBuilder
                  floatingSpeed={500}
                  lettersAppearanceDelay={250}
                  animationMaxMargin={"200px"}
                  animationMinMargin={"0px"}
                  onAnimationFinished={() => {
                    alert("Animation Finished!");
                  }}
                >
                  {" "}
                  Floating Letters{" "}
                </FloatingLettersTextBuilder> */}
                <br />
                <br />
                <p
                  className="Devpara-1"
                  width="100%"
                  direction="up"
                  height="100px"
                >
                  The software development lifecycle involves iterative
                  processes, feedback loops, and agile methodologies to ensure
                  efficient development, quick iterations, and continuous
                  improvement of software products.
                </p>
                <br />
                <br />
                <p
                  className="Devpara-1"
                  width="100%"
                  direction="up"
                  height="100px"
                >
                  Software development encompasses a wide range of domains,
                  including web development, mobile app development, artificial
                  intelligence, data analysis, and more.
                </p>
                <br />
                <br />
                <p
                  className="Devpara-1"
                  width="100%"
                  direction="up"
                  height="100px"
                >
                  It involves analyzing requirements, designing system
                  architecture, coding, testing, and deploying.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="conversation-container">
          <div
            style={{
              backgroundImage: `url("https://th.bing.com/th/id/OIP.66TNqL3N2XweZEvr5OqDIAHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7")`,
              // backgroundRepeat: "no-repeat",
              height: "17rem",
              width: "100%",
              // maxWidth: "35rem",
              marginTop: "11rem",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Home;
