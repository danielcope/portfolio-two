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
        <a href="mailto: daniel.ash.cope@gmail.com">
          <FontAwesomeIcon className="fontAweIcon" icon={faEnvelope} />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-cope-60853213/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="fontAweIcon" icon={faLinkedinIn} />
        </a>
        <a
          href="https://github.com/danielcope"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="fontAweIcon" icon={faGithub} />
        </a>
        <a
          href="https://www.instagram.com/daniel_ashton_cope/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="fontAweIcon" icon={faInstagram} />
        </a>
        <a
          href="https://www.facebook.com/daniel.a.cope/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="fontAweIcon" icon={faFacebook} />
        </a>
        <a
          href="https://docs.google.com/document/d/1yn6Z8WsOq5tiv36tobqIe4VcaN4rLXpy/edit?usp=sharing&ouid=115377183336375393232&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="fontAweIcon" icon={faBookOpen} />
        </a>
      </section>
    </section>
  );
};

export default Home;
