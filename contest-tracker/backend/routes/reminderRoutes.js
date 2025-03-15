// reminderRoutes.js
const express = require('express');
const router = express.Router();
const { sendNotification } = require('../services/reminderService');

router.post('/notify', (req, res) => {
    const { email, contest } = req.body;
    sendNotification(email, contest);
    res.send('Notification sent');
});

module.exports = router;