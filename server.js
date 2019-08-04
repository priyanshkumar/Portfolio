const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.post("/api/contact", (req, res) => {
  if (!req.body.name) {
    res.json({ error: "Please provide your fullname!" });
  } else if (!req.body.email) {
    res.json({ error: "Please provide your email" });
  } else if (!req.body.subject) {
    res.json({ error: "Please provide the subject for contact!" });
  } else if (!req.body.message) {
    res.json({ error: "Please provide the description!" });
  } else {
    let transporter = nodemailer.createTransport({
      service: "gmail", // true for 465, false for other ports
      auth: {
        user: process.env.user, // generated ethereal user
        pass: process.env.pass // generated ethereal password
      }
    });

    // send mail with defined transport object
    transporter.sendMail(
      {
        from: "pradadiya667@gmail.com", // sender address
        to: req.body.email, // list of receivers
        subject: "Conformation!", // Subject line
        html: `<h4>Hello ${
          req.body.name
        },</h4><p>This is to verify that Priyansh Radadiya has recieved your email.</p><p>He will be contacting you within 2 business day.</p><p>For any urgent inquires you can contact him on 7057337875</p><p>Thankyou</p><p>Priyansh</p>` // plain text body
      },
      (err, data) => {
        if (err) {
          console.log(err);
          res.json({
            error:
              "There might be something wrong. Please check the email or try again later."
          });
        } else {
          console.log("email sent");
          res.json({
            sent:
              "Hey you must have recived an email. If not check your email and submit again."
          });
        }
      }
    );
    transporter.sendMail(
      {
        from: "pradadaiya667@gmail.com", // sender address
        to: "pradadiya667@gmail.com", // list of receivers
        subject: "From PR Portfolio", // Subject line
        html: `<h2>Hi Priyansh you got a new message</h2>
        <p>name: ${req.body.name}</p>
        <p>email: ${req.body.email}</p><p>subject: ${
          req.body.subject
        }</p><p>message: ${req.body.message}</p><p>ThankYou</p>` // plain text body
      },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log("email sent");
        }
      }
    );
  }
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
