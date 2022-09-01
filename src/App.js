import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';

// import pages

import Dashboard from './pages/Dashboard'

import RegisterForm from './pages/RegisterPage'
import LoginPage from './pages/LoginPage';
import MentorProfile from './pages/MentorProfile'


function App() {

  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="login" element={<LoginPage />} />
          <Route exact path="/profile" element={<MentorProfile />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App




