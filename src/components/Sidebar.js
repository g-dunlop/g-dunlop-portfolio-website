import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    
      <Menu width={'50%'} right  >
        <a className="menu-item" href="/g-dunlop-portfolio-website/">
          Home
        </a>
        <a className="menu-item" href="#about">
          About
        </a>
        <a className="menu-item" href="#contact">
          Contact
        </a>
        <a className="menu-item" href="#projects">
          Projects
        </a>
      </Menu>
   
  );
};