require("dotenv").config(); // load environment variables
const express = require("express");
const { validate } = require("deep-email-validator");
const path = require("path");

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
