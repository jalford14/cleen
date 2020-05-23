var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
const creds = require("../config/config");

var transport = {
  host: "smtp.gmail.com",
  auth: {
    user: creds.EMAIL_ADDRESS,
    pass: creds.EMAIL_PASSWORD
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var phone = req.body.phone
  var notes = req.body.notes
  var content = `name: ${name} \n email: ${email} \n phone: ${phone} \n notes: ${content} `

  var mail = {
    from: name,
    to: "RECEIVING_EMAIL_ADDRESS_GOES_HERE",  //Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      })
    } else {
      res.json({
        msg: "success"
      })
    }
  })
})

module.exports = router;
