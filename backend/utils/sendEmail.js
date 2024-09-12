const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendEmail(recipient) {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let info = await transporter.sendMail({
    from: `"Task Scheduler" <${process.env.EMAIL_USER}>`,
    to: recipient,
    subject: "Task Reminder",
    text: "This is a reminder for your scheduled task.",
  });

  console.log("Email sent: %s", info.messageId);
}

module.exports = sendEmail;
