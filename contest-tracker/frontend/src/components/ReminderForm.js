// ReminderForm.js
import React, { useState } from 'react';

const ReminderForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Reminder set for: ${email}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
            />
            <button type="submit">Set Reminder</button>
        </form>
    );
};

export default ReminderForm;