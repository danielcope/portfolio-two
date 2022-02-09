import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faAws,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <section className="about-me-container-one">
        <h5>About Me</h5>
        <p>
          I’m a full-stack web developer, frontend and backend. I’m passionate
          about creating new a exciting products. I have mostly work with React,
          Node.js, Express, PostgreSQL, and AWS. <br></br>
          <br></br> I’m also a big rock climber and an adventurer. I moved to
          Utah from California a few years ago to be closer to the mountains.{" "}
        </p>
      </section>
      <section className="stack">
        <ul className="stack-icons-container">
          <FontAwesomeIcon className="stack-icon" icon={faReact} />
          <FontAwesomeIcon className="stack-icon" icon={faNodeJs} />
          <FontAwesomeIcon className="stack-icon" icon={faAws} />
          <FontAwesomeIcon className="stack-icon" icon={faDatabase} />
          <FontAwesomeIcon className="stack-icon" icon={faHtml5} />
          <FontAwesomeIcon className="stack-icon" icon={faCss3Alt} />
        </ul>
        <ul className="stack-names">
          <li>React</li>
          <li>Node.js</li>
          <li>Amazon Web Services</li>
          <li>PostgreSQL</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </section>
    </section>
  );
};

export default AboutMe;
