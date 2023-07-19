import React from "react";
import "./Home.css";
import { Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { BlinkingCursorTextBuilder } from "react-animated-text-builders";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-elastic-carousel";
import Item from "./Item";

function Home() {
  // const items = [
  //   { width: 1, itemsToShow: 5 },
  //   { width: 550, itemsToShow: 2 },
  //   { width: 768, itemsToShow: 3 },
  //   { width: 1200, itemsToShow: 4 },
  //   { width: 1260, itemsToShow: 5 },
  // ];
  return (
    <>
      <p className="align-self-centert mt-4" id = "our-sevices">Our Services</p>
      <div className="container">
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
                    <div style={{ color: "green" }}> Java Java Java </div>
                  }
                  blinkTimeAfterFinish={-1}
                >
                  Development !{" "}
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
          <div
            style={{
              backgroundImage: `url("https://th.bing.com/th/id/OIP.66TNqL3N2XweZEvr5OqDIAHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7")`,
              backgroundRepeat: "no-repeat",
              height: "16rem",
              width: "100%",
              // float:"inline-end",
              marginTop: "16rem",
            }}
          >
            <div className="conversation-container">
              {/* <hr
                style={{
                  transform: "rotate(-10deg)",
                  height: "200px",
                  width: "2px",
                  marginLeft: "5%",
                  color: "black",
                  marginTop: "10%",
                  backgroundColor:"black"

                  // display: flex,
                  // justifyContent: center,
                  // alignItems: center,
                  // display:"flex",
                  // justifyContent:"center",
                  // alignItems:"center"
                }}
                className=""
              /> */}
              {/* ------------------- Carouser---------------- */}
              {/* <div className="col-12 col-md-6">
                <div className="banner-section ">
                  <div
                    id="carouselExampleCaptions"
                    className="carousel slide pointer-event"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="text-dark"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                        className="text-dark"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                        // className="carousel-indicators-color active"
                        aria-current="true"
                        className="text-dark active"
                      ></button>
                    </div>
                    <div className="carousel-inner banner-mobcontent-position">
                      <div className="carousel-item">
                        <div className="row content-position">
                          <div className="text-dark px-5 py-lg-5">
                            <h1 className="text-center text-capitalize pt-4  mb-3">
                              Our Preparation-Your Profit.
                            </h1>
                            <p className="text-center fs-5">
                              We specialize in “custom software development”
                            </p>
                            <p className="text-center fs-5">
                              If you can dream it, we can create it.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row content-position">
                          <div className="text-dark px-5">
                            <h2 className="text-center text-capitalize mb-3">
                              Software Consulting And Development For Your
                              Digital Success
                            </h2>
                            <p className="text-center fs-5">
                              We transform businesses with powerful and
                              adaptable digital solutions that satisfy the needs
                              of today and unlock the opportunities of tomorrow.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item active">
                        <div className="row content-position">
                          <div className="text-dark px-5 py-4">
                            <h2 className="text-center text-capitalize mb-3">
                              We build amazing digital products
                            </h2>
                            <p className="text-center fs-5">
                              Our approach is driven by a sense of ownership,
                              user obsession and business benefits
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src="https://th.bing.com/th/id/OIP.dtO4ONb5CAFSWQ82APlz4wHaFG?w=217&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://th.bing.com/th/id/OIP.Ev7i4bUdqs5tSLjWuWLmtgAAAA?w=177&h=166&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://th.bing.com/th/id/OIP.hLsM4ell_wXM2BgQ0bBdLQHaEv?w=230&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                      alt="Third slide"
                    />
                  </div>
                </div>
              </div> */}
              {/* <Carousel>
                <div>
                  <img src="https://th.bing.com/th?id=OIP.mqylOtAi9gidsKGmzpXtggHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" />
                  <p className="legend">Legend 1</p>
                </div>
                <div>
                  <img src="https://th.bing.com/th?id=OIP.RBeXsiliJ3p1HWrEL24skQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" />
                  <p className="legend">Legend 2</p>
                </div>
                <div>
                  <img src="https://th.bing.com/th?id=OIP.YxzI-y8ycOFwUfiUC4B0tAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" />
                  <p className="legend">Legend 3</p>
                </div>
              </Carousel> */}
              {/* <Slider
           
                style={{height:"20px"}}
              >
                {slides.map((slide, index) => (
                  <div key={index}>
                    <h2>{slide.title}</h2>
                    <div>{slide.description}</div>
                  </div>
                ))}
              </Slider> */}
              <Carousel>
                <Item>
                  <img
                    className="slider-iamges"
                    src="https://th.bing.com/th/id/OIP.kLOvDCpvUGhQIMyAPzI-4QHaE8?w=272&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                    alt=""
                  />
                </Item>
                <Item>
                  <img
                    className="slider-iamges"
                    src="https://th.bing.com/th/id/OIP.E3WZVnuubIK4OqhSTF3cqwHaEK?w=268&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                    alt=""
                  />
                </Item>
                <Item>
                  <img
                    className="slider-iamges"
                    src="https://th.bing.com/th/id/OIP.-IZikFglpANto6wFDD7DBQHaE8?w=273&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                    alt=""
                  />
                </Item>
              </Carousel>
              {/* <Carousel>
                {items.map((item) => (
                  <div key={item.id}>{item.title}</div>
                ))}
              </Carousel> */}
              {/* ------------------- Carouser---------------- */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
