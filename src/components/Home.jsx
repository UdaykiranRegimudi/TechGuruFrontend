import React from 'react';
import {SignInButton} from '@clerk/clerk-react'
import Header from '../assets/Header';
import HomeContent from '../assets/HomeContent';
import Techs from '../assets/Techs';
import Upcoming from '../assets/Upcoming';
import Join from '../assets/join';
import Courses from '../assets/Courses';

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



const Home = () => (
  <div className={`bg-${COLORS.background} text-${COLORS.foreground} min-h-screen flex flex-col`}>
    <Header/>
    <HomeContent />
    <Techs/>
    <Upcoming/>
    <Courses/>
    <Join/>
    
  </div>
);

export default Home;
