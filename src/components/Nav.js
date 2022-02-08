import React, { useState } from "react";

const Nav = () => {
  const [menu, flipMenu] = useState(false);

  return (
    <section>
      <MenuButton menu={menu} flipMenu={flipMenu} />
      <NavMenu menu={menu} />
    </section>
  );
};

const NavMenu = (props) => {
  return (
    <nav className={!props.menu ? "nav-closed" : "nav-opened"}>
      <DCLogo />
      <ul>
        <li>
          <a href="#about-me">About</a>
        </li>
        <li>Work</li>
        <li>Resume</li>
      </ul>
    </nav>
  );
};

const MenuButton = (props) => {
  return (
    <div
      className="ham-button-container"
      onClick={() => props.flipMenu(!props.menu)}
    >
      <div className={!props.menu ? "line top-line" : "line top-line-x"}></div>
      <div className={!props.menu ? "line mid-line" : "line mid-line-x"}></div>
      <div className={!props.menu ? "line bot-line" : "line bot-line-x"}></div>
    </div>
  );
};

const DCLogo = () => {
  return (
    <a href="#home">
      <div className="d-letter">
        <span>D</span>
      </div>
      <div className="c-letter">
        <span>C</span>
      </div>
    </a>
  );
};

export default Nav;