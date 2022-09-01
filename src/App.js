import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages
import Dashboard from './pages/Dashboard'
import RegisterForm from './pages/RegisterPage'


function App() {

  return (
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route exact path="/" element={<Dashboard />} />
    //     </Routes>
    //   </div>
 
    // </Router>

    <RegisterForm />
  );
}

export default App




