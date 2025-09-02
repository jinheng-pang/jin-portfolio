import "./contactForm.css";
import SvgClose from "../../svgComponents/Close";
import SvgEnvelope from "../../svgComponents/Envelope";
import SvgPaperPlane from "../../svgComponents/PaperPlane";
import type { ContactFormProps, FormDataProps, Token } from "../../types";

import ReCAPTCHA from "react-google-recaptcha";
import { useState, type ChangeEvent, type MouseEvent } from "react";

const ContactForm = ({ open, onClose }: ContactFormProps) => {
  // State to hold form data
  const [formData, setFormData] = useState<FormDataProps>({
    name: "",
    email: "",
    subject: "",
    message: "",
    recaptchaToken: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleRecaptchaTokenChange = (t: Token) => {
    if (!t) {
      alert("Please complete the reCAPTCHA!");
      return;
    }
    formData.recaptchaToken = t;
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Send form data to the backend
    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Convert data to JSON for use
      });

      const result = await response.json();

      if (!response.ok) {
        alert(`Failed to send message: ${result.message}`);
      }

      if (result.status === "success") {
        alert("Email sent");
      } else {
        alert(`Operation failed: ${result.message}`);
      }
    } catch (error) {
      console.error("Error", error);
      alert(`Network error or cannot connect to server`);
    }
  };

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
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              className="input"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="email">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              id="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="subject">
            <label className="label" htmlFor="subject">
              Subject
            </label>
            <input
              className="input"
              id="subject"
              value={formData.subject}
              onChange={handleInputChange}
            />
          </div>
          <div className="message">
            <label className="label" htmlFor="message">
              Message
            </label>
            <textarea
              className="input"
              id="message"
              value={formData.message}
              rows={5}
              onChange={handleInputChange}
            />
          </div>
          <ReCAPTCHA
            className="captcha"
            sitekey="6LdU_7grAAAAAFhhuX_iIlmQV883ny_ZukxkzTGV"
            onChange={handleRecaptchaTokenChange}
          />
          <button className="submit" type="submit" onClick={handleSubmit}>
            <SvgPaperPlane className="submit-svg" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
