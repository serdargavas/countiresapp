import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <h1>Made by SERDAR GAVAS</h1>
        <h2>If you've scrolled this far consider checking my github and linkedin</h2>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/serdar-gavas/" target="_blank">
            <img src="linkedin.png" />
          </a>
          <a href="https://github.com/serdargavas" target="_blank">
            <img src="github.png" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
