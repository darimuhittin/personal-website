var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");

export async function sendMail(message) {
  var transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: "darimuhittinwebsite@gmail.com",
        // pass: "5Emrends1.",
        pass: "muciimbibsdohujb",
      },
    })
  );

  var mailOptions = {
    from: "darimuhittinwebsite@gmail.com",
    to: "darimuhittin@gmail.com",
    subject: "Hello ✔",
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
