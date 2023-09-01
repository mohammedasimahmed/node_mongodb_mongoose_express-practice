var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'asmitchouhan94@gmail.com',
    pass: 'Asmitchouhan123'
  }
});

var mailOptions = {
  from: 'asmitchouhan94@gmail.com',
  to: 'asimahmed991@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 