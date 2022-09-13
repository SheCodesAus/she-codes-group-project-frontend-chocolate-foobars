import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import './App.css';

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
          <Route path="/" element={<LoginPage setLoggedInUser={setLoggedInUser} />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/dashboard" element={<DashboardPage setLoggedInUser={setLoggedInUser} />} />
          <Route path="/profile" element={<MentorProfile />}>
            <Route path=":id" element={<MentorProfile />} />
          </Route> 
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App




