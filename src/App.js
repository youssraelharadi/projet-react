import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './pages/login/loginPage';
import RegisterPage from './pages/login/registerPage'; 
import HomePage from './pages/home';

function App() {
  return (
    <Router>
   
      <nav className="bg-gray-800 p-4 text-white">
        <Link to="/" className="mr-4">Accueil</Link>
        <Link to="/login" className="mr-4">Connexion</Link>
        <a href="#" className="mr-4">Suivez-nous</a>
      </nav>
      
      <Routes>
       <Route path='/' element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
