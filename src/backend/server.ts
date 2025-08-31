import type { ValidationResult, FormDataProps, Token } from "../frontend/types";
import type { Request, Response } from "express";

require("dotenv").config(); // load environment variables (secrets)
const express = require("express");
const Joi = require("joi"); // validation library
const cors = require("cors"); // allow API request

const app = express();
const PORT = process.env.PORT || 3000;

// Populate req body
app.use(express.json());
app.use(cors());

export async function verifyRecaptcha(token: Token) {
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  const recaptchaURL = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${token}`;

  const response = await fetch(recaptchaURL, { method: "POST" });
  const result = await response.json();

  return result.success;
}

app.POST("/send-email", async (req: Request, res: Response) => {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
    email: Joi.string().min(5).email({ minDOmainSegments: 2 }).required(),
    subject: Joi.string().min(5).required(),
    message: Joi.string().min(5).required(),
    recaptchaToken: Joi.string().required(),
  });

  const { error, value }: ValidationResult<FormDataProps> = schema.validate(
    req.body
  );

  const { name, email, subject, message, recaptchaToken } = value;

  // Verify recaptcha with Google API
  const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
  if (!isRecaptchaValid)
    res.status(404).send("reCaptcha verification failed. Please try again!");
});

app.listen(PORT, () => console.log(`CORS-enabled server running on port ${PORT}...`));
