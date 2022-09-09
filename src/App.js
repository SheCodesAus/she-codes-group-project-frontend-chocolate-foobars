import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';

// import pages

import RegisterForm from './pages/RegisterPage'
import LoginPage from './pages/LoginPage';
import MentorProfile from './pages/MentorProfilePage';
import DashboardPage from './pages/Dashboard';


function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterForm />} />
          <Route exact path="/profile" element={<MentorProfile />} />
          <Route exact path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App




