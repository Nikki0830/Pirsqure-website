import React from "react";
import "./Home.css";
import { Icon } from '@iconify/react';
function Home() {
  return (
    <>
     <p className="align-self-centert mt-4">Our Services</p>
      <div className="container"style={{marginLeft:"4rem"}}>
       
        <div className="row">
          <div className="card" style={{ width: "19rem",marginRight:"1rem" ,}}>
          <Icon className="col-sm-12 mt-2" icon="fa6-brands:dev" color="#26606e" width="50" height="50" />
            <div className="card-body">
              <h5 className="card-title">Software development</h5>
              <p className="card-text">
            JAVA | .Net | Node.js
              </p>
              <p href="#" className="btn btn-primary">
                Comming soon
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "19rem",marginRight:"1rem" ,}}>
          <Icon className="col-sm-12 mt-2" icon="bi:laptop" color="#26606e" width="50" height="50" />
            <div className="card-body">
              <h5 className="card-title">Website development</h5>
              <p className="card-text">
            HTML/CSS | JavaScript | React.js
              </p>
              <p href="#" className="btn btn-primary">
                Comming soon
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "19rem",marginRight:"1rem" ,}}>
       
          <Icon  className="col-sm-12 mt-2" icon="fa:mobile" color="#26606e" width="50" height="50" />
            <div className="card-body">
              <h5 className="card-title">Mobile development</h5>
              <p className="card-text">
            ANDROID | React Native | IOS
              </p>
              <p href="#" className="btn btn-primary">
                Comming soon
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "19rem",marginRight:"1rem" ,}}>
        
          <Icon  className="col-sm-12 mt-2" icon="icon-park-solid:api" color="#26606e" width="50" height="50" />
            <div className="card-body">
              <h5 className="card-title">API Integration</h5>
              <p className="card-text">
            Payment getway | SMS getway 
              </p>
              <p href="#" className="btn btn-primary">
                Comming soon
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "19rem",marginRight:"1rem" ,}}>
       
          <Icon  className="col-sm-12 mt-2" icon="fluent:design-ideas-16-filled" color="#26606e" width="50" height="50" />
            <div className="card-body">
              <h5 className="card-title">UI & UX design</h5>
              <p className="card-text">
            React.js | Angular.js | Bootstrap | Photoshop
              </p>
              <p href="#" className="btn btn-primary">
                Comming soon
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "19rem",marginRight:"1rem" ,}}>
          <Icon className="col-sm-12 mt-2" icon="fa6-brands:dev" color="#26606e" width="50" height="50" />
            <div className="card-body">
              <h5 className="card-title">Software development</h5>
              <p className="card-text">
            JAVA | .Net | Node.js
              </p>
              <p href="#" className="btn btn-primary">
                Comming soon
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "19rem",marginRight:"1rem" ,}}>
          <Icon className="col-sm-12 mt-2" icon="fa6-brands:dev" color="#26606e" width="50" height="50" />
            <div className="card-body">
              <h5 className="card-title">Software development</h5>
              <p className="card-text">
            JAVA | .Net | Node.js
              </p>
              <p href="#" className="btn btn-primary">
                Comming soon
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "19rem",marginRight:"1rem" ,}}>
          <Icon className="col-sm-12 mt-2" icon="fa6-brands:dev" color="#26606e" width="50" height="50" />
            <div className="card-body">
              <h5 className="card-title">Software development</h5>
              <p className="card-text">
            JAVA | .Net | Node.js
              </p>
              <p href="#" className="btn btn-primary">
                Comming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
