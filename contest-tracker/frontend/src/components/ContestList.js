import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContestList = () => {
    const [contests, setContests] = useState([]);

    useEffect(() => {
        axios.get('/api/contests')
            .then(response => setContests(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {contests.map(contest => (
                <div key={contest.id} className="contest-card">{contest.name}</div>
            ))}
        </div>
    );
};

export default ContestList;
