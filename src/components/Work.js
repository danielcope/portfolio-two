import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import aqt from "../img/aqt.PNG";
import hingesite from "../img/hingesite.PNG";
import rrtrucks from "../img/rrtrucks.PNG";

const Work = () => {
  return (
    <section className="work" id="work">
      <h3>
        <a
          href="https://github.com/danielcope"
          target="_blank"
          rel="noopener noreferrer"
        >
          Work <FontAwesomeIcon icon={faGithub} />
        </a>
      </h3>
      <WorkContainer />
    </section>
  );
};

const WorkContainer = () => {
  const info = [
    {
      name: "Adventure Quest",
      img: aqt,
      imgAlt: "adventure quest log site img",
      summary:
        "A tracking tool for DnD enthusiasts. This full-stack application use React, React Router, Redux, and CSS for the frontend and Node.js, Express, and PostgreSQL for the back end. It pulls from an 3rd party API for some data about spells. It has full CRUD authentication with Bcrypt.",
      url: "https://adventurequestlog.com/",
    },
    {
      name: "Hinge Software",
      img: hingesite,
      imgAlt: "hinge software site img",
      summary:
        "A web page built for Hinge Software. This web page uses React for the frontend with React Router for navigation. It includes some backend features with server-less functionality through Amazong Web Services (AWS).",
      url: "https://hingeplayground.com/",
    },
    {
      name: "Roadrunners Trucking",
      img: rrtrucks,
      imgAlt: "Roadrunners Trucking site img",
      summary:
        "A website built for Roadrunners Trucking in California. Uses React and React Router for the frontend. A simple, modern design for a better user experience.",
      url: "https://www.roadrunnerstrucks.com/",
    },
  ];

  const mappedWork = info.map((ele, i) => (
    <EachWork
      key={ele.name}
      name={ele.name}
      img={ele.img}
      imgAlt={ele.imgAlt}
      summary={ele.summary}
      url={ele.url}
    />
  ));

  return <section className="work-container">{mappedWork}</section>;
};

const EachWork = (props) => {
  return (
    <section className="each-work">
      <h5>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          {props.name}{" "}
          <FontAwesomeIcon className="fa-link-icon" icon={faLink} />
        </a>
      </h5>
      <img src={props.img} alt={props.imgAlt} />
      <h6>Summary:</h6>
      <p>{props.summary}</p>
    </section>
  );
};

export default Work;
