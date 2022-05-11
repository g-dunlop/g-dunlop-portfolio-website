import React, {useEffect} from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  const [isOpen, setIsOpen] = ('true');

  
  

  return (
    <>
      <Menu width={'45%'}  right  >
        <a  className="menu-item" href="/g-dunlop-portfolio-website/">
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
      </>
  );
};