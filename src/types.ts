import type { ReactNode } from "react";

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

export interface StatsPanelProps {
  icon: ReactNode;
  title: string;
  statistic: string;
  extraInformation: string;
}

export interface ValidationResult<T> {
  error: Error | undefined;
  value: T;
}

export interface MailProps {
  name: string,
  email: string,
  subject: string,
  message: string,
  recaptchaToken: string
}