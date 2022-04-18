
import './App.css';
import React from 'react';
import PortfolioContainer from './containers/PortfolioContainer';
import {BrowserRouter as Router, Routes, Route, Redirect,}from "react-router-dom";
import ProjectsContainer from './containers/ProjectsContainer';
import Header from './components/Header';



function App() {
  return (
    <div className="App">

      <Header />
      <Router>
        <Routes>
          <Route path="/g-dunlop-portfolio-website/" element={<PortfolioContainer/>} />
          <Route path="/g-dunlop-portfolio-website/projects" element={<ProjectsContainer/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
