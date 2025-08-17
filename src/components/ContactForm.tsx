import "./contactForm.css";
import SvgClose from "../svgComponents/Close";

interface ContactFormProps {
  open: boolean;
  children: React.ReactNode; // anything react can render, e.g. JSX, string, number
  onClose: () => void;
}

const ContactForm = ({ open, children, onClose }: ContactFormProps) => {
  if (!open) return null;

  return (
    <div className="overlay">
      <div className="contactForm">
        <button className="closeButton" onClick={onClose}>
          <SvgClose className="closeButton-svg" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default ContactForm;
