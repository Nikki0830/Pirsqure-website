import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Icon } from "@iconify/react";

export class Footer extends Component {
  render() {
    return (
      <>
        {/* <!-- Footer --> */}
        <footer
          className="text-center text-lg-start bg-light text-muted"
          id="Footer-container"
        >
          {/* <!-- Section: Social media --> */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* <!-- Left --> */}
            <div className="me-5 d-none d-lg-block" id="get-connected">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* <!-- Left --> */}

            {/* <!-- Right --> */}
            <div>
              <Link to="/Path">
                <Icon
                  icon="skill-icons:twitter"
                  width="30"
                  height="30"
                  className="m-2"
                />
              </Link>
              <Link to="/Path">
                <Icon
                  icon="openmoji:youtube"
                  width="30"
                  height="30"
                  className="m-2"
                />
              </Link>
              <Link to="/Path">
                <Icon
                  icon="logos:facebook"
                  width="30"
                  height="30"
                  className="m-2"
                />
              </Link>
              <Link to="/Path">
                <Icon
                  icon="skill-icons:instagram"
                  width="30"
                  height="30"
                  className="m-2"
                />
              </Link>
            </div>
            {/* <!-- Right --> */}
          </section>
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Links  --> */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div className="row mt-3">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-4 col-xl-3  mb-4">
                  {/* <!-- Content --> */}
                  <h6 className="text-uppercase fw-bold mb-4" id="piersqure">
                    <i className="fas fa-gem "></i>PIERSQURE
                  </h6>
                  <p>
                    "Our Preparation is your Profit" "Want to stand out of the
                    crowd, be heard, and move your business forward ?
                    PIERSQURE can help."
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <Link to="/Path"> Contact us </Link>
                  </p>
                  <p>
                    <Link to="/Path"> Contact us </Link>
                  </p>
                  <p>
                    <Link to="/Path"> Contact us </Link>
                  </p>
                  <p>
                    <Link to="/Path"> Contact us </Link>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <Link to="/Path"> Contact us </Link>
                  </p>
                  <p>
                    <Link to="/Path"> Contact us </Link>
                  </p>
                  <p>
                    <Link to="/Path"> Contact us </Link>
                  </p>
                  <p>
                    <Link to="/Path"> Contact us </Link>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3"></i> New York, NY 10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print me-3"></i> + 01 234 567 89
                  </p>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
          {/* <!-- Section: Links  --> */}
          {/* 
  <!-- Copyright --> */}
          <div className="text-center p-4" style={{ backgroundColor: "black" }}>
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
      </>
    );
  }
}

export default Footer;
