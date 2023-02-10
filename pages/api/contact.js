import { sendMail } from "../../lib/mailer";

export default function handler(req, res) {
  console.log(req.body);
  sendMail(`
    <h1>Contact Form</h1>
    <p>Name: ${req.body.name}</p>
    <p>Email: ${req.body.email}</p>
    <p>Message: ${req.body.message}</p>
    `);
  res.status(200);
  res.send("success");
}
