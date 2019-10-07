const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const nodemailer = require('nodemailer');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method === 'POST') {
      const user = functions.config().gmail.login;
      const pass = functions.config().gmail.pass;
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user,
          pass
        }
      });
      const {email, message} = req.body;
      const text = `Email: ${email}\n Message: ${message}`;
      const mailOptions = {
        from: 'h.d.sogbesan@gmail.com', // sender address
        to: 'h.d.sogbesan@gmail.com', // list of receivers
        subject: `New message from ${email} on My Portfolio Website`,
        text,
        html: `<p>Email: ${email}</p><p>Message: ${message}</p>`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          res.status(500).send(error);
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        res.status(200).send(info.messageId);
      });
    } else {
      return res.status(200).send('Habib Sogbesan portfolio site SendMail function');
    }
  });
});