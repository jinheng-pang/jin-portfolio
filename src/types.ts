export interface ContactFormProps {
  open: boolean;
  onClose: () => void;
}

export interface ExperienceProps {
    jobTitle: string;
    company: string;
    start: string;
    end: string;
    description: string;
}