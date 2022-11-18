const nodemailer = require("nodemailer");

const { google } = require("googleapis");
const oauth_link = "https://developers.google.com/oauthplayground";
const { OAuth2 } = google.auth;
const { EMAIL, MAILING_ID, MAILING_REFRESH, MAILING_SECRET } = process.env;
const auth = new OAuth2(
  MAILING_ID,
  MAILING_REFRESH,
  MAILING_SECRET,
  oauth_link
);
exports.sendVerificationEmail = (email, name, url) => {
  auth.setCredentials({
    refresh_token: MAILING_REFRESH,
  });
  const accessToken = auth.getAccessToken();
  const smtp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: EMAIL,
      clientId: MAILING_ID,
      clientSecret: MAILING_SECRET,
      refreshToken: MAILING_REFRESH,
      accessToken,
    },
  });
  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: "Facebook email Verification",
    html: `<!DOCTYPE html>
    <html lang=en>
    <head>
    <meta charset=UTF-8>
    <meta http-equiv=X-UA-Compatible content="IE=edge">
    <meta name=viewport content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
    <div style=max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:Roboto;font-weight:600;color:#3b5998>
    <img src=https://res.cloudinary.com/dmhcnhtng/image/upload/v1645134414/logo_cs1si5.png alt style=width:30px>
    <span>Action requise: Activate Your Account</span>
    </div>
    <div style="padding:1rem 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;color:#141823;font-size:17px;font-family:Roboto">
    <span>Bonjour Omari</span>
    <div style="padding:20px 0">
    <span style="padding:1.5rem 0">
    Vous avez recemment crée votre compte sur Facebook, dans le but de completer votre enregistrement,
    confirmez
    votre compte
    </span>
    </div>
    <a href=${url} style="width:200px;padding:10px 15px;background:#4c649b;color:#fff;text-decoration:none;font-weight:600">Confirmez
    votre compte</a>
    <br>
    <div style=padding-top:20px>
    <span style="margin:1.5rem 0;color:#098f9c">Restez en contact avec tous vos proches ...</span>
    </div>
    </div>
    </body>
    </html>`,
  };
  smtp.sendMail(mailOptions, (err, res) => {
    if (err) return err;
    return res;
  });
};
