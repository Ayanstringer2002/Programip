// leaderboard.js
const express = require('express');
const router = express.Router();
const Leaderboard = require('../models/leaderboardSchema');

router.get('/', async (req, res) => {
    const leaderboard = await Leaderboard.find();
    res.json(leaderboard);
});

module.exports = router;
