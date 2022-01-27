import React, { useState } from "react";

const Nav = () => {
  const [menu, flipMenu] = useState(false);

  return (
    <section>
      <div
        className={!menu ? "ham-menu-closed" : "ham-menu-opened"}
        onClick={() => flipMenu(!menu)}
      >
        <div className={!menu ? "ham-top" : "ham-top-x"}></div>
        <div className={!menu ? "ham-mid" : "ham-mid-x"}></div>
        <div className={!menu ? "ham-bot" : "ham-bot-x"}></div>
      </div>

      {/* <nav>
        <ul>
          <li></li>
          <li>About</li>
          <li>Work</li>
        </ul>
      </nav> */}
    </section>
  );
};

export default Nav;
