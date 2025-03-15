// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContestList from './components/ContestList';
import Filter from './components/Filter';
import Bookmark from './components/Bookmark';
import ReminderForm from './components/ReminderForm';
import Leaderboard from './pages/Leaderboard';
import Login from './pages/Login';
import './styles/ContestCard.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contests" element={<ContestList />} />
                    <Route path="/filter" element={<Filter />} />
                    <Route path="/bookmark" element={<Bookmark />} />
                    <Route path="/reminder" element={<ReminderForm />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;