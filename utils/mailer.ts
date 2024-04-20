import nodemailer from "nodemailer";
import token from "./token";
import User from "@/models/userModel";

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8766a59bae2543",
    pass: "76f0e074110aca",
  },
});

async function sendMail(type: string, receiver: string) {
  if (type === "VERIFY") {
    const verificationToken = token.generate({ email: receiver }, "1h");

    await User.findOneAndUpdate(
      { email: receiver },
      {
        verificationToken: verificationToken,
      }
    );

    var mailOptions = {
      from: "joefelixdev@gmail.com",
      to: receiver,
      subject: "Verify your mail!",
      html: `<div>
                <h1>Verify by clicking the link</h1>
                <a>http://localhost:3000/verify-email/${verificationToken}<a/>
            </div>
            `,
    };

    transport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
}

export default sendMail;
