import * as dotenv from "dotenv";
import * as nodemailer from "nodemailer";

dotenv.config();

export const sendEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const configuration = {
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    };

    const htmlTemplate = `
      <h1 style="color:#0D3167;">This is a message from user called   <span style="text-decoration: underline;">${name}</span>
      with   this email : ${email}  who send it from your portfolio</h1>
      <p>${message}</p>
    `;

    const transporter = nodemailer.createTransport(configuration);
    const options = {
      from: email,
      to: process.env.EMAIL,
      subject: "Email sent by user from my portfolio",
      html: htmlTemplate,
    };

    const info = await transporter.sendMail(options);
    return res
      .status(200)
      .json({ msg: "Your email has been sent successfully" });
  } catch (err) {
    console.log(err.message);
    return res.status(503).json({ err: err.message });
  }
};
