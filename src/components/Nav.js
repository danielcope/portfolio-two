import React, { useState } from "react";

const Nav = () => {
  const [menu, flipMenu] = useState(false);

  return (
    <section>
      <MenuButton menu={menu} flipMenu={flipMenu} />
      <NavMenu menu={menu} flipMenu={flipMenu} />
    </section>
  );
};

const NavMenu = (props) => {
  return (
    <nav className={!props.menu ? "nav-closed" : "nav-opened"}>
      <DCLogo menu={props.menu} />
      <ul>
        <li>
          <a href="#about-me" onClick={() => props.flipMenu(false)}>
            About
          </a>
        </li>
        <li onClick={() => props.flipMenu(false)}>
          <a href="#work">Work</a>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1yn6Z8WsOq5tiv36tobqIe4VcaN4rLXpy/edit?usp=sharing&ouid=115377183336375393232&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
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

const DCLogo = (props) => {
  return (
    <a href="#home" onClick={() => props.flipMenu(false)}>
      <div className={!props.menu ? "d-letter" : "d-letter-flipped"}>
        <span>D</span>
      </div>
      <div className="c-letter">
        <span>C</span>
      </div>
    </a>
  );
};

export default Nav;
