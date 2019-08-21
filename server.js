const express = require("express");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
const oauth2Client = new OAuth2(
  process.env.clientID,
  process.env.clientSecret, // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: process.env.refreshToken
});
const accessToken = oauth2Client.getAccessToken();

const smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.user,
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
    refreshToken: process.env.refreshToken,
    accessToken: accessToken
  }
});

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
    // send mail with defined transport object
    smtpTransport.sendMail(
      {
        from: process.env.user, // sender address
        to: req.body.email, // list of receivers
        subject: "Conformation!", // Subject line
        generateTextFromHTML: true,
        html: `<h4>Hello ${
          req.body.name
        },</h4><p>This is to verify that Priyansh Radadiya has recieved your email.</p><p>He will be contacting you within 2 business day.</p><p>For any urgent inquires you can contact him on 7057337875</p><p>Thankyou</p><p>Priyansh</p>` // plain text body
      },
      (err, data) => {
        if (err) {
          console.log(err);
          res.json({
            error:
              "There might be something wrong. Please check the email or try again later.",
            err: err
          });
        } else {
          console.log("email sent");
          res.json({
            sent:
              "Hey you must have recived an email. If not please submit again."
          });
        }
      }
    );
    smtpTransport.sendMail(
      {
        from: process.env.user, // sender address
        to: "radadiyapriyansh@gmail.com", // list of receivers
        subject: "From PR Portfolio", // Subject line
        generateTextFromHTML: true,
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
