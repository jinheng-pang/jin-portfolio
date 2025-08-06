import SvgEnvelope from "../svg/Envelope";
import SvgDownload from "../svg/Download";
import SvgGithub from "../svg/Github";
import SvgLinkedin from "../svg/Linkedin";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-name">Jin Heng Pang</h1>
      <p className="header-description">Aspiring Software Engineer</p>
      <p className="header-location">Melbourne, VIC</p>
      <ul className="header-links">
        <li>
          <a href="">
            <SvgEnvelope className="header-links-svg" />
            Contact Me
          </a>
        </li>
        <li>
          <a href="">
            <SvgDownload className="header-links-svg" />
            Download Resume
          </a>
        </li>
        <li>
          <a href="https://github.com/jinheng-pang">
            <SvgGithub className="header-links-svg" />
            Github
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jin-heng-pang/">
            <SvgLinkedin className="header-links-svg" />
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
