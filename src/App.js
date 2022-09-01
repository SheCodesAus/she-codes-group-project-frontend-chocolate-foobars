import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';

// import pages
import LoginPage from './pages/LoginPage';

function App() {

  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
