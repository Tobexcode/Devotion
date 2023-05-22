import nodemailer from "nodemailer";

const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASSWORD;
const port = process.env.SMTP_PORT;
const host = process.env.SMTP_HOST;

export const transporter = nodemailer.createTransport({
  port: Number(port),
  host: host,
  auth: {
    user,
    pass,
  },

  logger: true,
  debug: true,
});
