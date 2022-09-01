import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages
import Dashboard from './pages/Dashboard'
import LoginPage from './pages/LoginPage'
import MentorProfile from './pages/MentorProfile'

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/profile" element={<MentorProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
