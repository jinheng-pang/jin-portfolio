export interface ValidationResult<T> {
  error: Error | undefined;
  value: T;
}

export type Token = string | null;

export interface FormDataProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  recaptchaToken: Token;
}

export interface RecaptchaResponse {
    name: string,
    success: boolean
}