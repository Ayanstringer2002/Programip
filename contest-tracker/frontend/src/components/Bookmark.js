// Bookmark.js
import React, { useState } from 'react';

const Bookmark = ({ contest }) => {
    const [bookmarked, setBookmarked] = useState(false);

    const handleBookmark = () => {
        setBookmarked(!bookmarked);
    };

    return (
        <button onClick={handleBookmark}>
            {bookmarked ? 'Unbookmark' : 'Bookmark'}
        </button>
    );
};

export default Bookmark;
