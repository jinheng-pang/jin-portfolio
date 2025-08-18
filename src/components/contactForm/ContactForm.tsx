import "./contactForm.css";
import SvgClose from "../../svgComponents/Close";
import SvgEnvelope from "../../svgComponents/Envelope";
import SvgPaperPlane from "../../svgComponents/PaperPlane";
import type { ContactFormProps } from "../../types";

const ContactForm = ({ open, onClose }: ContactFormProps) => {
  if (!open) return null;

  return (
    <div className="overlay">
      <div className="contactForm">
        <button className="closeButton" onClick={onClose}>
          <SvgClose className="closeButton-svg" />
        </button>
        <div className="contactForm-header">
          <div className="contactForm-header-heading">
            <SvgEnvelope />
            Get In Touch
          </div>
          <div className="contactForm-header-subHeading">
            Send me a message and I'll get back to you as soon as possible.
          </div>
        </div>
        <form className="contactForm-body">
          <div className="name">
            <label className="label" htmlFor="name">Name</label>
            <input className="input" id="name" />
          </div>
          <div className="email">
            <label className="label" htmlFor="email">Email</label>
            <input className="input"  id="email" type="email" />
          </div>
          <div className="subject">
            <label className="label" htmlFor="subject">Subject</label>
            <input className="input"  id="subject" />
          </div>
          <div className="message">
            <label className="label" htmlFor="message">Message</label>
            <textarea className="input"  id="message" rows={5} />
          </div>
          <button className="submit" type="submit">
            <SvgPaperPlane className="submit-svg" />
            Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
