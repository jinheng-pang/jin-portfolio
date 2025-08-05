import SvgCode from "../svg/Code";
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
          <SvgCode className="header-links-svg" />
          <a href="">Contact Me</a>
        </li>
        <li>
          <SvgDownload className="header-links-svg" />
          <a href="">Download Resume</a>
        </li>
        <li>
          <SvgGithub className="header-links-svg" />
          <a href="">Github</a>
        </li>
        <li>
          <SvgLinkedin className="header-links-svg" />
          <a href="">Github</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
