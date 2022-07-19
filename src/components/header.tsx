import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <div className="header-inner-left">
          <h1>Countries App</h1>
        </div>
        <div className="header-inner-right">
          <div className="border-img" style={{ background: "rgba(225, 231, 238, 0.2```````````97)" }}>
            <img src="react.png"/>
          </div>
          <img src="css.png" className="tech-used-img" />
          <img src="html.png" className="tech-used-img" />
          <img src="typescript.png" className="tech-used-img" />
          <div
            className="border-img"
            style={{ background: "rgb(115, 31, 211)" }}
          >
            <img src="gsap.png" />
          </div>
          <img src="react-query.png" className="tech-used-img" />
          <div className="border-img">
            <img src="redux.png" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
