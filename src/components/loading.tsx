import React, { FunctionComponent } from "react";

const Loading: FunctionComponent = () => {
  return (
    <div className="loader">
      <svg width="0" height="0">
        <filter id="gooey-plasma-2">
          <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16"
            result="goo"
          />
        </filter>
      </svg>
      <div className="plasma-2">
        <ul className="gooey-container">
          <li className="bubble"></li>
          <li className="bubble"></li>
          <li className="bubble"></li>
          <li className="bubble"></li>
          <li className="bubble"></li>
          <li className="bubble"></li>
        </ul>
      </div>
    </div>
  );
};

export default Loading;
