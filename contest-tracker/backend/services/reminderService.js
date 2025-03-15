// reminderService.js
const nodemailer = require('nodemailer');

const sendNotification = (email, contest) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: 'your-email@gmail.com', pass: 'your-password' }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: `New Contest Alert: ${contest.name}`,
        text: `Upcoming Contest: ${contest.name} starts at ${contest.startTime}.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) console.error(error);
        else console.log('Email sent: ' + info.response);
    });
};

module.exports = { sendNotification };