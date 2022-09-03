import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';

// import pages

<<<<<<< Updated upstream
import RegisterForm from './pages/RegisterPage'
=======
import Dashboard from './pages/Dashboard'

import RegisterPage from './pages/RegisterPage'
>>>>>>> Stashed changes
import LoginPage from './pages/LoginPage';
import MentorProfile from './pages/MentorProfile'


function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
<<<<<<< Updated upstream
          <Route exact path="/register" element={<RegisterForm />} />
=======
          <Route exact path="login" element={<LoginPage />} />
          <Route exact path="sign-up" element={<RegisterPage />} />
>>>>>>> Stashed changes
          <Route exact path="/profile" element={<MentorProfile />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App




