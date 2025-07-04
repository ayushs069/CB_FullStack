require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;

const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid');

let options = {
    auth: {
        api_key: process.env.SENDGRID_API_KEY // Use environment variable for security
    }
};

const mailer = nodemailer.createTransport(sgTransport(options));

app.set('view engine','hbs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/signup', (req, res) => {
  const { email } = req.body;

  mailer.sendMail({
    to: email,
    from: 'a26282174@gmail.com',
    subject: 'Kya Haal Hai?',
    text: 'Welcome to my page and thanks for signing up',
    html: '<b>Awesome! Signup done Successfully</b>'
  })
    .then(() => {
        console.log('Email sent: ');
        res.send('Done');
    })
    .catch((err) => {
        console.error('Email send error:', err);
        res.send('Failed to send email');
    });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});