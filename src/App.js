import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import './App.css';
import CandidateRegisteration from './components/CandidateRegisteration';
import Navbar from './components/Navbar';
import CandidateLogin from './components/CandidateLogin';
import Voter from './components/Voter';
import CandidatePage from './components/CandidatePage';
import Promise from './components/Promise';
import VoterLogin from './components/VoterLogin';
import VoterPage from './components/VoterPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidatelogin" element={<CandidateLogin />} />
        <Route path="/CandidateRegister" element={<CandidateRegisteration />} />
        <Route path="/voter" element={<Voter />} />
        <Route path="/candidate" element={<CandidatePage />} />
        <Route path="/promise" element={<Promise />} />
        <Route path='/voterlogin' element={<VoterLogin />} />
        <Route path="/voterpage" element={<VoterPage />} />
      </Routes>
    </>
  );
}

export default App;
