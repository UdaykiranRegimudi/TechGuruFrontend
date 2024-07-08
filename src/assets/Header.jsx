import React from 'react';
import {SignInButton} from '@clerk/clerk-react'
import { Link } from 'react-scroll';

// import { Navbar, Nav } from 'rsuite';
// import NavMenu1 from './Nav'

const COLORS = {
  background: '#1a202c',
  foreground: '#f7fafc',
  primary: '#805ad5',
  primaryForeground: '#ffffff',
  secondary: '#2d3748',
  secondaryForeground: '#ffffff',
  mutedForeground: '#a0aec0',
  card: '#2d3748',
  cardForeground: '#f7fafc',
};

const HEADER_CLASSES = 'bg-card text-card-foreground p-4 flex justify-between items-center shadow-md';
const LINK_CLASSES = 'text-muted-foreground hover:text-foreground';
const BUTTON_CLASSES = 'py-2 px-4 rounded-lg hover:bg-opacity-80';
const MAIN_CONTAINER_CLASSES = 'flex-x flex items-center justify-center p-8';
const CONTENT_CONTAINER_CLASSES = 'bg-card text-card-foreground p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8';

const Header = () => (
  <header className={HEADER_CLASSES} style={{zIndex:1000,position:"fixed",top:0,width:'100%',backgroundColor:"white"}}>
    <div className="flex items-center space-x-2">
      <img src="/kmit.png" alt="logo" className="w-10 h-10" />
      <span className="font-bold text-lg mb-2">Project Tech</span>
    </div>
    <nav className="space-x-4">
      
      <Link to="home" spy={true} smooth={true} duration={100} className={LINK_CLASSES}>Home</Link>
      <Link to="tech" spy={true} smooth={true} duration={100} className={LINK_CLASSES}>Features</Link>
      <Link to="upcoming" spy={true} smooth={true} duration={100} className={LINK_CLASSES}>Events</Link>
      <Link to="course" spy={true} smooth={true} duration={100} className={LINK_CLASSES}>Courses</Link>
    </nav>
    <button className={`btn btn-outline-primary ${BUTTON_CLASSES}`}><SignInButton/></button>
  </header>
);

export default Header