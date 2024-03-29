var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");

var transport = {
  host: "smtp.gmail.com",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD
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
  var type = req.body.type
  var name = req.body.name
  var email = req.body.email
  var phone = req.body.phone
  var notes = req.body.notes
  var content = `type: ${type} \n name: ${name} \n email: ${email} \n phone: ${phone} \n notes: ${notes}`

  var mail = {
    from: name,
    to: process.env.EMAIL_ADDRESS,
    subject: "New Cleen Deal!",
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
