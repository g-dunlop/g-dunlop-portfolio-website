
import './App.css';
import React from 'react';
import PortfolioContainer from './containers/PortfolioContainer';
import {BrowserRouter as Router, Routes, Route, Redirect,}from "react-router-dom";

import HeaderContainer from './containers/HeaderContainer';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">

      <HeaderContainer />
      <Router>
        <Routes>
          <Route path="/g-dunlop-portfolio-website/" element={<PortfolioContainer/>} />
          {/* <Route path="/g-dunlop-portfolio-website/projects/" element={<ProjectsContainer/>}/> */}
        </Routes>

      </Router>
      <Footer /> 
    </div>
  );
}

export default App;
