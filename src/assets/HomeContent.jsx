import React from 'react';
import {SignInButton} from '@clerk/clerk-react'

import { Element } from 'react-scroll';
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

const CONTENT_CONTAINER_CLASSES = 'bg-card text-card-foreground p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-3 md:space-x-72';


const HomeContent = () => (
  <Element name="home">
    <main className="p-8 mt-28">
      <div className={CONTENT_CONTAINER_CLASSES}>
        <div className="flex-1">
          <h1 className="text-3xl font-bold underline">
            <span className="text-primary">Project</span>-T
          </h1>
          <h2 className="text-2xl font-bold mt-2">Your Gateway to Tech Mastery</h2>
          <p className="text-lg mt-2">Join our community to learn, compete, and innovate.</p>
          <p className="text-indigo-950 mt-4">
            Note: Project Tech is dedicated to helping students learn about new technologies through interactive courses, hackathons, CTF games, and tech projects. Our mission is to create a vibrant community where students can collaborate, compete, and excel in the tech world.
          </p>
          <SignInButton className={`mt-4 btn btn-outline-primary `}>Get Started</SignInButton>
        </div>
        <div className="flex-1">
          <img src="/pic1.png" alt="Illustration of a programmer" className="rounded-lg" style={{width:"100%",height:"50vh"}} />
        </div>
      </div>
    </main>
    </Element>
  );

  export default HomeContent