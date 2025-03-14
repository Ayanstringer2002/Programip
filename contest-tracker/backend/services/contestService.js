const axios = require('axios');

const getContests = async (platform) => {
    const urls = {
        codeforces: "https://codeforces.com/api/contest.list",
        leetcode: "https://kontests.net/api/v1/leetcode",
        codechef: "https://kontests.net/api/v1/code_chef"
    };

    const response = await axios.get(urls[platform]);
    return response.data;
};

module.exports = { getContests };