import React, { useEffect } from "react";

const ProgressBar = () => {
  useEffect(() => {
    const bar = document.querySelector(".bar--progress") as HTMLElement;

    window.addEventListener("scroll", (event) => {
      const max: number = document.body.scrollHeight - window.innerHeight;
      const percent = (window.scrollY / max) * 100;
      bar.style.width = percent + "%";
    });
  }, []);

  return (
    <div className="bar">
      <span className="bar--progress"></span>
    </div>
  );
};

export default ProgressBar;
