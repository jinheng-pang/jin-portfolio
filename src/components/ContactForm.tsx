import { useState } from "react";

interface ContactFormProps {
  open: boolean;
  children: React.ReactNode; // anything react can render, e.g. JSX, string, number
  onClose: () => void;
}

const ContactForm = ( { open, children, onClose}: ContactFormProps ) => {
  if (!open) return null

  return (
    <div>
        <button onClick={onClose}>Close Modal</button>
        {children}
    </div>
  );
};

export default ContactForm;
