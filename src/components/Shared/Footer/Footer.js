import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlus, faTwitter } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer>
      <div
        className="row links w-75 mt-5 pt-4 pb-5"
        style={{ margin: "0 auto" }}
      >
        <div className="col-md-3 mt-5 pt-2">
          <a href="http://localhost:3000/">Emergency dental Care</a>
          <br />
          <a href="http://localhost:3000/">Check Up</a>
          <br />
          <a href="http://localhost:3000/">Treatment of personal disease</a>
          <br />
          <a href="http://localhost:3000/">Tooth Extraction</a>
          <br />
          <a href="http://localhost:3000/">Check up</a>
        </div>
        <div className="col-md-3">
          <h5 className="text-primary">Services</h5>
          <br />
          <a href="http://localhost:3000/">Emergency dental Care</a>
          <br />
          <a href="http://localhost:3000/">Check Up</a>
          <br />
          <a href="http://localhost:3000/">Treatment of personal disease</a>
          <br />
          <a href="http://localhost:3000/">Tooth Extraction</a>
          <br />
          <a href="http://localhost:3000/">Check up</a>
          <br />
          <a href="http://localhost:3000/">Check up</a>
          <br />
          <a href="http://localhost:3000/">Check up</a>
          <br />
          <a href="http://localhost:3000/">Tooth Extraction</a>
        </div>
        <div className="col-md-3">
          <h5 className="text-primary">Oral Health</h5>
          <br />
          <a href="http://localhost:3000/">Emergency dental Care</a>
          <br />
          <a href="http://localhost:3000/">Check Up</a>
          <br />
          <a href="http://localhost:3000/">Treatment of personal disease</a>
          <br />
          <a href="http://localhost:3000/">Tooth Extraction</a>
          <br />
          <a href="http://localhost:3000/">Check up</a>
          <br />
          <a href="http://localhost:3000/">Check up</a>
          <br />
          <a href="http://localhost:3000/">Check up</a>
          
        </div>
        <div className="col-md-3">
          <h5 className="text-primary">Our Adress</h5>
          <br />
          <p>New York-101010 Hudson yards</p>
          <br />
          <div>
          <a href="https://facebook.com/"><FontAwesomeIcon className="social-icon" icon={faFacebook} /></a>
          <a href="https://google.com"><FontAwesomeIcon className="social-icon" icon={faGooglePlus} /></a>
          <a href="https://twitter.com"><FontAwesomeIcon className="social-icon" icon={faTwitter} /></a>
          </div>
          <div className="mt-5">
              <h5>Call Now</h5>
              <br />
              <span>+2340545343</span>
          </div>
        </div>
      </div>
      <div className="copyright text-center text-secondary pt-4 mt-4">
        Copyright 2021 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
