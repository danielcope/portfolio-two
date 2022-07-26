import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faAws,
  faPython,
  faAngular,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  const tech = [
    { icon: faReact, tech: "React" },
    { icon: faPython, tech: "Python" },
    { icon: faAngular, tech: "AngularJs" },
    { icon: faNodeJs, tech: "Node.js" },
    { icon: faAws, tech: "AWS" },
    { icon: faDatabase, tech: "PostgreSQL" },
    { icon: faDatabase, tech: "MySQL" },
  ];

  const mappedTech = tech.map((ele, i) => (
    <StackRow key={ele.tech} icon={ele.icon} tech={ele.tech} />
  ));

  return (
    <section className="about-me" id="about-me">
      <section className="about-me-container-one">
        <h5>About Me</h5>
        <p>
          I’m a full-stack web developer, frontend and backend. I’m passionate
          about creating new a exciting products. I have mostly work with React,
          Python, Node.js, PostgreSQL, and AWS. <br></br>
          <br></br> I’m also a big rock climber and am always looking for a new
          adventure. I moved to Utah from California a few years ago to be
          closer to the mountains.{" "}
        </p>
      </section>
      <section className="stack">
        <ul className="stack-names">{mappedTech}</ul>
      </section>
    </section>
  );
};

const StackRow = (props) => {
  return (
    <li>
      <FontAwesomeIcon className="stack-icon" icon={props.icon} />
      <span>{props.tech}</span>
    </li>
  );
};

export default AboutMe;
