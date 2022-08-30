import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';

// importat pages
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import LoginPage from './pages/LoginPage';
import ProjectForm from './components/ProjectForm';

// import components
import HeroSection from './components/HeroSection';
import CreateAccount from './pages/CreateAccount';

function App() {

  return (
    <Router>
      <div>
        <Nav />
        <HeroSection />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="CreateProject" element={<ProjectForm/>} />
          <Route path="CreateAccount" element={<CreateAccount/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
