import * as dotenv from "dotenv";

import * as nodemailer from "nodemailer";
dotenv.config();

export const sendEmail = (req, res) => {
  try {
    const { name, email, message } = req.body;

    const configuration = {
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    };
    // templeate t0  send email
    const htmlTemplate = `
      <h1 style="color:#0D3167;">This is a message from user called   <span style="text-decoration: underline;">${name}</span>
      with   this email : ${email}  who send it from your portifolio</h1>
      <p>${message}</p>
    `;

    const transpoter = nodemailer.createTransport(configuration);
    const options = {
      from: email,
      to: process.env.EMAIL,
      template: "email",
      subject: "email sent by user from my portifolio",
      html: htmlTemplate,
    };

    transpoter.sendMail(options, (err, info) => {
      if (err) {
        console.log(err.message);
        return res.status(503).json({ err: err });
      } else {
        if (info) {
          console.log(info);
          return res
            .status(200)
            .json({ msg: "your email has been sent successfully " });
        }
      }
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ err: error.message });
  }
};
