//npm  i react-typical

import React from "react";
import Typical from "react-typical";
import './Profile.css';
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://m.facebook.com/georgexenakis.14">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/xenakisgeorge/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/I_C_P__06">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I 'm <span className="highlighted-text">George</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Aircraft Engineer✈️",
                    1000,
                    "Computational Engineering 🖥️",
                    1000,
                    "Aircraft Mechanic 🖋️",
                    1000,
                    "Junior Full Stack Developer 🌍",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                The most difficult thing is the decision to act, the rest is merely tenacity.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>

              Hire Me!
            </button>
            <a href="CV.pdf" download="CV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}


