import "./contactForm.css";
import SvgClose from "../../svgComponents/Close";
import SvgEnvelope from "../../svgComponents/Envelope";

interface ContactFormProps {
  open: boolean;
  onClose: () => void;
}

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
          <label className="label" htmlFor="name">Name</label>
          <input className="input" id="name" />
          <label className="label" htmlFor="email">Email</label>
          <input className="input"  id="email" type="email" />
          <label className="label" htmlFor="subject">Subject</label>
          <input className="input"  id="subject" />
          <label className="label" htmlFor="message">Message</label>
          <input className="input"  id="message" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
