// Leaderboard.js
import React from 'react';

const Leaderboard = ({ data }) => {
    return (
        <div>
            {data.map(user => (
                <div key={user.id}>{user.username} - {user.score}</div>
            ))}
        </div>
    );
};

export default Leaderboard;