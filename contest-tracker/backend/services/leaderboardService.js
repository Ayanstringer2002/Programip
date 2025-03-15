// leaderboardService.js
const Leaderboard = require('../models/leaderboardSchema');

const addScore = async (username, platform, contestName, score) => {
    const newEntry = new Leaderboard({ username, platform, contestName, score });
    await newEntry.save();
};

module.exports = { addScore };