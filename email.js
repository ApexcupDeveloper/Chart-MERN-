var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'apexcup@outlook.com',
    pass: 'xincheng1201'
  }
});

var mailOptions = {
//  from: 'apexcup@outlook.com',
  to: 'apexcup199096@gmail.com',
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