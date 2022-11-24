import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import './App.css';
import CandidateRegisteration from './components/CandidateRegisteration';
import Navbar from './components/Navbar';
import CandidateLogin from './components/CandidateLogin';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
          </>
        } />
        <Route
          path="/candidatelogin"
          element={
            <>
              <CandidateLogin />
            </>} />
        <Route
          path="/CandidateRegister"
          element={
            <>
              <CandidateRegisteration />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
