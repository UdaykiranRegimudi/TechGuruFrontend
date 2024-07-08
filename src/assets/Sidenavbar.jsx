import React from 'react';
import { UserButton, useUser } from '@clerk/clerk-react';
import { FaTachometerAlt, FaLaptopCode, FaBook, FaFlagCheckered, FaTrophy, FaLifeRing } from 'react-icons/fa';
import { Sidebar, SidebarLinks, SidebarLink, SupportProfile } from './SideNav';

export const Sidenavbar = () => {
  const { user } = useUser();
  const username = user.username || user.firstName || user.lastName || user.emailAddress;


  return (
    <Sidebar>
      <div>
        <SidebarLinks>
          <SidebarLink to="/" className='m-2'>
            <FaTachometerAlt />Dashboard
          </SidebarLink>
          <SidebarLink to="/hackathons" className='m-2'>
            <FaLaptopCode />Hackathons
          </SidebarLink>
          <SidebarLink to="/courses" className='m-2'>
            <FaBook />Courses
          </SidebarLink>
          <SidebarLink to="/ctf" className='m-2'>
            <FaFlagCheckered />Catch the Flag
          </SidebarLink>
          <SidebarLink to="/winners" className='m-2'>
            <FaTrophy />Winners
          </SidebarLink>
        </SidebarLinks>
      </div>
      <SupportProfile>
        <SidebarLink to="/support" className='m-2'>
          <FaLifeRing />Support
        </SidebarLink>
        <SidebarLink to="/profile" className='mt-2 ml-1 mr-2 mb-2'>
          <UserButton /> <span className='ml-2'>{username}</span>
        </SidebarLink>
      </SupportProfile>
    </Sidebar>
  );
};
