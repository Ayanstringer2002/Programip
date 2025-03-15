// Filter.js
import React from 'react';

const Filter = ({ platforms, setPlatform }) => {
    return (
        <div>
            {platforms.map(platform => (
                <button key={platform} onClick={() => setPlatform(platform)}>
                    {platform}
                </button>
            ))}
        </div>
    );
};
export default Filter;