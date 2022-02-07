import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <section id="home" className="home">
      <header>
        <h1>Daniel Cope</h1>
      </header>
      <div className="spacer-line"></div>
      <section className="socials-container">
        <FontAwesomeIcon className="fontAweIcon" icon={faEnvelope} />
        <FontAwesomeIcon className="fontAweIcon" icon={faLinkedinIn} />
        <FontAwesomeIcon className="fontAweIcon" icon={faGithub} />
        <FontAwesomeIcon className="fontAweIcon" icon={faInstagram} />
        <FontAwesomeIcon className="fontAweIcon" icon={faFacebook} />
        <FontAwesomeIcon className="fontAweIcon" icon={faBookOpen} />
      </section>
    </section>
  );
};

export default Home;
