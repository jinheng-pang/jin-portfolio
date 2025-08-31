import type { ValidationResult, MailProps } from "../types";
import type { Request, Response } from "express";

require("dotenv").config(); // load environment variables
const express = require("express");
const { validate } = require("deep-email-validator");
const path = require("path");
const Joi = require('joi');

const app = express();
const PORT = process.env.PORT || 3000;

// Populate req body
app.use(express.json());

export async function verifyRecaptcha(token: string) {
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  const recaptchaURL = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${token}`;

  const response = await fetch(recaptchaURL, {method: 'POST'});
  const result = await response.json();

  return result.success;
}

app.POST('/send-email', async (req: Request, res: Response) => {
    const schema = Joi.object( {
        name: Joi.string().min(5).required(),
        email: Joi.string().min(5).required(),
        subject: Joi.string().min(5).required(),
        message: Joi.string().min(5).required(),
        recaptchaToken: Joi.string().required(),
    })

    const {error, value}: ValidationResult<MailProps> = schema.validate(req.body);

    const {name, email, subject, message, recaptchaToken} = value;

    // Verify recaptcha with Google API
    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken)
    if (!isRecaptchaValid)
        res.status(404).send("reCaptcha verification failed. Please try again!")
})
