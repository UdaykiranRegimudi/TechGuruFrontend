import React from 'react';
import HomeContent from './../assets/HomeContent'
import Header from '../assets/Header';
import Join from '../assets/join'
import Courses from '../assets/Courses'
import Techs from '../assets/Techs'
import Events from './Events';

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


const Home = () => (
  <div className={`bg-${COLORS.background} text-${COLORS.foreground} min-h-screen flex flex-col`}>
    <Header />
    <HomeContent />
    <Techs/>
    <Courses/>
    <Join/>
 
  </div>
);

export default Home;
