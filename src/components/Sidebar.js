import React, {useState} from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';


export default props => {

  const [isOpen, setOpen] = useState(false)

  const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideBar = () => {
    setOpen(false)
  }

  return (
    <>
      <Menu 
        width={'45%'}  
        right
        isOpen={isOpen}
        onOpen={handleIsOpen}
        onClose={handleIsOpen}
       >
       
        <a  className="menu-item" onClick={closeSideBar} href="/g-dunlop-portfolio-website/">
          Home
        </a>
        <a className="menu-item"  onClick={closeSideBar} href="#projects">
          Projects
        </a>
        <a className="menu-item" onClick={closeSideBar} href="#about">
          About
        </a>
        <a className="menu-item" onClick={closeSideBar} href="#contact">
          Contact
        </a>
        
      </Menu>
      </>
  );
};