import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';

// import pages

import RegisterForm from './pages/RegisterPage'
import LoginPage from './pages/LoginPage';
import MentorProfile from './pages/MentorProfilePage';
import DashboardPage from './pages/Dashboard';
import NotFound from './pages/NotFound'


function App() {

  const [loggedInUser, setLoggedInUser] = useState({id:"",isSuperUser:false})
  

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<LoginPage setLoggedInUser={setLoggedInUser} />} />
          <Route exact path="/register" element={<RegisterForm />} />
          <Route exact path="/profile" element={<MentorProfile />} />
          <Route exact path="/dashboard" element={<DashboardPage setLoggedInUser={setLoggedInUser} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App




