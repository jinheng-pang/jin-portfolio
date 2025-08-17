import { useState } from "react";

import SvgEnvelope from "../svgComponents/Envelope";
import SvgDownload from "../svgComponents/Download";
import SvgGithub from "../svgComponents/Github";
import SvgLinkedin from "../svgComponents/Linkedin";
import ContactForm from "../components/ContactForm";

import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <h1 className="header-name">Jin Heng Pang</h1>
      <p className="header-description">Aspiring Software Engineer</p>
      <p className="header-location">Melbourne, VIC</p>
      <ul className="header-links">
        <li>
          <button className="header-links-button" onClick={() => setIsOpen(true)}>
            <SvgEnvelope className="header-links-svg" />
            Contact Me
          </button>
          <ContactForm
            open={isOpen}
            children={"MODAL"}
            onClose={() => setIsOpen(false)}
          />
        </li>
        <li>
          <a className="header-links-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <SvgDownload className="header-links-svg" />
            Download Resume
          </a>
        </li>
        <li>
          <a className="header-links-button"
            href="https://github.com/jinheng-pang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgGithub className="header-links-svg" />
            Github
          </a>
        </li>
        <li>
          <a className="header-links-button"
            href="https://www.linkedin.com/in/jin-heng-pang/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgLinkedin className="header-links-svg" />
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
