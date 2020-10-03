const nodemailer = require('nodemailer');

const Mailgen = require('mailgen');

const { EMAIL, PASSWORD, MAIN_URL } = require('../config');

let transporter = nodemailer.createTransport({
  service: 'Yahoo',
  secure: true,
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

let MailGenerator = new Mailgen({
  theme: 'default',
  product: {
    name: 'Nodemailer',
    link: MAIN_URL,
  },
});

exports.signup = (req, res, next) => {
  const { userEmail, name } = req.body;

  // Sign up the user ...

  // Then send the response

  let response = {
    body: {
      name,
      intro: "Welcome to Nodemailer! We're very excited to have you on board.",
    },
  };

  let mail = MailGenerator.generate(response);

  let message = {
    from: EMAIL,
    to: userEmail,
    subject: 'Sign up successful',
    html: mail,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res
        .status(200)
        .json({ msg: 'You should receive an email from us!' });
    })
    .catch((err) => console.error(err));
};

exports.getBill = (req, res, next) => {
  const { name, userEmail } = req.body;

  let response = {
    body: {
      name,
      intro: 'Your bill has arrived!',
      table: {
        data: [
          {
            item: 'MERN stack book',
            description: 'A mern stack book',
            price: '$10.99',
          },
        ],
      },
      outro: 'Looking forward to do more business with you',
    },
  };

  let mail = MailGenerator.generate(response);

  let message = {
    from: EMAIL,
    to: userEmail,
    subject: 'transaction',
    html: mail,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res
        .status(200)
        .json({ msg: 'you should receive an email from us' });
    })
    .catch((err) => console.error(err));
};
