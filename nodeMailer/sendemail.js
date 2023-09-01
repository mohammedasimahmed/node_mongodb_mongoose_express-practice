var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'iit2022031@iiitl.ac.in',
    pass: 'iiitl@1264'
  }
});

var mailOptions = {
  from: 'iit2022031@gmail.com',
  to: 'asimahmed991@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'hello'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 