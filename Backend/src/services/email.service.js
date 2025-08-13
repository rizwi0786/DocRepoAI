// src/services/email.service.js
const nodemailer = require('nodemailer');
const logger = require('../config/logger');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

const sendPasswordReset = async (toEmail, resetLink) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM || 'no-reply@yourapp.com',
    to: toEmail,
    subject: 'Password reset request',
    html: `<p>You requested a password reset. Click the link below to reset your password. This link is valid for 1 hour.</p>
           <p><a href="${resetLink}">${resetLink}</a></p>`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    logger.info(`Password reset email sent: ${info.messageId}`);
    return info;
  } catch (err) {
    logger.error('Error sending password reset email', err);
    throw err;
  }
};


const sendWelcomeEmail = async (toEmail, name) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM || 'no-reply@yourapp.com',
    to: toEmail,
    subject: 'Welcome to Our App 🎉',
    html: `
      <h2>Welcome, ${name}!</h2>
      <p>We’re excited to have you on board. Your account has been created successfully.</p>
      <p>You can now log in and start using our app.</p>
      <br>
      <p>Cheers,</p>
      <p>The ${process.env.APP_NAME || 'Our App'} Team</p>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    logger.info(`Welcome email sent: ${info.messageId}`);
    return info;
  } catch (err) {
    logger.error('Error sending welcome email', err);
    throw err;
  }
};


module.exports = { sendPasswordReset,sendWelcomeEmail };
